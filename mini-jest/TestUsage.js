import { assertions } from './assertions.js';
import { TestRunner } from './testRunner.js';
import { describe, test } from './testUtils.js';

const runner = new TestRunner();

describe('Basic Tests', () => {
    test('Test 1: 1 + 1 = 2', async (runner) => {
        assertions.assertEqual(1 + 1, 2, 'Math error');
    }, runner);

    test('Test 2: Array contains item', async (runner) => {
        assertions.assertContains([1, 2, 3], 2, 'Array should contain 2');
    }, runner);
});

runner.setExecutionOrder('reverse');
await runner.runTests();
