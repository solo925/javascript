export class TestRunner {
    constructor() {
        this.tests = [];
        this.order = 'default'; // 'default' or 'reverse'
    }

    registerTest(name, testFunction) {
        this.tests.push({ name, testFunction });
    }

    async runTests() {
        console.log('Running tests...');
        for (const test of this.tests) {
            console.log(`Test: ${test.name}`);
            try {
                await test.testFunction();
                console.log('Passed');
            } catch (error) {
                console.error(`Failed: ${error.message}`);
            }
        }
    }

    filterTests(filter) {
        this.tests = this.tests.filter(test => test.name.includes(filter));
    }

    setExecutionOrder(order) {
        if (order === 'reverse') {
            this.tests.reverse();
        } else {
            this.tests.sort((a, b) => a.name.localeCompare(b.name));
        }
        this.order = order;
    }
}
