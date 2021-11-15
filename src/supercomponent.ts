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

    constructor() {
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
            model: this.get(),
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
    /**
     * @deprecated Use `this.set()` instead. Will be removed in next major release.
     */
    public update(model:Partial<Model>, skipRender = false): void
    {
        // @ts-ignore
        this.set(model, skipRender);
    }

    public set(model:Partial<Model>, skipRender = false): void
    {
        this.model = Object.assign(this.model, model);
        this.data = this.model;
        if (!skipRender)
        {
            this.debounceRender();
        }
        this.debounceUpdate();
    }

    public get(): Model
    {
        return {...this.model};
    }

    public trigger(trigger:string): void
    {
        this.state = this.stateMachine?.[this.state]?.[trigger] ?? "ERROR";
        this.debounceRender();
        this.debounceUpdate();
    }

    public render(): void {}

    public updated(): void {}

    public connected(): void {}
    connectedCallback(){
        this.connected();
    }

    public disconnected(): void {}
    disconnectedCallback() {
        this.disconnected();
    }
}
