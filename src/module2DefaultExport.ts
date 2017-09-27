/**
 * class with default keyword
 */
export default class DefaultExport {
    private Target: string;

    /**
     * 
     * @param target the target to say hello.
     */
    constructor(target: string) {
        this.Target = target;
        console.log("DefaultExport.constructor called");
    }

    public sayHello(): void {
        console.log("hello " + this.Target + " from class DefaultExport");
    }
}

