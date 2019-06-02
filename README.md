# ES6
ES6
https://www.udemy.com/share/1004CUBEQSdlhbR3o=/
Transpiler name - babel

[1,2,3].map(n=> n+ 1)

babel -> transpile ts into js (Modern ES6 intp ES5 js code)

webpack

it bundles the module in one.js file

mkdir ES6
cd ES6

npm init -y
(-y allows to skip optionls questions)

npm i webpack@4.12.0 webpack-cli@3.0.3 --save-dev

(webpack@4 contains bundling functionality and webpack-cli@3 allows to use all webpack comand lines)

cat package.json
(it will show what is there in json object in commant line)

code .
(it will open visual studio code)

npm run start
npm run build (optimised code for production)

configuring webpack.config.js
we will generate build folder and we dont need dist folder


npm i webpack-dev-server@3.1.4 --save-dev
above depenencies will have a watch on file
update package.json
"start": "webpack-dev-server --mode development",

npm i bable-core@6.26.3 babel-loader@7.1.4 babel-preset-env@1.7.0 --save-dev

babel code (transpile ES6 code to ES6 core)
babel loader import and export file as a own component module.
babel preset (ES6 browser compactibility)

A transpiler reads code written in one language and produces the equivalent code in another.

We need transpilers so that our pretty es6 code compiles into the dense JavaScript code that browser like. Babel is one of the most popular es6 transpilers.

Using webpack allows us to create an environment that transforms es6 code with babel.

It combines multiple modules into one js file to reduce errors and resources on the client-side.

Shipping with a development server, it gives us live code updating for free!

Block scoping binds variable declarations to blocks of code, { .. }.

The let keyword replaces var in es6.

The const keyword declares a variable that cannot be re-assigned.

Template literals in es6 are strings with embedded variables or code inside. They have surrounding backticks `` with interpolated ${} symbols for variables.

The es6 spread operator spreads the contents of an array or object into multiple variables. Its syntax uses three periods, just like so: …

Destructuring Assignment  in es6 allows us to extract data from arrays or objects into separate, distinct variables.

Array Destructuring Assignment assigns multiple variables from an array. For instance, let [a, b] = c, where values ‘a’ and ‘b’ assign in order to the respective elements in ‘c’.

Object Destructuring Assignment assigns multiple variables form an object. For instance, let { a, b } = c, where values ‘a’ and ‘b’ assign to the ‘a’ and ‘b’ properties in ‘c’.

Arrow functions work like normal method expressions in JavaScript, but with a shorter syntax. They also have the added benefit of being anonymous. In addition, unlike normal JavaScript function, they do not bind the this object to their function scope.
The map helper method in es6 allows us to create arrays by calling a function on each element of an initial array.
The filter helper method in es6 creates new arrays with all the same elements of an initial array depending on a test that we give it.

Modules refer to reusable pieces of code that often exist independently in their own separate files.

Export in es6 sends functions, objects, or primitive values from one module to another.

Import in es6 receives functions, objects, or primitive values from another module.

The default export represents a fallback or “main” value/function for a module.

You cannot write the export default syntax and declare variables on the same line.

Object-oriented programming models “objects” to real world objects, assigning state and relevant methods to those “objects.”

Encapsulation, keeps data safe from use outside of classes.

Inheritance occurs when a class extends another class, receiving all the same behavior from that base class.

A class in es6 holds pertinent data and methods and also allows for simple inheritance.

Extends is an es6 keyword that signals a class inheriting data from a base class

setup react
 npm install react-dom react babel-preset-react --save-dev
