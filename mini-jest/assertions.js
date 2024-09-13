export const assertions = {
    assertEqual(actual, expected, message) {
        if (actual !== expected) {
            throw new Error(`${message} - Expected ${expected}, but got ${actual}`);
        }
    },
    assertNotEqual(actual, expected, message) {
        if (actual === expected) {
            throw new Error(`${message} - Expected not ${expected}, but got ${actual}`);
        }
    },
    assertTrue(value, message) {
        if (!value) {
            throw new Error(`${message} - Expected value to be truthy, but got falsy`);
        }
    },
    assertFalse(value, message) {
        if (value) {
            throw new Error(`${message} - Expected value to be falsy, but got truthy`);
        }
    },
    assertContains(array, item, message) {
        if (!array.includes(item)) {
            throw new Error(`${message} - Expected array to contain ${item}`);
        }
    }
};
