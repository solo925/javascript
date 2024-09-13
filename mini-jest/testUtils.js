export function describe(description, testFunction) {
    console.log(description);
    testFunction();
}

export function test(name, testFunction, runner) {
    runner.registerTest(name, testFunction);
}
