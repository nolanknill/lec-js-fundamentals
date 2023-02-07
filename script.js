console.groupCollapsed("Arithmetic Operators");

console.log("5 + 7", 5 + 7);
console.log("7 - 12", 7 - 12);
console.log("28 / 4", 28 / 4);
console.log("10 * 7", 10 * 7);
console.log("15 / 2", 15 / 2);
console.log("15 % 2", 15 % 2);
console.log("88 % 2", 88 % 2);
console.log("10**4", 10**4);
console.log("10 * 10 * 10 * 10", 10 * 10 * 10 * 10);
// What's the formula for Celsius to Fahrenheit?
console.log("6 * (9/5) + 32", 6 * (9/5) + 32);
console.log("7 * (9/5) + 32", 7 * (9/5) + 32);
console.log("(77 - 32) * 5 / 9", (77 - 32) * 5 / 9);

console.groupEnd("Arithmetic Operators");

console.groupCollapsed("Boolean Operators");
console.log("true && false", true && false);
console.log("false && false", false && false);
console.log("true && true", true && true);
console.log("false || false", false || false);
console.log("true || false", true || false);
console.log("false || true", false || true);
console.log("true || true", true || true);
console.log("!true", !true);
console.log("!false", !false);
console.log("!!true", !!true);
console.log("!!false", !!false);
console.log("!!1", !!1);
console.groupEnd("Boolean Operators");

console.groupCollapsed("Comparison Operators");
console.log("'Hello' === 'Hello'", 'Hello' === 'Hello');
console.log("'1' === 1", '1' === 1);
console.log("'1' == 1", '1' == 1)
console.log("'1' === '1'", '1' === '1');
console.log("'Hello' == 'Goodbye'", 'Hello' == 'Goodbye');
console.log("5 > 18", 5 > 18);
console.log("5 >= 18", 5 >= 18);
console.log("5 < 18", 5 < 18);
console.log("5 <= 18", 5 <= 18);
console.log("18 < 18", 18 < 18);
console.log("18 <= 18", 18 <= 18);
console.log("18 === 18", 18 === 18);
console.log("'Jello' > 'Hello'", 'Jello' > 'Hello');
console.log("'Hello' > 'Hello'", 'Hello' > 'Hello');
console.log("'Hello' >= 'Hello'", 'Hello' >= 'Hello');

console.groupEnd("Comparison Operators");

console.groupCollapsed("String Concatenation & Variables");
console.log('"Hello" + "World"', "Hello" + "World");
console.log('"Hello" + " " + "World"', "Hello" + " " + "World");
console.log("`Hello` + `World`", `Hello` + `World`);

let firstName = "Frank";
let lastName = "Herbert";
console.log("firstName;", firstName);
console.log("lastName;", lastName);
console.log("firstName + lastName", firstName + lastName);
console.log('firstName + " " + lastName', firstName + " " + lastName);
console.log("`${firstName} ${lastName}`", `${firstName} ${lastName}`);
console.log("`Tyson's favourite author is ${firstName} ${lastName}`", `Tyson's favourite author is ${firstName} ${lastName}`);
console.groupEnd("String Concatenation & Variables");

console.groupCollapsed("Typeof operator");
console.log("typeof false", typeof false);
console.log("typeof true", typeof true);
console.log("typeof null", typeof null);
console.log("null === null", null === null);
console.log('typeof "Frank Herbert"', typeof "Frank Herbert");
console.log("typeof 1", typeof 1);
console.groupEnd("Typeof operator");