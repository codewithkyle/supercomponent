type StateMachine = {
    [state:string]: {
        [trigger:string]: string;
    }
};
export default class SuperComponent<Model> extends HTMLElement {
    public model: Model;
    public data: Model;
    public state: string;
    public stateMachine: StateMachine;

    constructor() {
        super();
        // @ts-ignore
        this.model = {};
        this.data = this.model;
        this.state = "INACTIVE";
        this.stateMachine = {};
    }

    public update(model) {
        this.model = Object.assign(this.model, model);
        this.data = this.model;
        this.updated();
        this.render();
    }

    public trigger(trigger:string){
        this.state = this.stateMachine?.[this.state]?.[trigger] ?? "ERROR";
        this.updated();
        this.render();
    }

    public render() {}

    public updated() {}

    public connected() {}
    connectedCallback(){
        this.connected();
    }

    public disconnected() {}
    disconnectedCallback() {
        this.disconnected();
    }
}