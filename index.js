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

      const myFirstName = "Kat";
      const myAge = 26;

    /*
        ☑️ Now, create a new variable called "myFullName" USING the "myFirstName" variable
        ☑️ Print a statement introducing yourself
    */

      const myFullName = `${myFirstName} Floyd`;
      console.log(`My name is ${myFullName}`);

    /*
        ☑️ Let's next write an if statement that prints 
            > "Im older than Aaron" if you're older than 28
            > "Im the same age as Aaron" if you ARE 28
            > Otherwise it should print "Im younger than Aaron"
            (You Should Have an If, and Else if, and an Else below -- not just a single console.log)
    */

      if (myAge > 28) {
        console.log("Im older than Aaron");
      } else if (myAge === 28) {
        console.log("Im the same age as Aaron");
      } else {
        console.log("Im younger than Aaron");
      }
    
    /*
        ☑️ Next, calculate whether your age is even or odd, and store it in a boolean variable "isEven"
        ☑️ Now write another if statement that prints "My age is even", or "My age is odd", 
          depending which is true
    */

      let isEven = (myAge % 2) === 0;
      
      if (isEven) {
        console.log("My age is even");
      } else {
        console.log("My age is odd");
      }

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

        const activeUserCount = 0;

        if (activeUserCount === 1) {
        console.log(`There is ${activeUserCount} active user.`);
        } else {
          console.log(`There are ${activeUserCount} active users.`)
        } 

      /*
        THE FINAL CHALLENGE (HARD)
        Let's bring the previous example to a more difficult level

        ☑️ Given a number, write it's ordinal case: 1st, 2nd, 3rd, 4th...
        ☑️ Use if/else if/else to accomplish this
        ☑️ Your code should work with any number
      */

        const num = '50011';
        console.log(num[num.length-1]);
        console.log(num[num.length-2]);

        if (num[num.length-2] == 1) {
          console.log(`${num}th`);
        }
        else if (num[num.length-1] == 1) {
          console.log(`${num}st`);
        } else if (num[num.length-1] == 2) {
          console.log(`${num}nd`);
        } else if (num[num.length-1] == 3) {
          console.log(`${num}rd`);
        } else {
          console.log(`${num}th`);
        }
















