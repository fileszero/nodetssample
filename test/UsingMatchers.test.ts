/**
 * 一般的なマッチャー # http://facebook.github.io/jest/docs/ja/using-matchers.html#
 */
test("two plus two is four", () => {
    expect(2 + 2).toBe(4);
});

test("object assignment", () => {
    const data = { one: 1, "two": NaN };
    data["two"] = 2;
    expect(data).toEqual({ one: 1, two: 2 });   // オブジェクトの値は同じだけど
    expect(data).not.toBe({ one: 1, two: 2 });  // 厳密には等価ではない
});

/**
 * 真偽値(およびそれらしく思える値)
 * http://facebook.github.io/jest/docs/ja/using-matchers.html#
 */
test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test("zero", () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});

/**
 * 数値 # http://facebook.github.io/jest/docs/ja/using-matchers.html#
 */
test("'two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
});
/**
 * 浮動小数点の値が同一であるかを確認するにはtoEqualの代わりにtoBeCloseTo を使用して下さい。
 */
test("adding floating point numbers", () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);    // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3); // This works.
});

/**
 * 文字列 # http://facebook.github.io/jest/docs/ja/using-matchers.html#
 */
test("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect("Christoph").toMatch(/stop/);
});

/**
 * 配列 # http://facebook.github.io/jest/docs/ja/using-matchers.html#
 */
const shoppingList = [
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "beer",
];

test("the shopping list has beer on it", () => {
    expect(shoppingList).toContain("beer");
    expect(shoppingList).not.toContain("paper");
});

/**
 * 例外 # http://facebook.github.io/jest/docs/ja/using-matchers.html#
 */
class ConfigError implements Error {
    public name: string = "ConfigError";
    stack?: string | undefined;
    constructor(public message: string) {
    }
}
function compileAndroidCode(): void {
    throw new ConfigError("you are using the wrong JDK");
}

function compileIOSCode(version: number): void {
    if (version < 10) {
        throw new ConfigError("you are using the wrong JDK");
    }
    return;
}

test("compiling android goes as expected", () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(ConfigError);

    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow("you are using the wrong JDK");
    expect(compileAndroidCode).toThrow(/JDK/);

    // 引数付き
    expect(() => {
        compileIOSCode(9);
    }).toThrow(ConfigError);

    expect(() => {
        compileIOSCode(10);
    }).not.toThrow(ConfigError);

});