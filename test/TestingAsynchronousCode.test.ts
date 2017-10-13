const WAIT_TIME = 100;
/**
 * コールバック # http://facebook.github.io/jest/docs/ja/asynchronous.html#
 */

function fetchDataCBVer(cb: (data: any) => void) {
    setTimeout(() => {
        cb("peanut butter");
    }, WAIT_TIME);
}

// Don't do this!
test("the data is peanut butter(callback without done)", () => {
    function callback(data: any) {
        expect(data).toBe("this will failed peanut butter"); // これ呼ばれないからテストもpassしちゃう
    }
    fetchDataCBVer(callback);
});

test("the data is peanut butter(callback)", (done) => {   // 追加
    function callback(data: any) {
        expect(data).toBe("peanut butter");
        done();                                 // 追加
    }
    fetchDataCBVer(callback);
});

/**
 * Promises # http://facebook.github.io/jest/docs/ja/asynchronous.html#promises
 */
function fetchDataPromiseVer(shouldBeResolv: boolean): Promise<string> {
    return new Promise<string>((resolv, reject) => {
        setTimeout(() => {
            if (shouldBeResolv) {
                resolv("peanut butter");
            } else {
                reject("error");
            }
        }, WAIT_TIME);
    });
}

test("the data is peanut butter(promise succeed)", () => {
    // テスト中に何回assertされるか確定させておく
    expect.assertions(1);   // これが要るらしい　https://facebook.github.io/jest/docs/en/expect.html#expectassertionsnumber

    // return重要! 必ずpromiseを返して下さい - return 宣言を書かなかった場合、fetchDataが完了する前にテストが終了します。
    return fetchDataPromiseVer(true).then(data => {
        expect(data).toBe("peanut butter");
    });
});

test("the data is peanut butter(promise failed)", () => {
    // テスト中に何回assertされるか確定させておく
    expect.assertions(1);   // これが要るらしい　https://facebook.github.io/jest/docs/en/expect.html#expectassertionsnumber

    // return重要! 必ずpromiseを返して下さい - return 宣言を書かなかった場合、fetchDataが完了する前にテストが終了します。
    return fetchDataPromiseVer(false).catch(data => {
        expect(data).toMatch("error");
    });
});

test("the data is peanut butter(resolves)", () => {
    expect.assertions(1);
    // return重要! 必ずアサーションを返して下さい - このreturn 宣言を書かなかった場合、fetchDataが完了する前にテストが終了します。
    return expect(fetchDataPromiseVer(true)).resolves.toBe("peanut butter");
});
test("the fetch fails with an error(rejects)", () => {
    expect.assertions(1);
    // return重要! 必ずアサーションを返して下さい - このreturn 宣言を書かなかった場合、fetchDataが完了する前にテストが終了します。
    return expect(fetchDataPromiseVer(false)).rejects.toMatch("error");
});

/**
 * Async/Await # http://facebook.github.io/jest/docs/ja/asynchronous.html#async-await
 * @param shouldBeResolv
 */
async function fetchDataAsyncVer(shouldBeResolv: boolean): Promise<string> {
    await setTimeout(() => { }, WAIT_TIME);
    if (shouldBeResolv) {
        return "peanut butter";
    } else {
        throw "error";
    }
}

test("the data is peanut butter(async/await succeed)", async () => {
    expect.assertions(1);
    const data = await fetchDataAsyncVer(true);
    expect(data).toBe("peanut butter");
});

test("the fetch fails with an error(async/await error)", async () => {
    expect.assertions(1);
    try {
        await fetchDataAsyncVer(false);
    } catch (e) {
        expect(e).toMatch("error");
    }
});

test("the data is peanut butter(async/await succeed with resolves)", async () => {
    expect.assertions(1);
    await expect(fetchDataAsyncVer(true)).resolves.toBe("peanut butter");
});

test("the fetch fails with an error(async/await error with rejects)", async () => {
    expect.assertions(1);
    await expect(fetchDataAsyncVer(false)).rejects.toMatch("error");
});