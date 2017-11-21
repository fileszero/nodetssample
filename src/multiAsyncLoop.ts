namespace multiAsyncLoop {
    async function delay(mag: string, shouldBeResolv: boolean, wait_ms: number): Promise<string> {
        return new Promise<string>((resolv, reject) => {
            if (wait_ms == 59) {
                console.log(mag + " Some Error");
                throw mag + " Some Error";
            }
            setTimeout(() => {
                if (shouldBeResolv) {
                    console.log(mag + " resolved");
                    resolv(mag + " resolved");
                } else {
                    console.log(mag + " rejected");
                    reject(mag + " rejected");
                }
            }, wait_ms);
        });
    }

    async function loop1() {
        for (let i = 0; i < 1500; i++) {
            try {
                await delay("loop1", true, 50 + i);
            } catch (ex) {
                for (let e = 0; e < 10; e++) {
                    console.log("Error:" + ex);
                }
            }
        }
    }
    async function loop2() {
        while (true) {
            await delay("loop2", true, 150);
        }
    }

    async function main() {

        loop1();
        await loop2();
        console.log("main end");
    }

    main();
    console.log("main called..");

}