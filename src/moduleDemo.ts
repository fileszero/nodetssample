import { Hello } from "./module1SimpleModule";

import DefaultExport from "./module2DefaultExport"; // defaultの場合は {} 無し

// module 1 demo
const hello: Hello = new Hello("world");
hello.sayHello();

// module 2 demo
const mod2: DefaultExport = new DefaultExport("default");
mod2.sayHello();


process.kill(process.pid);  // it's need for VS code debugger

