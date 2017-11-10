import { ISample, ServiceSample } from "../src/interfaceSample1";

namespace InterfaceMock {
    test("interface mock", () => {
        // const SampleImpl = jest.fn<ISample>(() => ({ somefunc: jest.fn() }));
        const SampleImpl = jest.fn<ISample>(() => {
            const impl: ISample = { somefunc: jest.fn(), intFunc: jest.fn(), inc: jest.fn() };
            return impl;
        });
        const sampleInst = new SampleImpl();

        const service = new ServiceSample(sampleInst);
        service.DoSomething();

        expect(sampleInst.somefunc).toHaveBeenCalled();
    });

    test("interface mock with return value", () => {
        const SampleImpl = jest.fn<ISample>(() => {
            const func = jest.fn();
            func.mockReturnValueOnce(1);
            const impl: ISample = { somefunc: jest.fn(), intFunc: func, inc: jest.fn() };
            return impl;
        });
        const sampleInst = new SampleImpl();

        const service = new ServiceSample(sampleInst);
        expect(service.DoSomething()).toBe(1);

        expect(sampleInst.somefunc).toHaveBeenCalled();
        expect(sampleInst.intFunc).toHaveBeenCalled();
    });

    test("interface mock with state value", () => {
        const SampleImpl = jest.fn<ISample>(() => {
            const func = jest.fn();
            func.mockReturnValueOnce(1)
                .mockReturnValueOnce(2);
            const impl: ISample = {
                somefunc: jest.fn(),
                intFunc: jest.fn(),
                inc: func
            };
            return impl;
        });
        const sampleInst = new SampleImpl();

        const service = new ServiceSample(sampleInst);
        expect(service.Inclement()).toBe(1);
        expect(service.Inclement()).toBe(2);

        expect(sampleInst.inc).toHaveBeenCalledTimes(2);
    });

    test("interface mock with implement", () => {
        const SampleImpl = jest.fn<ISample>(() => {
            const func = jest.fn();
            let counter = 0;
            func.mockImplementation(() => {
                counter++;
                return counter;
            });
            const impl: ISample = {
                somefunc: jest.fn(),
                intFunc: jest.fn(),
                inc: func
            };
            return impl;
        });
        const sampleInst = new SampleImpl();

        const service = new ServiceSample(sampleInst);
        expect(service.Inclement()).toBe(1);
        expect(service.Inclement()).toBe(2);

        expect(sampleInst.inc).toHaveBeenCalledTimes(2);
    });

    describe("share mock implement", () => {
        let sampleInst: ISample;
        beforeEach(() => {
            const SampleImplShare = jest.fn<ISample>(() => {
                const func = jest.fn();
                let counter = 0;
                func.mockImplementation(() => {
                    counter++;
                    return counter;
                });
                const impl: ISample = {
                    somefunc: jest.fn(),
                    intFunc: jest.fn(),
                    inc: func
                };
                return impl;
            });
            sampleInst = new SampleImplShare();
        });

        test("interface mock with shared impl 1", () => {
            const service = new ServiceSample(sampleInst);
            expect(service.Inclement()).toBe(1);
            expect(service.Inclement()).toBe(2);

            expect(sampleInst.inc).toHaveBeenCalledTimes(2);
        });

        test("interface mock with shared impl 2", () => {
            const service = new ServiceSample(sampleInst);
            expect(service.Inclement()).toBe(1);
            expect(service.Inclement()).toBe(2);

            expect(sampleInst.inc).toHaveBeenCalledTimes(2);
        });

    });
}