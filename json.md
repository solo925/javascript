In JavaScript, `JSON.stringify()` and `JSON.parse()` are the two primary methods for working with JSON (JavaScript Object Notation). However, there are other JSON-related operations or concepts that you might work with in JavaScript. Below are some key JSON methods and related topics:

### 1. **`JSON.stringify()`**

- Converts a JavaScript object or array into a JSON string.
- Example:
  ```javascript
  const obj = { name: "John", age: 30 };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // '{"name":"John","age":30}'
  ```

### 2. **`JSON.parse()`**

- Converts a JSON string back into a JavaScript object or array.
- Example:
  ```javascript
  const jsonString = '{"name":"John","age":30}';
  const obj = JSON.parse(jsonString);
  console.log(obj); // { name: 'John', age: 30 }
  ```

### 3. **`JSON.parseAsync()`** (Polyfills/Extensions)

- Not natively available, but some libraries or frameworks provide this for asynchronous parsing of large JSON strings.
- This can be useful for handling large data without blocking the main thread.
- Example (in a custom implementation):
  ```javascript
  async function parseJSONAsync(jsonString) {
    return new Promise((resolve, reject) => {
      try {
        resolve(JSON.parse(jsonString));
      } catch (error) {
        reject(error);
      }
    });
  }
  ```

### 4. **`JSON.stringify()` with Replacer and Space Parameters**

- You can control the serialization process using a **replacer** function or array and **space** parameter for formatting.
- **Replacer Function**: Can be used to modify or filter the values during stringification.
- **Space**: Adds indentation for readability.
- Example:

  ```javascript
  const obj = { name: "John", age: 30, password: "12345" };

  // Replacer function to exclude sensitive data (password)
  const jsonString = JSON.stringify(
    obj,
    (key, value) => {
      if (key === "password") {
        return undefined; // Exclude password
      }
      return value;
    },
    2
  ); // Pretty print with 2 spaces

  console.log(jsonString);
  ```

### 5. **`toJSON()` Method in Objects**

- If an object has a `toJSON()` method, `JSON.stringify()` will call that method when serializing.
- This can be used to customize how an object is converted into a JSON string.
- Example:

  ```javascript
  const obj = {
    name: "John",
    age: 30,
    toJSON() {
      return { name: this.name }; // Exclude 'age' from JSON
    },
  };

  console.log(JSON.stringify(obj)); // '{"name":"John"}'
  ```

### 6. **Handling Circular References**

- JSON does not support circular references (when an object references itself). Attempting to `JSON.stringify()` such an object will throw an error.
- You can avoid this using custom logic or external libraries like **circular-json**.
- Example (using `JSON.stringify()` with a custom replacer):

  ```javascript
  const obj = {};
  obj.self = obj; // Circular reference

  const jsonString = JSON.stringify(obj, function replacer(key, value) {
    if (key === "self") {
      return undefined; // Skip circular reference
    }
    return value;
  });

  console.log(jsonString); // '{}'
  ```

### 7. **Using JSON with Fetch API**

- When working with `fetch()`, JSON methods are used to parse and serialize the request and response data.
- Example:

  ```javascript
  fetch("https://api.example.com/data")
    .then((response) => response.json()) // Parse the response JSON
    .then((data) => {
      console.log(data); // JavaScript object
    });

  const newData = { name: "John", age: 30 };
  fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData), // Convert JavaScript object to JSON
  });
  ```

### 8. **Third-Party Libraries for JSON Handling**

- Some libraries extend the native `JSON` functionality for more advanced use cases:
  - **`circular-json`**: Handles circular references in JSON objects.
  - **`json5`**: Adds support for more relaxed JSON syntax, such as comments, single quotes, and unquoted property names.

### 9. **Limitations of `JSON.stringify()`**

- Certain values are not supported in JSON format:
  - **Functions** and **Symbols** are ignored.
  - **Undefined** becomes `null` if it's part of an object or array.
  - **NaN** and **Infinity** are converted to `null`.
- Example:
  ```javascript
  const obj = { key: undefined, fn: () => {}, value: NaN };
  console.log(JSON.stringify(obj)); // '{"value":null}'
  ```

### Other JSON Libraries and Utilities

- **`json2csv`**: Converts JSON objects to CSV format.
- **`fast-json-stringify`**: A high-performance alternative for `JSON.stringify()`.

These methods cover most of the common JSON manipulation tasks in JavaScript, with libraries extending the functionality for more specialized use cases.
