

interface ITest {
    method1(): void;
}
/**
 * ITest の method1を呼び出す関数
 * Genericsは基本的にはintercafeなりスーパークラスなりでTに制約を加えるべきだと思います。
 * @param obj ITestの実装オブジェクト
 */
function callITest<T extends ITest>(obj: T) {
    obj.method1();
}

/**
 * 素直な実装
 */
class Test1 implements ITest {
    public method1() {
        console.log("Test1.method1");
    }
}

/**
 * スーパークラス
 */
abstract class Test2 implements ITest {
    public abstract getName(): string;
    public method1() {
        console.log("Test2.method1 with " + this.getName());
    }
}

/**
 * implements ITest付き
 */
class Test3 extends Test2 implements ITest {
    public getName(): string {
        return "Test3";
    }
}

/**
 * implements ITestなし
 */
class Test4 extends Test2 {
    public getName(): string {
        return "Test4";
    }
}

// ジェネリックな呼び出しをしてみる
callITest(new Test1());
// callITest(new Test2()); //これはエラー
callITest(new Test3());
callITest(new Test4());

callITest<Test1>(new Test4());  // これも行けちゃう
// callITest<Test3>(new Test1());  // これはNG
