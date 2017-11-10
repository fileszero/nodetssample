export interface ISample {
    somefunc(): void;
    intFunc(): number;
    inc(): number;
}

export class ServiceSample {
    private mSample: ISample;
    constructor(sample: ISample) {
        this.mSample = sample;
    }

    public DoSomething(): number {
        this.mSample.somefunc();
        return this.mSample.intFunc();
    }

    public Inclement(): number {
        return this.mSample.inc();
    }

    public NoTestedMethod(): string {
        return "Not tested!";
    }
}