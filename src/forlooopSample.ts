let list = [4, 5, 6];

for (const i in list) {
    console.log("in:" + i); // "0", "1", "2",
}

for (const i of list) {
    console.log("of:" + i); // "4", "5", "6"
}

list.forEach((val, idx, arr) => {
    console.log("forEach:" + val); // "4", "5", "6"
});
console.log("end forEach loop");


class ThisTest {
    private theMember = "theMember";
    public forEachTest(): void {
        list.forEach((val, idx, arr) => {
            this.theMember += val;
            console.log(this.theMember + " forEach:" + val); // "4", "5", "6"
        });
        console.log(this.theMember + " end forEach loop");
    }
}

let this_test = new ThisTest();
this_test.forEachTest();