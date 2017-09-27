class Hello {
    private Target:string;

    constructor(target:string){
        this.Target=target;
    }

    public sayHello():void {
        console.log("hello " + this.Target);
    }
}

const hello:Hello= new Hello("world");
hello.sayHello();