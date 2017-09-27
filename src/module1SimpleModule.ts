export class Hello {
    private Target: string;

    constructor(target: string) {
        this.Target = target;
        console.log("Hello.constructor called");
    }

    public sayHello(): void {
        console.log("hello " + this.Target + " from module_1.ts class Hello");
    }
}

