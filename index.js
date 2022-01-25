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

let i = 0;

while (i < 10) {
  // do something:
  console.log(i);
  i++;
};

// if we don't know exactly how many iterations we are going need, then use a while loop

// Example: how many times can we double a number before it reaches 1000?

let num = 13;

let counter = 0;

while (num < 1000) {
  num *= 2; // multiply num by 2 each round
  console.log(num);
  counter++;
}

console.log(counter);

const names = ["Kat", "Ellen", "Bryanna"];

while (true) {
  const foundName = names.pop();
  console.log(foundName);
  if (foundName[0] === 'E') {
    console.log('Found E Name', foundName);
    break;
  }
}

// you ALWAYS need a break in a while loop, either conditionally or with 'break;'


















