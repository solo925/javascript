# javascript

In programming, both `double` and `float` are data types used to represent floating-point numbers, but they differ in precision and range. Here are the key differences:

1. **Precision:**

   - **Float:** Typically, a `float` (single-precision floating-point) provides about 7 decimal digits of precision. This means it can represent numbers with up to 7 significant digits.
   - **Double:** A `double` (double-precision floating-point) provides about 15-16 decimal digits of precision. It can represent numbers with up to 15-16 significant digits.

2. **Memory Size:**

   - **Float:** Generally occupies 4 bytes (32 bits) of memory.
   - **Double:** Generally occupies 8 bytes (64 bits) of memory.

3. **Range:**

   - **Float:** Has a smaller range compared to `double`. The maximum and minimum values it can represent are limited.
   - **Double:** Has a much larger range, allowing it to represent very large or very small numbers.

4. **Performance:**

   - **Float:** Operations with `float` may be faster and use less memory, which can be beneficial for performance, especially in large arrays or performance-critical applications.
   - **Double:** Operations with `double` may be slower and use more memory, but they provide greater precision, which is important for applications requiring high accuracy.

5. **Usage:**
   - **Float:** Often used in situations where memory usage is a concern, and the precision provided by `float` is sufficient. Common in graphics and game development.
   - **Double:** Used in scenarios requiring higher precision, such as scientific computations, financial calculations, or any application where rounding errors must be minimized.

Choosing between `float` and `double` depends on the specific needs of the application, balancing precision and memory usage.

The `~` symbol in JavaScript is the **bitwise NOT** operator, also known as the **tilde**. It operates at the bit level and inverts the bits of the operand.

For any integer `n`, `~n` is equivalent to `-(n + 1)`.

### How `~i` works in your case:

- Let's assume `i` is an index of a string. The expression `~i` effectively computes `-(i + 1)`.
- This is used to get the **opposite index** from the end of the string, making it useful for comparing characters from the start and end of a string, which is commonly seen in **palindrome** checks.

### Example:

For a string `newStr`, suppose `i` is an index:

- `i = 0`: `~i` becomes `-(0 + 1) = -1` (last character in the string).
- `i = 1`: `~i` becomes `-(1 + 1) = -2` (second-to-last character).
- `i = 2`: `~i` becomes `-(2 + 1) = -3` (third-to-last character).

### Applying to your code:

In the code:

```javascript
if (newStr.at(i) !== newStr.at(~i)) {
  return false;
}
```

- `newStr.at(i)` accesses the character at index `i`.
- `newStr.at(~i)` accesses the character at the mirrored position from the end of the string.

So, if the characters at positions `i` and `-(i + 1)` (from the end of the string) do not match, the function returns `false`. This logic is likely part of a **palindrome check**, where the string is compared character by character from both ends.

### Example:

For `newStr = "racecar"`:

- `i = 0`: `newStr.at(0)` is `'r'`, and `newStr.at(~0)` (which is `newStr.at(-1)`) is also `'r'`.
- `i = 1`: `newStr.at(1)` is `'a'`, and `newStr.at(~1)` (which is `newStr.at(-2)`) is also `'a'`.
- The comparison continues until all matching pairs are checked.

If at any point the characters don't match, the function returns `false`. If all pairs match, the string is a palindrome.

# javascript

// A variable is a storage place.
// Think of it as a container, a room, or a space that can contain items.
// Your room is a storage that contains beds, a TV, a gas cooker, etc.
// For that, it can be stored in a variable named `myRoom`, which is an array.
let myRoom = ['bed', 'chair', 'gas cooker', 'table', 'tv'];

// Data types of variable names:
// 1: String
// 2: Number - (Integer, Float, Double, Infinity, NaN)
// 3: Array
// 4: Boolean
// 5: Object
// 6: Undefined
// 7: BigInt
// 8: Symbol
// 9: Null - Represents the intentional absence of any value

// In low-level languages, types are very strict.
// Example: In Java, one cannot say `String name = 5`
// In JavaScript, you can say `let name = 5`
let name = 2000;
let myName = 78999;
let result = name + myName;
console.log(result); // Output: 80999

// In JavaScript, there are 3 ways to declare variables:
// 1. `var` keyword: A `var` value can be changed
// 2. `let` keyword: A `let` value can be changed
// 3. `const` keyword: A `const` value is constant, meaning the value will never change. Changing it will lead to an error

// Integer
let myKiswahiliMarks = 67;
console.log(typeof myKiswahiliMarks); // Output: number

// Float/Double
let bankBalance = 23.78;
console.log(typeof bankBalance); // Output: number

// Infinity
let yearsInHeaven = Infinity;
console.log(typeof yearsInHeaven); // Output: number

// A character is automatically a string.
// Anything in JavaScript placed inside quotes is a string
let firstChar = 'A';
console.log(typeof firstChar); // Output: string
let sname = "John";

// Let's declare a boolean
// A boolean value is always true or false
let isAdmin = false;
let isPermitted = true;

// Let's declare undefined, which means no value
let student;
console.log(typeof student); // Output: undefined

// Null value
let age = null;
console.log(age); // Output: null

// An object variable can contain all types of variables.
// You can use commas and colons in objects
let countryInfo = { citizenShip: 'Kenyan', idNumber: 44455567 };
let marks = [34, 56, 67, 78];
let info = { fname: 'Titus', sname: 'Kimutai', age: 23, isStudent: true, countryInfo, marks };

// Arrays can also contain other data types, including arrays themselves, hence array of arrays
// An array of objects
let moreInfo = [countryInfo, marks, info];
console.log(moreInfo);

// Once you declare a variable, you need to give it a name, and that’s what is called a variable name
var first_name = 'Eluid Murithi'; // String
const phoneNumber = 254789567364; // Integer using const, hence it can never be changed
// phoneNumber = 345564734893; // Uncommenting this will lead to an error since you are trying to change the value of a constant
console.log(phoneNumber); // Output: 254789567364

You can create Immediately Invoked Function Expressions (IIFE) using **arrow functions** in JavaScript, similar to how you would with regular functions. An arrow function provides a concise syntax and is commonly used for simpler and shorter function definitions.

### Syntax of an IIFE with an arrow function:

```javascript
(() => {
  // Code that runs immediately
  console.log("Arrow function IIFE executed");
})();
```

### Example:

```javascript
(() => {
  let message = "Hello from an arrow function IIFE!";
  console.log(message); // Output: Hello from an arrow function IIFE!
})();
```

In this example, the arrow function is executed right after it's defined, similar to a traditional IIFE.

### IIFE with Parameters using Arrow Function:

You can pass parameters to an arrow function IIFE in the same way:

```javascript
((a, b) => {
  console.log(a + b);
})(10, 15); // Output: 25
```

### Use Cases:

Arrow function IIFEs are commonly used in the same contexts as regular IIFEs, such as creating local scopes or encapsulating variables. However, it's important to remember that arrow functions do not have their own `this` or `arguments`, so if you need to use those, a traditional function IIFE may be more appropriate.

### Arrow Function IIFE vs Regular IIFE:

1. **Arrow function IIFE** is more concise and easier to write, especially for small functions.
2. **Regular function IIFE** is better when you need function-specific behaviors like `this` or `arguments`.

### Example comparing both:

**Regular IIFE:**

```javascript
(function () {
  console.log("This is a regular IIFE");
})();
```

**Arrow Function IIFE:**

```javascript
(() => {
  console.log("This is an arrow function IIFE");
})();
```
