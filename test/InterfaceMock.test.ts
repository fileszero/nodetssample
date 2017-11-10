import { ISample, ServiceSample } from "../src/interfaceSample1";

namespace InterfaceMock {
    test("interface mock", () => {
        // const SampleImpl = jest.fn<ISample>(() => ({ somefunc: jest.fn() }));
        const SampleImpl = jest.fn<ISample>(() => {
            const impl: ISample = { somefunc: jest.fn() };
            return impl;
        });
        const sampleInst = new SampleImpl();

        const service = new ServiceSample(sampleInst);
        service.DoSomething();

        expect(sampleInst.somefunc).toHaveBeenCalled();
    });


}