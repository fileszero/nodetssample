import { Hello } from "./module1SimpleModule";

// module 1 demo
const hello: Hello = new Hello("world");
hello.sayHello();



process.kill(process.pid);  // it's need for VS code debugger

