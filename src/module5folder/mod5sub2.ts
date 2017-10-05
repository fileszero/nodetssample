export enum mod5Status {
    Active = 1,
    Stop = 2
}

export namespace sub2 {
    export function Func(num: number): void {   // namespaceで同名関数も定義可能
        console.log("mod5sub2.Func arg:" + num);
    }
}