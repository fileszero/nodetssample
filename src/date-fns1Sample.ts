import * as datefns from "date-fns";

const now = new Date();
const start = datefns.startOfDay( now );

console.log(start);
console.log(datefns.format(start, "YYYYMMDD HHmmss"));