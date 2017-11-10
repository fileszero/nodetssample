export interface ISample {
    somefunc(): void;
}

export class ServiceSample {
    private mSample: ISample;
    constructor(sample: ISample) {
        this.mSample = sample;
    }

    public DoSomething() {
        this.mSample.somefunc();
    }
}