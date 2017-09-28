import { Hello } from "./module1SimpleModule";  // 拡張子はつけない

import DefaultExport from "./module2DefaultExport"; // defaultの場合は {} 無し

import * as Mod3 from "./module3MultiExport";   // 複数Exportの一括読み込み
import { Mod3Sub3 } from "./module3MultiExport";   // 複数Exportの部分読み込み

// module 1 demo
const hello: Hello = new Hello("world");
hello.sayHello();

// module 2 demo
const mod2: DefaultExport = new DefaultExport("default");
mod2.sayHello();

// module 3 demo
const mod3sub1: Mod3.Mod3Sub1 = new Mod3.Mod3Sub1();
const mod3sub2 = new Mod3.Mod3Sub2();   // 型は無くても推論してくれるようです
const mod3sub3 = new Mod3.Mod3Sub3();
mod3sub1.Hi();
mod3sub2.Ho();
mod3sub3.Yo();

const mod3sub3_2 = new Mod3Sub3();
mod3sub3_2.Yo();

process.kill(process.pid);  // it's need for VS code debugger

