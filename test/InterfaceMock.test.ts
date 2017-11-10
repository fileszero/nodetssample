import { ISample, ServiceSample } from "../src/interfaceSample1";

namespace InterfaceMock {
    test("interface mock", () => {
        // const SampleImpl = jest.fn<ISample>(() => ({ somefunc: jest.fn() }));
        const SampleImpl = jest.fn<ISample>(() => {
            const impl: ISample = { somefunc: jest.fn(), intFunc: jest.fn(), inc: undefined };
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
            const impl: ISample = { somefunc: jest.fn(), intFunc: func, inc: undefined };
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
                somefunc: undefined,
                intFunc: undefined,
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

}