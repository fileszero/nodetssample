import * as target from "../src/sum";

test("Add 1 + 2 to equal 3", () => {
    expect(target.sum(1, 2)).toBe(3);
});