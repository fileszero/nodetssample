namespace SetupAndTeardown {
    const WAIT_TIME = 100;
    const CITY_TABLE: string[] = [];

    export function initializeCityDatabase() {
        CITY_TABLE.splice(0, CITY_TABLE.length);    // clear array
        CITY_TABLE.push("Vienna", "San Juan");
    }

    export function clearCityDatabase() {
        CITY_TABLE.splice(0, CITY_TABLE.length);    // clear array
    }

    export function initializeCityDatabasePromise(): Promise<void> {
        return new Promise<void>((resolv, reject) => {
            setTimeout(() => {
                initializeCityDatabase();
                resolv();
            }, WAIT_TIME);
        });
    }
    export function clearCityDatabasePromise(): Promise<void> {
        return new Promise<void>((resolv, reject) => {
            setTimeout(() => {
                clearCityDatabase();
                resolv();
            }, WAIT_TIME);
        });
    }

    function wait(): Promise<void> {
        return new Promise<void>(resolve => setTimeout(resolve, WAIT_TIME));
    }
    export async function initializeCityDatabaseAsync(): Promise<void> {
        await wait();
        initializeCityDatabase();
    }
    export async function clearCityDatabaseAsync(): Promise<void> {
        await wait();
        clearCityDatabase();
    }


    export function isCity(city: string) {
        return CITY_TABLE.some((val) => val == city);
    }
}
/**
 * テストごとにセットアップ作業を繰り返し実行する http://facebook.github.io/jest/docs/ja/setup-teardown.html#
 */
describe("テストごとにセットアップ作業を繰り返し実行する", () => {
    // デフォルトでは before と after ブロックはファイルの中の各テストに適用されます。
    // 一方であなたは describe ブロックを使って複数のテストをグループ化することができます。
    // それらのブロックが describe ブロックの中にあるときは、 before と after ブロックは describe ブロックの中のテストにだけに適用されます。
    beforeEach(() => {
        SetupAndTeardown.initializeCityDatabase();
    });

    afterEach(() => {
        SetupAndTeardown.clearCityDatabase();
    });

    test("city database has Vienna", () => {
        expect(SetupAndTeardown.isCity("Vienna")).toBeTruthy();
    });

    test("city database has San Juan", () => {
        expect(SetupAndTeardown.isCity("San Juan")).toBeTruthy();
    });
});

describe("テストごとにセットアップ作業を繰り返し実行する Promise", () => {
    // デフォルトでは before と after ブロックはファイルの中の各テストに適用されます。
    // 一方であなたは describe ブロックを使って複数のテストをグループ化することができます。
    // それらのブロックが describe ブロックの中にあるときは、 before と after ブロックは describe ブロックの中のテストにだけに適用されます。
    beforeEach(() => {
        return SetupAndTeardown.initializeCityDatabasePromise(); // 非同期の場合は promise を返すか done パラメータのどちらかを選択します
    });

    afterEach(() => {
        return SetupAndTeardown.clearCityDatabasePromise();      // 非同期の場合は promise を返すか done パラメータのどちらかを選択します
    });

    test("city database has Vienna", () => {
        expect(SetupAndTeardown.isCity("Vienna")).toBeTruthy();
    });

    test("city database has San Juan", () => {
        expect(SetupAndTeardown.isCity("San Juan")).toBeTruthy();
    });
});

describe("テストごとにセットアップ作業を繰り返し実行する Async", () => {
    // デフォルトでは before と after ブロックはファイルの中の各テストに適用されます。
    // 一方であなたは describe ブロックを使って複数のテストをグループ化することができます。
    // それらのブロックが describe ブロックの中にあるときは、 before と after ブロックは describe ブロックの中のテストにだけに適用されます。
    beforeEach(async () => {
        console.log("テストごとにセットアップ");
        await SetupAndTeardown.initializeCityDatabaseAsync();  // async/awaitでもOKっぽい
    });

    afterEach(() => {
        return SetupAndTeardown.clearCityDatabaseAsync();     // 非同期の場合は promise を返すか done パラメータのどちらかを選択します
    });

    test("city database has Vienna", () => {
        expect(SetupAndTeardown.isCity("Vienna")).toBeTruthy();
    });

    test("city database has San Juan", () => {
        expect(SetupAndTeardown.isCity("San Juan")).toBeTruthy();
    });
});


/**
 * ワンタイムセットアップ http://facebook.github.io/jest/docs/ja/setup-teardown.html#
 * セットアップがファイルの先頭で一回だけ実行されることが必要なケース
 */
describe("ワンタイムセットアップ", () => {
    beforeAll(() => {
        console.log("ワンタイムセットアップ");
        return SetupAndTeardown.initializeCityDatabase();
    });

    afterAll(() => {
        return SetupAndTeardown.clearCityDatabase();
    });

    test("city database has Vienna", () => {
        expect(SetupAndTeardown.isCity("Vienna")).toBeTruthy();
    });

    test("city database has San Juan", () => {
        expect(SetupAndTeardown.isCity("San Juan")).toBeTruthy();
    });
});