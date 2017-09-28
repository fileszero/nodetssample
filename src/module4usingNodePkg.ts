import * as regression from "regression";
// regressionは、回帰直線を求めるライブラリ、@typesに登録なし！！！
// 何もしないと
// Could not find a declaration file for module 'regression'. 'c:/usr/src/NodeTSSample/node_modules/regression/dist/regression.js' implicitly has an 'any' type.
// Try `npm install @types/regression` if it exists or add a new declaration (.d.ts) file containing `declare module 'regression';`
// と怒られます。
// $ npm install -g dts-gen
// $ dts-gen -m regression
//  生成されたファイル全体を declare module 'regression'{}　で囲って、srcにコピー

// y = 5.4955x + 8.6474
const plot_data = [
    [1, 2], [2, 3], [3, 12], [4, 23], [5, 45], [6, 68], [7, 54], [8, 69], [9, 68], [10, 79],
    [11, 69], [12, 79], [13, 68], [14, 97], [15, 86], [16, 70], [17, 89], [18, 98], [19, 109], [20, 139]
];

const result = regression.linear(plot_data , { order: 2, precision: 4 });
const gradient = result.equation[0];
const yIntercept = result.equation[1];
console.log("y=" + gradient + "x+" + yIntercept );

process.kill(process.pid);  // it's need for VS code debugger
