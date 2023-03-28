# Super Components

Give your Web Components modern-day superpowers:

- create stateful web components similar to [React](https://github.com/facebook/react/)
- manage your components state with an [xstate](https://github.com/davidkpiano/xstate) inspired state machine
- bring your own client-side rendering framework/library such as [lit-html](https://lit-html.polymer-project.org/guide)
- works in every major browser
- lightweight (400 bytes)

## Installation

Install via NPM

```bash
npm i -S @codewithkyle/supercomponent
```

Install via CDN

```html
<script src="https://unpkg.com/@codewithkyle/supercomponent@2/supercomponent.min.js"></script>
```

```javascript
import SuperComponent from "https://unpkg.com/@codewithkyle/supercomponent@2/supercomponent.min.mjs";
```

## Usage

```typescript
import SuperComponent from "@codewithkyle/supercomponent";

type ExampleModel = {
    products: Array<any>;
}
class Example extends SuperComponent<ExampleModel>{
    constructor(){
        super();
        this.state = "LOADING";
        this.stateMachine = {
            LOADING: {
                SUCCESS: "IDLING",
                ERROR: "ERROR",
            },
            IDLING: {
                TOGGLE: "LOADING",
            }
        }

        // Set the model & trigger the first render
        this.set({
            products: [],
        });
    }

    override async connected(){
        const request = await fetch("/products.json");
        if (request.ok){
            const response = await request.json();

            // Updates the model
            this.set({ products: response });

            // Trigger a state transition
            this.trigger("SUCCESS");
        } else {
            this.trigger("ERROR");
        }
    }

    override disconnected() {
        // Do something when the component disconnects from the DOM
    }

    override render(returnMarkup = false) {
        // Render this component model using any UI framework
        switch (this.state){
            case "ERROR":
                // Render error message
                break;
            case "IDLING":
                // Render this.model.products
                break;
            default:
                // Render loading animation
                break;
        }
        if (returnMarkup) return; // return UI framework markup
        else // render markup
    }
}
customElements.define("example-component", Example);
```
