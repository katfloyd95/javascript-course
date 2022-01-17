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

  const nums = [1, 2, 3];
  console.log(nums);
  nums[0] = 4;
  console.log(nums);

/*
    ☑️ Let's add 5 and 6 to the end of the nums array (HINT: use a "method")
        Print nums to make sure everything looks right (should be [4, 2, 3, 5, 6])
    ☑️ Now let's set the "last index" number to be 10
    ☑️ And let's "pop" off the last number and store it in a variable "lastNum"
    ☑️ Then print "lastNum" to the console!
*/

  nums.push(5,6);
  nums[nums.length - 1] = 10;
  console.log(nums);
  const lastNum = nums.pop();
  console.log(lastNum);
  

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

  const product = {
    name: "shiny shoes",
    brand: "gucci",
    price: 100,
    color: "black",
    soldOut: false,
  }

  console.log(product.name, product.brand, product.price);
  product.sale = true;
  product.tags = ["men", "luxury"];
  product.soldOut = true;
  console.log(product);












