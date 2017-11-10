
namespace promiseWaitSample {
    function asyncFunc(shouldBeResolv: boolean): Promise<string> {
        return new Promise<string>((resolv, reject) => {
            setTimeout(() => {
                if (shouldBeResolv) {
                    resolv("resolved");
                } else {
                    reject("rejected");
                }
            }, 1000);
        });
    }

    function waitPromise<T>(promise: Promise<T>): T | undefined {
        let result: T | undefined = undefined;
        promise
            .then((res) => {
                result = res;
            })
            .catch((reason) => {
                throw reason;
            });
        const loopid = setInterval(() => {
            console.log("wait...");
            if (result != undefined) {
                clearInterval(loopid);
            }
        }, 100);

        return result;
    }
    console.log("start");

    asyncFunc(true).then((r) => {
        console.log("promise callback " + r);
    });

    const asyncResult = waitPromise(asyncFunc(true));
    console.log(asyncResult);

    // try {
    //     asyncResult = waitPromise(asyncFunc(false));
    //     console.log(asyncResult);
    // } catch (ex) {
    //     console.log(ex);
    // }
}