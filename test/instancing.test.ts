import { SomeRecord } from "../src/instancingSample";
namespace instancingTest {
    describe("instancing test", () => {
        test("instance without new", () => {
            const some: SomeRecord = { field1: 0, field2: "mem1" };
            expect(some.field1).toBe(0);
        });
        test("instance with new", () => {
            const some: SomeRecord = new SomeRecord({ field1: 2 });
            expect(some.field1).toBe(2);
        });
        test("instance with new str", () => {
            const some: SomeRecord = new SomeRecord({ field2: "some" });
            expect(some.field1).toBe(-1);
            expect(some.field2).toBe("some");
        });
        test("join fields", () => {
            const some: SomeRecord = new SomeRecord({ field1: 1, field2: "some" });
            expect(some.field1).toBe(1);
            expect(some.field2).toBe("some");
            expect(some.joinFields()).toBe("1 some");
        });

    });
}