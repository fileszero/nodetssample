let list = [4, 5, 6];

for (const i in list) {
    console.log("in:" + i); // "0", "1", "2",
}

for (const i of list) {
    console.log("of:" + i); // "4", "5", "6"
}