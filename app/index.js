// console.log("Welcome to ES6 Class");
// console.log("have a watch");

// let a = "hello";

// console.log(a);
// // block scoping
// {
//   let a = "goodbye";
//   // template literals
//   console.log(`inside scope ${a}`);
// }

// // const value once declared can't be changed.
// // Enable protection for variables that must remain the same.
// // could actually improve performance
// const b = 2;
// // b = 2 + 3; // error

// const array = [1, 2, 3];
// array.push(4);
// console.log(array);

// // array = [1]; // error

// // spread operator

// let arr1 = [7, 8, 6];
// let arr2 = [4, ...arr1, 5];
// console.log(arr2);

// // tryout in babeljs.io will give

// // "use strict";

// // var arr1 = [7, 8, 6];
// // var arr2 = [4].concat(arr1, [5]);
// // console.log(arr2);

// function spreadDisplay(a, b, c) {
//   console.log(a, b, c);
// }
// let arr3 = [1, 2, 3];
// spreadDisplay(...arr3);
// // spreadDisplay(arr3[0], arr3[1], arr3[2]);

// let spreadDisplayArray = (...z) => {
//   console.log(z);
// };

// spreadDisplayArray(1, 2, 3);

// // Destructring - Array

// let arr4 = [100, 200];
// // let a1 = arr4[0];
// // let a2 = arr4[1];

// let [a1, a2] = arr4;
// console.log(a1, a2);

// let fellowship = ["Manis", "Kumar", "Verma"];
// let [fName, mName, lName] = fellowship;
// console.log(`${fName} ${mName} ${lName}`);

// let salary = [100, 200, 300, 400, 500];
// let [s1, ...s2] = salary;
// console.log(s1, s2);

// // comment out below if using let ={magical, power} = wizard;
// let magical = true;
// let power = 10;

// let wizard = { magical: false, power: 9 };
// // let magical = wizard.magical
// // let power = wizard.power
// // let {magical, power} = wizard;
// ({ magical, power } = wizard);
// console.log(magical, power);

// // Arroe function
// setTimeout(() => {
//   console.log("boom");
// }, 1000);

// // do not bind their own this.
// // this is an object that within the function scope.
// // the function then bind keys and values to the this object

// // map function - allows to create arrays by calling a function
// // on each element in an array

// let points = [10, 20, 30];

// // let addOne = (element) => {
// //     return element + 1;
// // }

// // points = points.map(addOne);

// // points = points.map(element =>{
// //     return element + 1;
// // })

// points = points.map(element => element + 1);
// console.log(points);

// // let lengths = [3, 7, 5];
// // let multiple = 8;

// // const scale = (multiple) => {
// //   return lengths.map(element => element*multiple);
// // };

// // filter Method it returns new array based on initial array

// // let isPassing = (grade) => {
// //     return grade >= 70;
// // }

// let scores = [90, 85, 67, 71, 70, 55, 92];

// // let passing = scores.filter(isPassing);

// let passing = scores.filter(element => element >= 70);

// console.log(passing);

// // helper method are filter, map
// // find(), forEach(), reduce(), some(), keys(), values()...

// import { students, totalStudents } from "./student";

// console.log(students, totalStudents);

// // import {addNum, multiplyNum} from './calculator'

// // console.log(addNum(2,3), multiplyNum(2,3));

// import multiplyNum from "./calculator";

// console.log(multiplyNum(2, 3));

// // Object-oriented Programming.
// //  maps "objects" to real world objects.
// //  covers encapsulation, inheritance, abstraction and more.
// // to achieve this we use classes.

// // every class has only one constructor()
// // constructor() as a special method create and initialize the object data for the class.

// // class Entity {
// //   constructor(name, height) {
// //     this.name = name;
// //     this.height = height;
// //   }

// //   greet(){
// //       console.log(`Hi! I'm ${this.name} from Bangalore and my height is ${this.height}`);
// //   }
// // }

// import { Entity } from "./entity";

// let details = new Entity("Manish", 5.5);
// details.greet();

// class Hobbit extends Entity {
//   constructor(name, height) {
//     super(name, height);
//   }
//   // overriding method
//   //   greet(){
//   //       console.log(`Hi I am ${this.name} from Kanayakumari`);

//   //   }
// }

// let hobbit = new Hobbit("John", 5.4);

// console.log(hobbit);
// hobbit.greet();

// React start here uncoment above code for ES6

import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    return (
    <div>React JS and JSX in action</div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
