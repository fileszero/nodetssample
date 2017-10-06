import * as df from "date-fns";

const now = new Date();
const start = df.startOfDay( now );

console.log(start);
console.log(df.format(start, "YYYYMMDD HHmmss"));