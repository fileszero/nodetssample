namespace MockFunctions {
    function forEach(items: Array<any>, callback: (any)) {
        for (let index = 0; index < items.length; index++) {
            callback(items[index]);
        }
    }

    /**
     * モック関数を利用する #
     * http://facebook.github.io/jest/docs/ja/mock-functions.html#content
     */
    test("mock using test", () => {
        const mockCallback = jest.fn();
        forEach([0, 1], mockCallback);  // まずモックを呼び出して、

        // 呼び出された状況をあとから確認
        // The mock function is called twice
        expect(mockCallback.mock.calls.length).toBe(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);
    });
}