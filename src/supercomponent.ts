export type StateMachine = {
    [state:string]: {
        [trigger:string]: string;
    }
};
export type Snapshot = {
    state: string,
    model: any,
}
export default class SuperComponent<Model> extends HTMLElement {
    public model: Model;
    public data: Model;
    public state: string;
    public stateMachine: StateMachine;

    constructor()
    {
        super();
        this.model = {} as Model;
        this.data = this.model;
        this.state = "INACTIVE";
        this.stateMachine = {};
    }

    public snapshot(): Snapshot
    {
        const snapshot: Snapshot = {
            state: this.state,
            model: {...this.model} as Model,
        };
        return snapshot;
    }

    public debounce = (callback:Function, wait:number) => {
        let timeoutId = null;
        return (...args) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback.apply(null, args);
            }, wait);
        };
    }

    private debounceRender = this.debounce(this.render.bind(this), 80);
    private debounceUpdate = this.debounce(this.updated.bind(this), 80);
    public update(model:Partial<Model>, skipRender = false)
    {
        this.model = Object.assign(this.model, model);
        this.data = this.model;
        if (!skipRender)
        {
            this.debounceRender();
        }
        this.debounceUpdate();
    }

    public trigger(trigger:string)
    {
        this.state = this.stateMachine?.[this.state]?.[trigger] ?? "ERROR";
        this.debounceRender();
        this.debounceUpdate();
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
