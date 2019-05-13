//#region Get a random number in a specific range
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
//#endregion

//#region Generate an array of numbers with numbers from 0 to max
const numbers = [], max = 20;
for (let i = 1; numbers.push(i++) < max;);  // numbers = [1,2,3 ... 100]
//#endregion

//#region Shuffle an array of numbers
shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
const random = getRandom(0, shuffledNumbers.length - 1)
console.log(random, shuffledNumbers[random]);
//#endregion

//#region Generate a random set of alphanumeric characters
const generateRandomAlphaNum = (len) => {
    let rdmString = "";
    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
    return rdmString.substr(0, len);
}
//#endregion

//#region A string trim function
String.prototype.trim = function () { return this.replace(" ", ""); };
let name = "Halit Ak";
console.log(name.trim());
//#endregion 

//#region Verify that a given argument is a number
const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);
console.log(isNumber("asd"));
console.log(isNumber(55));
//#endregion 

//#region An HTML escaper function
const escapeHTML = text => {
    var replacements = { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" };
    return text.replace(/[<>&"]/g, character => replacements[character]);
}
console.log(escapeHTML("<p>hello</p>"));
//#endregion 

//#region Get Unique Values of an Array
let testarr = [1, 2, 2, 3];
var j = [...new Set(testarr)]
console.log(j);
//#endregion 

//#region Merge Objects
const person = { name: 'David Walsh', gender: 'Male' };
const tools = { computer: 'Mac', editor: 'Atom' };
const attributes = { handsomeness: 'Extreme', hair: 'Brown', eyes: 'Blue' };
const summary = { ...person, ...tools, ...attributes };
//#endregion 

//#region Require Function Parameters
const isRequired = () => { throw new Error('param is required'); };
const hello = (name = isRequired()) => { console.log(`hello ${name}`) };
// This will throw an error because no name is provided
//hello();
// This will also throw an error
//hello(undefined);
// These are good!
hello(null);
hello('David');
//#endregion 

//#region Destructuring Aliases
const obj = { x: 1 };
// Grabs obj.x as { x }
const { x } = obj;
// Grabs obj.x as { otherName }
const { x: otherName } = obj;
//#endregion 

//#region Get Query String Parameters
// Assuming "?post=1234&action=edit"
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
//#endregion 

//#region Convert arrays element types
// number to strings
var strArr = [1, 2, 3, 4, 5].map(String);
// ["1","2","3","4","5"]
//#endregion 

//#region value “flip-flopping” between two variables without an intermediary variable: (change a to b, change b to a)
let a = 'thing';
let b = 'otherThing';
/* Works because of destructuring */
[a, b] = [b, a]; // a is now 'otherthing', b is now 'thing'
/* (Old Super-Funky Way) */
b = [a, a = b][0]; // Works, but barely understandable
//#endregion 

//#region Convert to Boolean
const isTrue = !0;
const isFalse = !1;
const alsoFalse = !!0;
console.log(isTrue); // Result: true
console.log(typeof true); // Result: "boolean"
//#endregion 

//#region Convert to String
const val = 1 + "";
console.log(val); // Result: "1"
console.log(typeof val); // Result: "string"
//#endregion 

//#region Convert to Number
let int = "15";
int = +int;
console.log(int); // Result: 15
console.log(typeof int); //Result: "number"
console.log(+true);  // Return: 1
console.log(+false); // Return: 0
//#endregion 

//#region Quick Powers && Quick Float to Integer
console.log(2 ** 3); // Result: 8
console.log(23.9 | 0);  // Result: 23
console.log(-23.9 | 0); // Result: -23
//#endregion 

//#region Truncate an Array
let arrayt1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayt1.length = 4;
console.log(arrayt1); // Result: [0, 1, 2, 3]
let arrayt2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arrayt2 = arrayt2.slice(0, 4);
console.log(arrayt2); // Result: [0, 1, 2, 3]
//#endregion 

//#region Get the Last Item(s) in an Array
let arrayt3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrayt3.slice(-1)); // Result: [9]
console.log(arrayt3.slice(-2)); // Result: [8, 9]
console.log(arrayt3.slice(-3)); // Result: [7, 8, 9]
//#endregion 

//#region Random Hex Color
const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//#endregion 

//#region Modern Event Handling
/* Attach an event handler on a given Node taking care of Browsers Differences
* @param {Object} node
* @param {String} type
* @param {Function} fn
* @param {Boolean} capture
*/
function addEventHandler(node, type, fn, capture) {
    if (typeof window.event !== "undefined") {
        /* Internet Explorer way */
        node.attachEvent("on" + type, fn);
    } else {
        /* FF & Other Browsers */
        node.addEventListener(type, fn, capture);
    }
}
/* Example */
addEventHandler(window, "load", function () {
    alert("The page was loaded");
}, true)
//#endregion