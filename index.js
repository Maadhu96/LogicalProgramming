

//! 17. What is d/f b/w "==" and "===" Operators



//! 19. What do you mean by null in javascript

// let x = null;
// console.log(typeof (x));//object
// console.log(x);//null

//! 20. How do detect clients operating system

// console.log(navigator.language);//en-US
// console.log(navigator.onLine);//true
// console.log(navigator.platform);//Win32

//! 21. Of what Javascript type is an Array

// let a = [10, 20, 30];
// let b = ["10", "29"];
// let c={name:"Manu",id:12}
// console.log(typeof (a));//object
// console.log(typeof (b));//object
// console.log(typeof (c));//object

//! 22  What property tells you the length of a JAvascript array

// let a = [10, 20, 30];
// let b = [1, 2, 3, 3, 4, 5];

// console.log(a.length);//3
// console.log(b.length);//6

//! 23 What does array.shift() method returns

// let a = [10, 20, 30, 40];
// console.log(a.shift());//[10]
// console.log(a);//[10,20,30,40]

//! 24 Explain Array.push() method
// let a = [10, 20, 30, 40];
// console.log(a.push(40, 50));
// console.log(a);// [10, 20, 30, 40, 40, 50]

//! 25  Explain the Array.pop() method

// let a = [10, 20, 30, 40];
// console.log(a.pop());//40
// console.log(a);// [10, 20, 30]

//! 26 Explain the Array.unshift() method

// let a = [10, 20, 30, 40];
// console.log(a.unshift(50));//5
// console.log(a);//[50, 10, 20, 30, 40]
// console.log(a.length);//5

//! 27 Explain the template literals in ES6

// let a = 'Anil';
// let b = 'Kumar'
// let c = `${a}${b}`;
// console.log(c);//AnilKumar

//! 28 What is the output of the following code sample

// var y = 1;
// if (function f() { }) {
//     y += typeof typeof f;//1string
//      y += typeof f;//1undefined
// }
// console.log(y);

//! 29 What is NaN ? What is its type ?

// console.log(typeof NaN);//Number
// console.log(typeof "number");//string
// console.log(typeof NaN === "number");//true
// console.log(typeof (NaN === "number"));//boolean
// console.log(NaN === "number");//false
// console.log(NaN == NaN);//false

//! 30 What is the output of the following code sample

// //The below 2 functions return the same output;

// function a() {
//     return {
//         name:"Manu"
//     }
// }
// function b() {
//     return {
//         name: "Manu"
//     }
// }
// console.log(a());//Manu
// console.log(b());//Manu

// //!or======

// function a() {
//     return
//     {
//         name:"Manu"
//     }
// }
// function b() {
//     return
//     {
//         name: "Manu"
//     }
// }
// console.log(a());//undefined
// console.log(b());//undefined

//! 31 What will the code below output

// console.log(false == '0');//true
// console.log(false === '0');//false

//! 32 What's the output of below code

// console.log(1 < 2 < 3);//true
// console.log(3 > 2 > 1);//false

//! 33. How do you clone an object

// let test = {
//     name: "Anil",
//     id: 12,
//     salary:1000,
// }
// let task = {
//     completed:"yes",
// }
// console.log(test)//{name: 'Anil', id: 12, salary: 1000}

// let testclone = Object.assign({}, test);
// console.log(testclone)//{name: 'Anil', id: 12, salary: 1000}

// let testclone1 = Object.assign(task, test);
// console.log(testclone1);//{completed: 'yes', name: 'Anil', id: 12, salary: 1000}

//! 34. Which keyword are used to handle the exceptions

// try {
    
// } catch (error) {
    
// }
// finally {
    
// }

//! 35. What is variable typing

// let i = 2;//integer
// i = "Manu"//string
// i = true;//boolean
// console.log(i);

//! 36. How are object properties are assigned

// let obj = {}

// obj.name = "Anil";
// obj["lastname"] = "Kumar";

// console.log(obj);//{name: 'Anil', lastname: 'Kumar'}

//! 37. Explain window.onload and onDocumentReady

//! 38. Define Event bubbling

// eventBubbling: false;

//! 39. Is JavaScript is case sensitive

// Because inbuilt methods in Javascript
// getElementById
// getElementByClassName...... so theseare all in camel cases so the js is case insensitive

//! 40. What boolean operators can be used in javascript

//OPerators which always result in either true or false are called as Boolean operators

//! 41. What is the role of break and continue statements

// function test() {
//     for (let i = 0; i < 10; i++){
//         if (i == 5) {
//             break;
//         }
//         // console.log(i)//0 1 2 3 4
//         if (i == 4) {
//             continue
//         }
//         console.log(i);// 0 1 2 3
//     }
// }
// test();

//! 42. Define unescape() and escape() functions

// console.log(escape("Hello-How are-you what's going on?"));//Hello-How%20are-you%20what%27s%20going%20on%3F

// console.log(unescape("Hello-How%20are-you%20what%27s%20going%20on%3F"));

//! 43. What is the length of the array after deletion

// let arr = ['a', 'b', 'c', 'd', 'f']
// delete arr[2];
// console.log(arr.length);//5