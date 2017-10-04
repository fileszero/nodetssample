import * as ss from "simple-statistics";

// y = 5.4955x + 8.6474
const plot_data = [
    [1, 2], [2, 3], [3, 12], [4, 23], [5, 45], [6, 68], [7, 54], [8, 69], [9, 68], [10, 79],
    [11, 69], [12, 79], [13, 68], [14, 97], [15, 86], [16, 70], [17, 89], [18, 98], [19, 109], [20, 139]
];

const result = ss.linearRegression(plot_data);
const gradient = result.m;
const yIntercept = result.b;
console.log("y=" + gradient + "x+" + yIntercept );

process.kill(process.pid);  // it's need for VS code debugger
