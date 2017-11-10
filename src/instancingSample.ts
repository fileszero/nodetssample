export class SomeRecord {
    constructor(init?: Partial<SomeRecord>) {
        this.field1 = -1;
        this.field2 = "not assign";
        Object.assign(this, init);
    }
    public field1: number;
    public field2: string;

}

const somearray: SomeRecord[] = [
    { field1: 0, field2: "mem1" },
    { field1: 1, field2: "mem2" },
    new SomeRecord({ field1: 2 }),
    new SomeRecord({ field2: "mem3" }),
    // { field2: "mem4" },  //これはNG
];
for (const some of somearray) {
    console.log(some);
}
