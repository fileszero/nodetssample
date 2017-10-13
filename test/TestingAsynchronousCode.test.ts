/**
 * コールバック # http://facebook.github.io/jest/docs/ja/asynchronous.html#
 */

function fetchDataCBVer(cb: (data: any) => void) {
    setTimeout(() => {
        cb("peanut butter");
    }, 1000);
}

// Don't do this!
test("the data is peanut butter", () => {
    function callback(data: any) {
        expect(data).toBe("this will failed peanut butter"); // これ呼ばれないからテストもpassしちゃう
    }
    fetchDataCBVer(callback);
});

test("the data is peanut butter", (done) => {   // 追加
    function callback(data: any) {
        expect(data).toBe("peanut butter");
        done();                                 // 追加
    }
    fetchDataCBVer(callback);
});