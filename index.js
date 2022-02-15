// let

// let number = 1; // defines a variable name
// let number2 = 2; //  
// console.log(number);
// number = 3; // 'let' lets you reassign variables (change the value of this variable name)
// console.log(number);

// const

// const numm = 1; // defines a variable name
// let numm2 = 2; //  
// console.log(numm);
// // numm = 3; // there is an error, because you cannot reassign a const value
// console.log(numm);

// Make default 'const' unless you are planning to change the variable

// camelCase

// const numOfPeople = 1; // camelCase
// const num2 = 2; 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.3 Numbers, Booleans, Conditionals

// const myMoney = 300;
// const myFriendsMoney = 200 + 20; // a number in JS is called a 'primitive data type'
// console.log(myMoney + myFriendsMoney + myMoney / myMoney);
// // use Order of Operations (PEMDAS) when calculating inside the parentheses
// const totalMoney = myMoney + myFriendsMoney; // instead of just going in the console, this output is now saved
// console.log(totalMoney);

// // remainder (called 'modulo' in programming)

// const change = totalMoney % 100; // '%' is modulo, which will calculate the remainder when dividing by 100
// console.log(change);

// // booleans

// const iHaveMoreMoney = myMoney > myFriendsMoney; // the result of this expression is either true or false
// // can also use >= or >=, or == (equivalence), but you should always use === for JS to assert equality
// console.log(iHaveMoreMoney);

// // if-statement

// if (iHaveMoreMoney) {
//   console.log("I'm Rich");
// }

// if (myMoney > myFriendsMoney) {
//   console.log("I'm Rich");
// }

// // less code isn't necessarily better, the clearest to read code is better

// if (iHaveMoreMoney) {
//   console.log("I'm Rich");
// } else {
//   console.log("I'm Poor");
// }

// if (iHaveMoreMoney) {
//   console.log("I'm Rich");
// } else if (myMoney > 200) {
//   console.log("I'm doing okay"); // you can use as many 'else if' statements as you want
// } else {
//   console.log("I'm poor")
// }

////////////////////////////////////////////////////////////////////////////////////////////////

// 5.4 Nunmbers and Booleans Practice

// const myMoney = 300;

// print even if my money is even
// print odd if my money is odd

// a TRICK for outputing whether a number is even or odd
// const isEven = (myMoney % 2) === 0; // if the number is even, the modulo will equal 0, if odd the modulo will equal 1
// console.log(isEven);



// if (isEven) { // even
//   console.log("Is even");
// } else { // odd
//   console.log("Is odd");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.5 Strings

// strings are a primitive data type
         //   012
// let myName = "Kat";
// let myMiddleName = 'Hendserson\'s Computer'; // the backslash is indicating that ths following symbol should be ignored for closing the string

// let myFriendsName = `Ellen`; // string interpolation
// let myFriendsFullName = `${myFriendsName} Heile`;
// console.log(myFriendsFullName);

// // Indexing

// console.log(myName[0]); // why is it 'K'? This is because each letter has it's own index 012345... 

// // Concatenation

// console.log(myName + ' ' + myMiddleName);

// // 1st String Method

// // calculate the length of a string:
// console.log(myName.length);

// if (myName === 'Kat') {
//   console.log("I'm Kat");
// }

/////////////////////////////////////////////////////////////////////////////////////////////

// 5.6 Template Strings and Escaped Characters

// "Template Strings"

// var firstName = "Kat";
// var helloString = `<h1> Hello ${firstName} </h1>`; // you can attach this html element to our page with JS
// console.log(helloString);

// // a string usually has to be written all in the same line with single quotes, but you can add new lines by using the special escape new line character \n

// var paragraphs = 'first paragraph \n second paragraph \n third paragraph';

// // you can also create a tab using escape character \t

// var paragraphs = 'first paragraph \t second paragraph \t third paragraph';

// // if you use backtick, you can organize this better since you can use multiple lines per string
// // the formatting done here is also preserved the way it is typed in the code

// var paragraphs = `
//   <div>
//     <h1>${firstName}</h1>
//     <p>Paragraph 1</p>
//   </div>
// `;

// being able to write multiple lines within a string is great because you can easily insert lines of code!

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// JS Practice 1

/*
        Now, let's write some JAVASCRIPT
        (And remember you can test variable values at any time by using console.log -- even the best developers still do this!)
            ☑️ Create a string variable "myFirstName" with your first name inside
            ☑️ Create a number variable "myAge" with your age inside
    */

      // const myFirstName = "Kat";
      // const myAge = 26;

    /*
        ☑️ Now, create a new variable called "myFullName" USING the "myFirstName" variable
        ☑️ Print a statement introducing yourself
    */

      // const myFullName = `${myFirstName} Floyd`;
      // console.log(`My name is ${myFullName}`);

    /*
        ☑️ Let's next write an if statement that prints 
            > "Im older than Aaron" if you're older than 28
            > "Im the same age as Aaron" if you ARE 28
            > Otherwise it should print "Im younger than Aaron"
            (You Should Have an If, and Else if, and an Else below -- not just a single console.log)
    */

      // if (myAge > 28) {
      //   console.log("Im older than Aaron");
      // } else if (myAge === 28) {
      //   console.log("Im the same age as Aaron");
      // } else {
      //   console.log("Im younger than Aaron");
      // }
    
    /*
        ☑️ Next, calculate whether your age is even or odd, and store it in a boolean variable "isEven"
        ☑️ Now write another if statement that prints "My age is even", or "My age is odd", 
          depending which is true
    */

      // let isEven = (myAge % 2) === 0;
      
      // if (isEven) {
      //   console.log("My age is even");
      // } else {
      //   console.log("My age is odd");
      // }

    /*
        YOUR CODE SHOULD NOW PRINT 3 SENTENCES TO THE CONSOLE:
        ☑️ Your introduction with name and age
        ☑️ A sentence saying whether you are older or younger than me
        ☑️ A sentence saying whether your age is even or odd
     */

     /*
        LET'S GET A BIT MORE CHALLENGING
        This is a real common use case to create different strings

        ☑️ Declare a variable, "activeUserCount" and set its value to 1
        ☑️ Now, write some code to print a formatted string like so: 
            ex. "There is 1 active user"
        ☑️ Change "activeUserCount" to be 2, and run the code again. 
            it should say "There is 2 active user" -- which is not ideal
        ☑️ Let's write an if statement to handle either 1, or more users, so...
            -> if there's one user it should say "There IS 1 active USER"
            -> if there's 0 or more than 1: "There ARE 2 active USERS"
            -> (note the difference)
     */

        // const activeUserCount = 0;

        // if (activeUserCount === 1) {
        // console.log(`There is ${activeUserCount} active user.`);
        // } else {
        //   console.log(`There are ${activeUserCount} active users.`)
        // } 

      /*
        THE FINAL CHALLENGE (HARD)
        Let's bring the previous example to a more difficult level

        ☑️ Given a number, write it's ordinal case: 1st, 2nd, 3rd, 4th...
        ☑️ Use if/else if/else to accomplish this
        ☑️ Your code should work with any number
      */

        // const num = '50011';
        // console.log(num[num.length-1]);
        // console.log(num[num.length-2]);

        // if (num[num.length-2] == 1) {
        //   console.log(`${num}th`);
        // }
        // else if (num[num.length-1] == 1) {
        //   console.log(`${num}st`);
        // } else if (num[num.length-1] == 2) {
        //   console.log(`${num}nd`);
        // } else if (num[num.length-1] == 3) {
        //   console.log(`${num}rd`);
        // } else {
        //   console.log(`${num}th`);
        // }


////////////////////////////////////////////////////////////////////

// 5.7 Arrays

// arrays are a compound data type: usually store things in compound data types

// const nums = [1, 2, 3];
// const strings = [true, 'hi', 'how are you', false]; // you can also use booleans and strings in arrays

// console.log(nums.length);
// console.log(nums[0]);

// // Array Method #1 - Add an element

// nums.push(4); // adds an item to the end of the array

// // Array Method #2 - Remove an element

// nums.pop(); // removes last element of the array

// const last = nums.pop(); // this is removing the last element of an array, and storing that removed element into a variable name

// // Array Method #3 - assign an index in an array a certain element

// nums[0] = 0; // this changes the 0 index position element in an array to 0

// console.log(nums);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.8 Objects

// compound data type

// const name = 'Kat';
// const age = 26;
// const hasJob = false;

// // how to take the assigned values and place into an object

// // Key, Colon, Value

// const user = {
//   name: 'Kat',
//   age: 26,
//   hasJob: false,
//   socialMedia: {
//     twitter: '',
//     facebook: ''
//   } // it's optional to have a comma on the last one, say for example on this line
// }

// console.log(user.name); // dot syntax
// console.log(user['name']); // string literal indexing, but be careful, because you can also pass in a variable key

// const key = 'name';
// console.log(user[key]); // variable syntax

// // Reassigning an element in object:

// console.log(user.age); // age = 26
// user.age = 28; // this works because const does not apply to compound data types, but you cannot reassign user
// console.log(user.age); // age = 28 

// console.log(user.socialMedia.twitter);

////////////////////////////////////////////////////////////////////////////////////////

// JS Practice 2

/*
    ☑️ Start by declaring an "Array literal" -- 
       that is, writing out an array from scratch! --
       and call the variable "nums"

    ☑️ Fill it with the numbers 1, 2, and 3
    ☑️ Now print the first number, and the last number from 'nums' to the console
    ☑️ Finally, change the "zero index" number to be 4
    ☑️ And print out the entire "nums array"
*/

  // const nums = [1, 2, 3];
  // console.log(nums);
  // nums[0] = 4;
  // console.log(nums);

/*
    ☑️ Let's add 5 and 6 to the end of the nums array (HINT: use a "method")
        Print nums to make sure everything looks right (should be [4, 2, 3, 5, 6])
    ☑️ Now let's set the "last index" number to be 10
    ☑️ And let's "pop" off the last number and store it in a variable "lastNum"
    ☑️ Then print "lastNum" to the console!
*/

  // nums.push(5,6);
  // nums[nums.length - 1] = 10;
  // console.log(nums);
  // const lastNum = nums.pop();
  // console.log(lastNum);
  

/*
    ☑️ Let's declare an "Object literal" called "product" with properties for:
        > name, set to "shiny shoes"
        > brand, set to "gucci"
        > price, set to 100
        > color, set to "black"
        > soldOut, set to false

    ☑️ Let's print the name, brand, and price to the console in a single string
    ☑️ Let's add a new property / key called "sale" and set it to true
    ☑️ Let's add a new property called "tags" and set it to an array literal with
       values "men", and "luxury"
    ☑️ Let's change the soldOut property to true (don't change the original object)
    ☑️ Print out the entire object and make sure everything looks correct
*/

  // const product = {
  //   name: "shiny shoes",
  //   brand: "gucci",
  //   price: 100,
  //   color: "black",
  //   soldOut: false,
  // }

  // console.log(product.name, product.brand, product.price);
  // product.sale = true;
  // product.tags = ["men", "luxury"];
  // product.soldOut = true;
  // console.log(product);


  /////////////////////////////////////////////////////////////////////////////////////////////////

  // 5.9 Value vs. Reference

  // combining different data types

  // an array of a list of different users

  // const users = [
  //   {
  //     name: "Aaron",
  //     age: 27,
  //     tags: ['new-user', 'javascript']
  //   },
  //   {
  //     name: "Phillip",
  //     age: 30,
  //     tags: ['javascript']
  //   },
  //   {
  //     name: "Jan",
  //     age: 25,
  //     tags: []
  //   } 
  // ];

  // // by value assignment (all primitive data types):
  // const age = 28;
  // let age2 = age; // this is copying the previous line and creating a new variable with the same value (age)

  // age2 = 27; // since age2 is a copy of age, the reassignment of age2 does not affect the value of age

  // console.log(age, age2);

  // // by reference assignment (all compound data types):
  // const names = ['Aaron'];
  // let names2 = names; 

  // names2.push('Jan'); // when you do this, 'Jan' is pushed to the names AND names2 arrays
  // // this is because under the hood, names and names2 are the same array

  // console.log(names, names2); // outputs: ['Aaron', 'Jan ] ['Aaron', 'Jan ]
  
  // const user = {name: "Aaron"};
  // let name2 = user;
  // let name3 = name2;
  // let name4 = name3;

  // user.name= "Jan";

  // console.log(name3, name4); // outputs {name: "Jan"} {name: "Jan"}

  //////////////////////////////////////////////////////////////////////////////////////////////

  // 5.10: Undefined, Null, NaN

  // these are weird types

  // undefined:
  // let name;
  // console.log(name); // not defined as anything

  // const user = {
  //   name: 'Aaron'
  // };

  // console.log(user.age); // undefined, because age doesn't exist

  // // null: a way to explicitly input undefined for something
  // const user2 = {
  //   name: "Aaron",
  //   age: null
  // }

  // console.log(user2.age); // outputs null

  // // example of when null is applied:
  // const customer = {
  //   name: "Jack",
  //   ccNum: 1234
  // }

  // // then the ccNum is removed for a customer's profile:
  // customer.ccNum = null;
  // console.log(customer.ccNum); // indicates here that there used to be a value for ccNum, but now it has been removed

  // // NaN (not a number): usually arises from an error

  // console.log(10 + user.age); // outputs NaN before user.age is undefined

  ///////////////////////////////////////////////////////////////////////////////////////////////

  // 5.10: Truthy and Falsey

  // conditionals - truthy, falsey, chaining, scope

  // const num = 5;

  // // TRUTHY

  // if (123) {
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  // if ('nfdjsk') {
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  // if (num) { // if num exists, it's true
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  // // empty arrays and objects are truthys

  // if ([]) {
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  // if ({}) {
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  // // FALSEY:

  // // NUMBER 0 IS FALSEY

  // if (0) {
  //   console.log('That was true'); 
  // } else {
  //   console.log("That was false"); // false
  // }

  // if (undefined) {
  //   console.log('That was true'); 
  // } else {
  //   console.log("That was false"); // false
  // }

  // if (null) {
  //   console.log('That was true'); 
  // } else {
  //   console.log("That was false"); // false
  // }

  // if (NaN) {
  //   console.log('That was true'); 
  // } else {
  //   console.log("That was false"); // false
  // }

  // if ("") {
  //   console.log('That was true'); 
  // } else {
  //   console.log("That was false"); // false
  // }

  // if ([].length) { // equals 0
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  // if ( Object.keys({}).length ) { // equals 0
  //   console.log('That was true'); // true
  // } else {
  //   console.log("That was false");
  // }

  ///////////////////////////////////////////////////////////////////////////////////////////////////

  // 5.11 Conditional Chaining

  // let num = 0;
  // let name = "Aaron";

  // // if two equivalence expressions are true:
  // if (num === 0 && name === "Aaron") { // if the equivalence is true
  //   console.log("This is true");
  // } else {
  //   console.log("That was false");
  // }

  // // another way to do this:

  // numAndName = num === 0 && name === "Aaron";
  // console.log(numAndName);

  // if (numAndName) { // if the equivalence is true
  //   console.log("This is true");
  // } else {
  //   console.log("That was false");
  // }

  // // Conditional || (OR) Operator

  // numOrName = num === 1 || name === "Aaron";
  // console.log(numOrName);

  // if (numOrName) { // if the equivalence is true
  //   console.log("This is true");
  // } else {
  //   console.log("That was false");
  // }

  // // Chaining different conditionals

  // numAndOrName = (name === "Aaron" || name === "Jan") && num === 0;

  // console.log(numAndOrName);

  // // truthys and falseys

  // if (numOrName && name) { // if these values exist
  //   console.log("This is true");
  // } else {
  //   console.log("That was false");
  // }

  ////////////////////////////////////////////////////////////////////////////////////////////

  // 5.13 Variable Scope

//   const firstName = "Kat";
//   const lastName = "Floyd"

//   if (firstName && lastName) {
//     const fullName =`${firstName} ${lastName}`;
//   }

//   // console.log(fullName); // but fullName is not defined outside of the if statement, so doesn't work

//   // but if you define fullName outside of the if statement, then you can log fullName into console
//   let fullName;

//   if (firstName && lastName) {
//     fullName =`${firstName} ${lastName}`;
//   }

//   console.log(fullName);

// // variables get passed down from the scope they are created in, but they don't get passed up from the scope they are created in

//////////////////////////////////////////////////////////////////////////////////////////////////

// 5.14 Type Detection & Conversion

// detecting and converting different JS types

// let myNum = 123;
// myNum = '123'; // there is no way to know from the frontend whether 123 is a number or string

// if (typeof myNum === 'number') {
//   console.log("its a number");
// } else if (typeof myNum === "string") {
//   console.log("its a string");
// };

// // typeof is the only function that works with a space, no need for function()

// const myArr = [1,2,3];

// // console.log(typeof myArr); // says that it's an object, because typeof doesn't detect arrays

// // special function that you have to use detect arrays:
// if (Array.isArray(myArr)) {
//   console.log('its an array');
// }

// // detecting NaN:
// console.log(typeof NaN); // typeof detects NaN as a number, which is incorrect
// console.log(isNaN(NaN)); // this is how you properly detect an NaN

// // CHANGING THE TYPE:

// // if my number is actually not a number (e.g. a string), how to convert to number in if-statement:
// myNum = 123;

// if (typeof myNum !== 'number') {
//   // myNum = Number(myNum); // converts string number to real number
//   myNum = +myNum; // second way to convert string number to real number
// }

// console.log(typeof myNum);

// // if your string is not actually a number, you will get a weird NaN output

// // if a number, but want to convert number to string:
// if (typeof myNum !== 'string') {
//   // myNum = String(123);
//   myNum = myNum.toString(); // convert to string

// }

// console.log(typeof myNum)

// // BOOLEAN type conversion

// myNum = 123;

// if (typeof myNum !== 'string') {
//   myNum = Boolean(myNum);
// }

// console.log(typeof myNum, myNum); // type is boolean, and myNum value is true

// // truthy and falsey values apply here

// // exceptions to typeof are Arrays and NaN
// console.log(Array.isArray([]), isNaN(NaN));

///////////////////////////////////////////////////////////////////////////////////////////

/*
 JS Practice 3
 Again you'll want to open the console to test your results
*/

/*
    ☑️ create an empty "Array Literal" and save it in the variable "days"
    ☑️ write an "if" statement to test if the array has any items (HINT: truthy / falsy)
    ☑️ inside the "if" block, print out the first item from the array
    ☑️ inside the "else" block, push a string "Mon" into the array
*/

// const days = [];

// if (days.length) {
//   console.log("There are items in here");
//   console.log(days[0]);
// } else {
//   console.log("There are no items in here");
//   days.push("Mon");
// };

// console.log(days);


// /*
//     ☑️ create an "Array Literal" and save it in the variable "months" and add the values "Jan" and "Feb"
//     ☑️ write an "if" statement to test if the array has any items AND the first month starts with "J" 
//     ☑️ inside the "if" block, print out the first item from the array
//     ☑️ inside the "else" block, push a string "Jan" into the array.
//     ☑️ outside the "if else" blocks, print out the "type of" the "months" variable (HINT: arrays have a special type function)
// */

// const months = ["Jan", "Feb"];

// if (months && months[0][0]) {
//   console.log("There are items in here");
//   console.log(months[0]);
// } else {
//   months.push("Jan");
// };

// console.log(Array.isArray(months));

// /*
//     ☑️ create a variable "numOfWeeks" and save the number 0 in it
//     ☑️ write an "if" statement that checks if the value of "numOfWeeks" is a "number" type
//     ☑️ inside the "if" block, use let to create a variable "areNoWeeks", then using the value of numOfWeeks, fill this variable with a boolean (should be false if numOfWeeks is zero, and true otherwise)
//     ☑️ outside the "if" block, print the value of "areNoWeeks" -- what is it?
//     ☑️ can you fix this so "areNoWeeks" prints out a boolean?
// */
  
// const numOfWeeks = 0;

// let areNoWeeks;

// if (typeof numOfWeeks === "number") {
//   console.log("Its a number");
//   areNoWeeks = Boolean(numOfWeeks);
// }

// console.log(areNoWeeks);

//////////////////////////////////////////////////////////////////////////////////////////////////

// 5.15 For Loops

// let num = 0;
// num++; // this adds 1 to num, same as num = num + 1
// console.log(num); // equals 1

// // a for loop contains 3 statements: 1) Declaration 2) Conditional 3) Increment of Index
// for (let i = 0; i < 10; i++) {
//   console.log(i); // a way to show the increments of the for loop
//   break; // stops the loop
// }

// const firstName = "Kat"; 

// let aCount = 0;

// for (let i = 0; i < firstName.length; i++) {
//   let char = firstName[i];
//   console.log(char);
//   if (char === 'a' || char === 'A') { // NOTE: strings characterize capital A and lowercase a as different
//     aCount++;
//   }
// }

// console.log(aCount);

// const nums = [100,200,300];

// const doubled = [];

// for (let i = 0; i < nums.length; i++) {
//   let num = nums[i];
//   console.log(num);
//   doubled.push(nums[i] * 2);
//   console.log(doubled);
// }

// console.log(doubled);

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i]);
//   nums[i] = nums[i] * 2; // overrides each index with a new value
// }

// console.log(nums);

//////////////////////////////////////////////////////////////////////////////////////////////////

// 5.16 For-IN & For-OF Loops

// for OF loop (DECLARATIVE for loop)

// const names = ["Kat", "Ellen", "Bryanna"];

// for (let name of names) {
//   console.log(name);
// }

// // called Declarative because this for loop is much more readable
// // NOTE: you cannot do an index i, because there is no index
// // For OF loops are great for values, but not if you need an index

// const user = {
//   name: "Kat",
//   age: 26
// }

// // NOTE: unlike with arrays, the order of values within objects is not guaranteed

// // for IN loop (IMPERATIVE for loop)

// for (let key in user) {
//   console.log(key); // outputs name and age
//   console.log(user[key]); // outputs Kat and 26
// }

////////////////////////////////////////////////////////////////////////////////////////

// 5.17 While loops (& common patterns)

// a while loop only has the break condition that a for loop has

// let i = 0;

// while (i < 10) {
//   // do something:
//   console.log(i);
//   i++;
// };

// if we don't know exactly how many iterations we are going need, then use a while loop

// Example: how many times can we double a number before it reaches 1000?

// let num = 13;

// let counter = 0;

// while (num < 1000) {
//   num *= 2; // multiply num by 2 each round
//   console.log(num);
//   counter++;
// }

// console.log(counter);

// const names = ["Kat", "Ellen", "Bryanna"];

// while (true) {
//   const foundName = names.pop();
//   console.log(foundName);
//   if (foundName[0] === 'E') {
//     console.log('Found E Name', foundName);
//     break;
//   }
// }

// you ALWAYS need a break in a while loop, either conditionally or with 'break;'

///////////////////////////////////////////////////////////////////////////////////////////////

// JS Practice 4

/*
 JS Practice 4

 this time you'll get a little less direction, 
 use "don't forget javascript" cheat sheet & re-watch the videos if needed!
*/

/*
    ☑️ create a string that contains your name
    ☑️ for loop over it, and print character to the console, one at a time
*/

// const names = ['Kat'];

// for (var i = 0; i < names[0].length; i++) {
//   let selectName = names[0];
//   let charName = selectName[i];
//   console.log(charName);
// }

/*
    ☑️ create an array with the first names of everyone in your family
    ☑️ for loop over the array, and print out the names one at a time
    ☑️ now, change your loop to print out first and last name on each iteration!
        (hint, your last name is the same for you whole family, right?)
*/

// const firstNames = ['Kat', 'Alex', 'Monika', "Douglas"];

// for (var i = 0; i < firstNames.length; i++) {
//   let firstNameList = firstNames[i];
//   console.log(firstNameList);
//   let lastName = 'Floyd';
//   const fullNames = `${firstNames[i]} ${lastName}`;
//   console.log(fullNames);
// }

/*
    ☑️ copy the code you wrote above and paste it below this comment
    ☑️ now "refactor" this code into a "declarative" "for of" loop
*/

// for (var firstName of firstNames) {
//   console.log(firstName);
//   let lastName = 'Floyd';
//   const fullNames = `${firstName} ${lastName}`;
//   console.log(fullNames);
// }


/*
    ☑️ now, declare an index variable "i" (on its own) and set it to zero
    ☑️ now write a while loop, with the break condition being i < 10. DON'T SAVE THE FILE
    ☑️ ...because you need to increment i by one each time the loop runs (do this inside the loop body)
    ☑️ now console log i in the body, and make sure it's printing numbers 0-9
*/

// let i = 0;

// while (i < 10) {
//   i++;
//   console.log(i);
// }

// you can also use while (i++ < 10) {}


/*
    ☑️ ok take the while loop code from above and paste it below
    ☑️ now, change i to be an empty string
    ☑️ set the break condition to be when the string length is > 10
    ☑️ and add a new "A" character to the end of i every time the loop runs.
*/

// let i = "";

// while (i.length < 10) {
//   i+= "A";
//   console.log(i);
// }

/*
    ☑️ still with me? let's create an object in variable "computer"
    ☑️ set the following keys & values: ram is "8GB", cpu is "quad core", storage is "1TB"
    ☑️ now, loop over the object with a "for in" loop
    ☑️ on each loop iteration, print out the key and value in a string formatted like so:
        "ram spec is 8GB", "cpu spec is quad core", "storage spec is 1TB"
*/

// var computer = {
//     ram: "8GB",
//     cpu: "quad core",
//     storage: "1TB"
//   }

// for (var data in computer) {
//   console.log(data);
//   let description = [`${data} is ${computer[data]}`];
//   console.log(description);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

// 5.18 Functions

// the point of functions is not to repeat yourself

// converts an input into an output, and works the same way every time

// Deterministic

// console.log(Number('123'));

// const newNum = Number('123');
// console.log(newNum, typeof newNum);

// function addTwo(num) { // inside the parenthesis is a placeholder for an input, AKA parameter
//   return num; // the new value comes out the other end with the return value
// }

// console.log(addTwo(1));
// const myNum = addTwo(1);
// console.log(myNum);

// // you can have another function that also uses the same parameter 'num', but it only says exclusive to it's own function environment

// function addThree(num) {
//   return num;
// }

// console.log(addThree(2));

// // this shows that if we have a constant variable num outside of the function, the parameter will not input that value
// // unless the constant variable specifically inputs that variable name
// // the inner scope will override the outer scope

// function addOne(num) {
//   console.log(num);
//   const twoAdded = num + 2;
//   console.log(twoAdded);
//   return twoAdded;
//   // return num + 2; is also an option:
// }

// const myFirstNum = addOne(1); // function is getting called with 1 as the argument
// const mySecondNum = addOne(2); // called with 2 as the argument
// const myThirdNum = addOne(3);
// console.log(myFirstNum, mySecondNum, myThirdNum);

////////////////////////////////////////////////////////////////////////////////////////////////

// 5.19 Function Expressions, Hoisting

// Function statement:
// const newNum = addTwo(5);
// console.log(newNum);

// // Function definition:
// function addTwo(num) {
//   return num + 1;
// }

// // Alternative way to define functions- Function Expression:
// const addThree = function(num) {
//   return num + 3;
// }

// // The function statement works before the defintion because our function gets moved to the top when our code gets run
// // This is called 'Hoisting'
// // BUT!!! this does not work the same way for function expressions, even though they do the same thing

// const secondNum = addThree(5);
// console.log(newNum, secondNum);

/////////////////////////////////////////////////////////////////////////////////////////////////

// 5.20 Functions, the Weird Parts

// Examples: anonymous functions and closures

// This is what a standard function looks like (stored in a variable):
// var addNums = function(n1, n2) {

// }

// // An anonymous function is when the function isn't stored within a variable: (it won't work)
// // function(n1, n2) {

// // }

// function createAddFn(n1) {
//   return function(n2) { // this is an anonymous function
//     return n1 + n2;
//   }
// }

// // Closure
// var addFive = createAddFn(5); // filling in the n1 parameter
// // so the anonymous function inside createAddFun(5) is now stored in the variable addFive
// // the variable n1 is now frozen in the new definition addFive
// console.log(addFive(5));
// console.log(addFive(2));
// console.log(addFive(0));

// var addTwo = createAddFn(2);
// console.log(addTwo(5));
// console.log(addTwo(2));
// console.log(addTwo(0));

/////////////////////////////////////////////////////////////////////////////////////////

// 5.21 Methods

// a function inside an object is called a Method

// const user = {
//   name: "Kat",
//   age: 26,
//   sayHello: function(){
//     console.log('Hello there');
//   }
// }

// user.sayHello(); // you call it like a normal function

// // You're likely not going to create your own methods, but you are going to use them SO MUCH!

// // Examples:
// const num = 123;
// num.toString();

// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);

// there are all methods that are defined on different data types

/////////////////////////////////////////////////////////////////////////////////

// 5.20 String Methods

// const animal = "dogs are great";

// // length (only sting attribute)
// console.log(animal.length); // not a function, but an attribute on an object

// // indexOf (find a char or substring within a string)
// console.log(animal.indexOf('g'));
// console.log(animal.indexOf("great")); // finds the index where this word starts

// // slice (you want to define FROM which index, TO which index you want to slice from your string)
// console.log(animal.slice(1)); // the slice starts at index 1 (o) and ending at end "ogs are great"
// console.log(animal.slice(0, 4)); // second index is "up to, but not including" the character in the string
// console.log(animal.slice(-2)); // starting at a in "great" and ends at the end of our string

// // common mistake with slice: the above slices create a copy of a string, but not changing the original string animal
// // just store the sliced string into a new variable:
// const slicedAnimal = animal.slice(1);
// console.log(slicedAnimal);

// // toUpper / Lowercase
// console.log(animal.toUpperCase());
// console.log(animal.toLowerCase());

// // concat
// console.log(`${animal} (not)`);
// console.log(animal + " (really)");
// console.log(animal.concat(" (definitely)"));

// // replace
// console.log(animal.replace("dogs", "cats")); // replaces just one "dogs" in the string
// console.log(animal.replace(/dogs/g, "cats"));

// // split
// console.log(animal.split("")); // splits every character into it's own array index
// console.log(animal.split(" ")); // split the string apart at the spaces, and put each string into an array index

///////////////////////////////////////////////////////////////////////////////////////////////////

// 5.23 Number Methods

// const num = 999;

// // toString
// console.log(num.toString()); // ouputs: 999;
// console.log(num.toString() + 111); // only adds 111 as a string-  output: 999111

// // toFixed
// console.log(num.toFixed(2)); // rounds to the second digit after the decimal
// // NOTE: toFixed also converts the number to a string
// console.log('$' + num.toFixed(2)); // for currencies- output: $999.000

// // Math.min, Math.max, parseInt
// console.log(Math.min(12, 222, 891, 5, -22)); // takes as many number as we want, so not a set number of parameters
// console.log(Math.max(12, 222, 891, 5, -22)); // same as Math.min, but maximum

// // Math.floor, Math.ceil
// console.log(Math.floor(999.999)); // rounds down your number- output: 999
// console.log(Math.ceil(999.001)); // rounds up your number- output: 1000
// console.log(parseInt(999.999)); // ignores any number after the decimal point

////////////////////////////////////////////////////////////////////////////////////////////

// 5.24 Basic Array Methods

// const nums = [1,2,3];

// // concat
// const numsTwo = [4,5,6];
// console.log(nums.concat(numsTwo));
// // you can also concat numsTwo TWICE  to an array: this is called 'method chaining'
// console.log(nums.concat(numsTwo).concat(numsTwo)); //output: [1,2,3,4,5,6,4,5,6]

// // slice
// console.log(nums.slice(1)); // slices off the first index
// console.log(nums.slice(0,2)); // second index is up to, but not including, so the 3 is not included
// console.log(nums.slice(-2)); // negative indices also work- output: [2,3]

// // pop, push (add, remove from end)
// let num = nums.pop(); // removes the last elemen of the array nums, and stores that value into num
// nums.pop(); // removes last element of the array, but that value is not stored in a variable
// console.log(nums, num); 
// nums.push(2);
// nums.push(num);
// console.log(nums); // we have original nums array [1,2,3] again

// // shift, unshift (add, remove from beginning)
// num = nums.shift();
// nums.shift();
// console.log(nums, num); // nums = [3] and num = 1
// nums.unshift(2);
// nums.unshift(num);
// console.log(nums);

// // splice
// // unlike slice, splice will not return a copy after slicing out elements of an array, it's doing it to the original array
// // const deleted = nums.splice(1,1,4); // removed elements are stored into splice as an array
// // console.log(deleted); 
// // console.log(nums);
// // splice(index, numberOfElementsToDelete [after initial index], replacement)
// const deleted = nums.splice(1,2,3,4,5,6,7,8,9); // everything after the first 2 numbers is added into the array in that position (multiple element)
// console.log(deleted); // output: [2,3]
// console.log(nums);

////////////////////////////////////////////////////////////////////////////////////////

/*
  JS Practice 5
  
    This will be the hardest practice yet, so get ready!

    We'll practice using common methods, then creating our own functions

    To test a given function or method, 
    you can put it inside a console log, like so.
        >> console.log(addTwo(2));
        >> 4

    or like so with your "expected" value of 4
        >> console.log(addTwo(2) === 4)
        >> true
    this also known as a test :)
*/


/*
    ☑️ Cool, let's create our own functions, first create a function definition that...
        >> 1. takes a number, "num" as an argument
        >> 2. divides num by 2
        >> 3. (don't forget to return!)
    ☑️ then, add some code to your function that rounds the number DOWN
    ☑️ finally, call your function with the values: 10, 25, 1235
        >> these should return: "5", "12", "617"
*/

// const divideTwo = function(num) {
//   const dividedNum = num / 2;
//   return Math.floor(dividedNum);
// }

// console.log(divideTwo(1235));

/*
    ☑️ now, create a function expression that 
        >> 1. takes a string as an argument
        >> 2. takes the first character "upper cases" it, and returns it
        >> 3. HINT: use direct indexing to get a single character from a string
    ☑️ call your function with the values: "hello", "world", "i love javascript"
        >> these should return "H", "W", "I"
    ☑️ BONUS: change your fn to return the original string capitalized
        >> these should return "Hello", "World", "I love javascript"
*/

// const makeUpper = function(word) {
//   let firstUpper = word[0].toUpperCase() + word.slice(1);
//   return firstUpper;
// }

// console.log(makeUpper('i love javascript'));

/*
    ☑️ Now, let's get some practice with the string methods
    ☑️ given the string "i love javascript"...
        >> get the "indexOf" the "j" character (should return 7)
        >> get the "indexOf" the "z" character (should return -1)

        >> get a "slice" of just the word "javascript"
        >> get a "slice" of just the word "love"

        >> "replace" the word "javascript" with "HTML"

        >> "split" the words apart into an array (should return ["i", "love", "javascript"])
*/

// const string = 'i love javascript';

// console.log(string.indexOf('j'));
// console.log(string.indexOf('z'));
// console.log(string.slice(7));
// console.log(string.slice(2,6));
// console.log(string.replace("javascript", "HTML"));
// console.log(string.split(" "));


/*
    ☑️ let's get some practice with the number methods
    ☑️ given the number 1000
        >> Convert it to a string with a "fixed" 2 decimal places
        >> add a dollar sign to the front of this string
        >> Use Math.max to compare your age with my age (28)
*/

// let num = 1000;

// let numFinal = num.toFixed(2).toString();
// console.log('$' + numFinal);

// console.log(Math.max('26','28'));

/*
    ☑️ let's get some practice with the array methods
    ☑️ given the array [ 1, 2, 3, 4 ]
        >> Let's "slice" it to just get the last 2 numbers 
            (remember, it does not modify the array, but makes a copy)

        >> Now, let's "push" numbers 5 and 6 into our array
            ( the Array should now be [1, 2, 3, 4, 5, 6] )

        >> Let's "SPLICE" it to now remove the 4 and 5 
            (remember, this DOES modify the array "in place")

*/

// let arr = [1,2,3,4];

// console.log(arr.slice(-2));
// arr.push(5,6);
// console.log(arr);
// arr.splice(3,2);
// console.log(arr);

/*
    CHAINING

    A common pattern is to chain multiple methods together
    They get "evaluated" from left to right, so...

    var name = "Igor Z";

    name.toUpperCase().split(' '); 
        >> would work! 
        >> toUpperCase goes first, so we get: "IGOR Z".split(' '), and finally ['IGOR', 'Z']
        >> in other words, we use 2 string methods in a row

    name.split(' ').toUpperCase();
        >> would NOT work
        >> split goes first, so we get ["Igor", "Z"].toUpperCase(), which causes an error
        >> we cannot use .toUpperCase, a string method, on an array

    ☑️ a common pattern is chaining "split" and "join" together
        this allows us to use array methods on strings, and then convert them back

        write the following out to see for yourself
        >> create a string, var alphabet = "abc"
        >> ".split" this string with the "" (empty space) char as an argument
        >> attach the ".reverse()" method to the end
        >> now ".join" this array with the "" (empty space) char as an argument

        cool, right?
*/

// var alphabet = 'abc';

// let char = alphabet.split("").reverse().join("");
// console.log(char);

/*
    ☑️ ok, now it's your turn (for real this time)
        Chain these steps into a single line! (Don't use intermediary variables)

    ☑️ create a number, var myNumber = 100...
        >> Let's convert it to a "fixed" 2 decimcal places (ex. "100.00")
        >> Then let's "split" it at "." to get dollars and cents
        >> Finally, let's use DIRECT INDEXING to just get the cents (ex. "00")
*/

// let myNumber = 100;

// let finalNum = myNumber.toFixed(2).split(".")[1] + ' cents';
// console.log(finalNum);

/*
    ☑️ one more, create a string, var coachName = "jan frey"...
        >> Let's split the words apart
        >> Then JUST get the last name initial (hint: direct indexing 2x)
        >> Convert the "f" to upper case
        >> Concat it, to create a string that says "F is the last initial"
        >> And finally, wrap the whole thing in a console.log!
*/

// var coachName = "jan frey";

// console.log(coachName.split(" ")[1][0].toUpperCase().concat(' is the last initial'));

/////////////////////////////////////////////////////////////////////////////////////////////////

// 5.25 Arrow Functions

// const addTwo = function(num) {
//     return num + 2;
// }

// the arrow function setup of the above function expression:
// const addTwo = (num) => { 
//     return num + 2;
// }
// if there is only 1 parameter, you can remove the parentheses
// const addTwo = num => {
//     return num + 2;
// }
// you can also removed the {} and the return: (but the {} and return need to be together)
// const addTwo = num => num + 2;

// const addBothNums = (first, second) => first + second;

// console.log(addBothNums(1,2));

// const doubleUntilOver1000 = function(num) {
//     while (num < 1000) {
//         num*=2;
//     }
//     return num;
// }

// console.log(doubleUntilOver1000(50));

/////////////////////////////////////////////////////////////////////////////////////////////

// 5.26 Find, Some, Every (Higher Order Array Methods)

// const nums = [1,2,3];

// // find (put an arrow function inside)
// const found  = nums.find(item => {
//     console.log(item, 'ran function');
//     })

// // it's exactly the same as this 'for of' loop:
// for (let num of nums) {
//     console.log(num, 'ran function');
// }

// // another example for find:
// const found1 = nums.find(num => {
//     if (num > 2) {
//         return true;
//     }
// });

// console.log(found1); // output is 3

// // some (at least one value has to be true)
// const ages = [12,21,13,42,50];

// const hasMinors = ages.some(age => {
//     if (age < 18) {
//         return true;
//     }
// })

// console.log(hasMinors);

// // every (every value has to be true)
// const allOver18 = ages.every(age => {
//     if (age > 18) {
//         return true;
//     }
// })

// console.log(allOver18);

// 5.27 ForEach, Map

// const ages = [21,42,50,18];

// let highestAge = 0;

// // forEach (no stored constant variable)
// ages.forEach(age => {
//     console.log(age);
//     if (age > highestAge) {
//         highestAge = age;
//     }
// })

// console.log(highestAge); // output: 50

// // only useful for console logging and modifying an external variable

// // you can also add extra parameters: example.forEach(value, index, array):
// ages.forEach((age, index, arr) => {
//     console.log(age, index, arr); // outputs: 21 0 [21,42,50,18] ...
// })

// // you can also use arr with arr[index] to select the index of the array

// // map (MOST USEFUL of all higher order array functions)
// const newAges = ages.map(age => {
//     console.log(age);
//     // return age; // need to have the returning of the variable to get the new array for newAges
//     // return 11; // newAges = [11,11,11,11]
//     return 12; // newAges = [12,12,12,12]
// })

// console.log(newAges); // without the return line, this is [undefined, undefined, undefined, undefined]

// // map allows us to modify our items with new values

// const newAges = ages.map(age => {
//     return age / 2;
// })

// // or written as so:
// const newAge = ages.map(age => age / 2);

// console.log(newAges); 

// const ageRange = ages.map(age => {
//     if (age > 40) {
//         return `boomer`;
//     } else {
//         return `zoomer`;
//     }
// })

// console.log(ageRange);

// 5.28 Filter, sort

// const ages = [21,42,50,18];

// // filter (this function only looks for a true, false, truthy, or falsey value to be returned)
// const boomers = ages.filter(age => {
//     // return false; // returns empty array
//     if (age > 40) {
//         return true;
//     } else {
//         return false;
//     }
// })

// const zoomers = ages.filter(age => {
//     // return false; // returns empty array
//     if (age < 40) {
//         return true;
//     } else {
//         return false;
//     }
// })

// console.log(boomers, zoomers); // outputs two separate arrays

// // sort (the other higher order array functions make a copy, but sort operates in places)
// ages.sort(); // the default of this array function sorts in an ascending order
// console.log(ages); // outputs [18,21,42,50]

// // also sorts in alphabetical order:
// const names = ['Kat', 'Alex', 'Mom', 'Dad'];
// names.sort();
// console.log(names);

// 5.29 Reduce

const ages = [21,42,50,18];

// reduce
const result = ages.reduce((sum, age) => {
    console.log(sum, age); // outputs: 21 42, 63(total from prev iteration) 50, 113 18
    const total = sum + age;
    console.log(total); // output: 63, 113, 131
    return total;
})

console.log(result); // output: 131 (final total)

// this can also be simply written as"
const simpleResult = ages.reduce((sum, age) => sum + age);

console.log(simpleResult); // output: 131
