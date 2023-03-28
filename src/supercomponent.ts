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
    public state: string;
    public stateMachine: StateMachine;
    private _scRenderTimeoutId: number | null;

    constructor() {
        super();
        this.model = {} as Model;
        this.state = "INACTIVE";
        this.stateMachine = {};
        this._scRenderTimeoutId = null;
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
        return (...args:Array<any>) => {
            window.clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                callback.apply(null, args);
            }, wait);
        };
    }

    private debounceRender()
    {
        if (this._scRenderTimeoutId)
        {
            window.cancelAnimationFrame(this._scRenderTimeoutId);
        }
        this._scRenderTimeoutId = window.requestAnimationFrame(this.render.bind(this));
    }

    public set(model:Partial<Model>, skipRender = false): void
    {
        this.model = Object.assign(this.model, model);
        if (!skipRender)
        {
            this.debounceRender();
        }
    }

    public get(): Model
    {
        return {...this.model};
    }

    public trigger(trigger:string): void
    {
        this.state = this.stateMachine?.[this.state]?.[trigger] ?? "ERROR";
        this.debounceRender();
    }

    public render(): void {}

    public connected(): void {}
    connectedCallback()
    {
        this.connected();
    }

    public disconnected(): void {}
    disconnectedCallback()
    {
        this.disconnected();
    }
}
