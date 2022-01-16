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

var firstName = "Kat";
var helloString = `<h1> Hello ${firstName} </h1>`; // you can attach this html element to our page with JS
console.log(helloString);

// a string usually has to be written all in the same line with single quotes, but you can add new lines by using the special escape new line character \n

var paragraphs = 'first paragraph \n second paragraph \n third paragraph';

// you can also create a tab using escape character \t

var paragraphs = 'first paragraph \t second paragraph \t third paragraph';

// if you use backtick, you can organize this better since you can use multiple lines per string
// the formatting done here is also preserved the way it is typed in the code

var paragraphs = `
  <div>
    <h1>${firstName}</h1>
    <p>Paragraph 1</p>
  </div>
`;

// being able to write multiple lines within a string is great because you can easily insert lines of code!











