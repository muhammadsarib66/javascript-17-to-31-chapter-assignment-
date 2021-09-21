// CHAPTER 17 TO 31 ASSIGMENT

// CH 17 TO 20 START(ARRAY & LOOP)

// TASK 1 

// let multidimensional = [[],[]]
// console.log(multidimensional)

// TASK 2 

// let matrix = 
// [
// [0,1,2,3],
// [1,0,1,2],
// [2,1,0,1]
// ]
// console.log(matrix)

// task 3 

// for(a = 1; a<=10; a++){
//    console.log(a)
// }

// task 4 

// let = mytable = Number(prompt("enter which table u want to read"));
// let = mytable_length = Number(prompt("length of table"))
// if(mytable && mytable_length){
// for (index = 1; index < mytable_length; index++ ){
//     console.log( `${mytable}* ${index} = ${mytable*index} `)
// }
// }
// else{
//     alert('use corect number')
// }

// task 5

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

// for (a = 0; a<fruits.length; a++) {
//   console.log (` Element at index ${a} is ${fruits[a]}`);
// }

// task 6

// let counting = '';
// let revcounting = '';
// let even = '';
// let oddi = '';
// let series ='';

// for (let index = 1; index < 15; index++) {
//     counting += `${index},`
// }
// for (let index = 10; index >= 1; index--) {
//     revcounting += `${index},`
// }
//     for (let index = 0; index <= 20; index++) {
//         if (index % 2 === 0) {
//           even += `${index},`;
//         } else {  
//           oddi += `${index},`;
//         }
//       }
//       for (let index = 2; index <= 20; index++) {
//         if (index % 2 === 0) {
//           series += `${index}k,`;}}



// console.log( `counting
// ${counting}`);
// console.log( `revcounting;
// ${revcounting}`)
// console.log(`even:
// ${even}`)
// console.log(`oddi:
// ${oddi}`)
// console.log(`series:
// ${series}`)

// task 7

// let item = [`cookie`,`pastery`,`cake`]
// let search = prompt(`Welcome to ABC bakers what you want to Order Sir/mam`)
// let found= item.indexOf(search)

// task 8

// let  record =  [24, 91, 78, 53,100, 12];
// let max = 0
// for ( const key in record) {
//     if(max<record[key]){
//         max = record[key]
//     }
// }
// console.log(`this is nunmbers ${record}`)
// console.log(`this is larg number ${max}`)

// task 9

// let  record =  [24, 91, 78, 53,100, 12];
// let min = record[0]
// for ( const key in record) {
//     if(min>record[key]){
//         min = record[key]
//     }
// }
// console.log(`this is nunmbers ${record}`)
// console.log(`this is min number ${min}`)

// task 10

// let a = '';
// for (let index = 1; index <= 20; index++) {
//     a += `${index*5},`
// }
//    console.log(a)

// chapter 17 to 20 end

// assignment 21 to 25 

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var fname = prompt("first name")
// var lname = prompt("last name")
// if( fname && lname){
//     var fullname = fname + ' ' + lname
//     document.write(`Hi ${fullname}`)
// }
// else(alert('enter your full name please'))

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var phone = prompt('whats your favourite phone ')
// var lenth = phone.length
// console.log(`My fav phone is ${phone} \n and length is ${lenth}`)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var a = 'pakistan'
// var ind = a.indexOf('n')
// console.log(`${a} \nindex of n in pakistan is ${ind}`)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var a = 'Hello World'
// var b = a.lastIndexOf('l')
// console.log(`${a} \nlast index of l in hello world is ${b}`)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word = 'pakistan'
// var char = word.charAt(2)
// console.log(`word is ${word} \n 3rd index of pak is ${char}`)

// QUESTION 6

// var fname = prompt("first name")
// var lname = prompt("last name")
// if( fname && lname){
//     var fullname = fname.concat(' ' +lname)
//     document.write(`Hi ${fullname}`)
// }
// else(alert('enter your full name please'))

//7.  Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = 'Hyderabad'
// var citynew = city.replace('Hyder', 'Islam')
// console.log(`City: ${city} \nAfter replacement: ${citynew}`)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var citynew = message.replace(/and/g , ' &')
// console.log(message +' \n'+  citynew) 

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var a = 445
// var b = Number(a)
// console.log(b)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// var a = 'peanut'
// var b = a.toLocaleUpperCase()
// console.log(b)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// var a = 'karachi'
// var b = a.charAt(0)
// var c = b.toUpperCase()
// var d = a.slice(1,7)
// console.log( c+d)

// 12. Write a program that converts the variable num to
// string.

// var a = 32.56
// var b = String(a)
// var c = b.slice(0,2)
// var d = b.slice(3,5)
// var e = c.concat(d)
// console.log(`Number: ${a}\n Result: ${e}` ) 

/*Assignemnt# 13:. Write a program to take user input and store username in a variable. If the username contains any special symbolamong [@ . , !], prompt the user to enter a valid username.
For character codes of [@ .
Note:
ASCII code of ! is 33
ASCII code of , is 44
ASCII code of . is 46
ASCII code of @ is 64
*/

// let inpt = prompt('Enter User name');
// if (inpt) {
//   for (let index = 0; index < inpt.length; index++) {
//     // debugger;/
//     if (
//       inpt[index].charCodeAt() === 33 ||
//       inpt[index].charCodeAt() === 44 ||
//       inpt[index].charCodeAt() === 46 ||
//       inpt[index].charCodeAt() === 64
//     ) {
//       alert('Enter a valid username');
//     }
//   }
// }

/*
Assignment# 14:You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
*/

// let my_bakery = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties'];
// let my_searchItem = prompt("Welcome To ABC Bakery /What do you want  to order sir/Ma'am");
// let isfound = my_bakery.indexOf(my_searchItem.toLowerCase());
// if (isfound >= 1) {
//   console.log(`${my_searchItem} is Available at index ${isfound} in our bakery`);
// } else {
//   console.log(`We are Sorry. ${my_searchItem} is not Available  in our bakery`);
// }

/*
Assignment# 15: Write a program to take password as an input from user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements, prompt the user to enter a valid password.
For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.
*/

// let userInputValue = prompt('Password??');
// let valid_password = true;
// let first_char_password;
// if (userInputValue) {
//   if (userInputValue.length >= 6) {
//     first_char_password = userInputValue.slice(0, 1);
//     if (!(first_char_password.charCodeAt() >= 48 && first_char_password.charCodeAt() <= 57)) {
//       for (let index = 0; index < userInputValue.length; index++) {
//         if (userInputValue[index].charCodeAt() >= 65 && userInputValue[index].charCodeAt() <= 90) {
//         } else if (userInputValue[index].charCodeAt() >= 97 && userInputValue[index].charCodeAt() <= 122) {
//         } else if (userInputValue[index].charCodeAt() >= 48 && userInputValue[index].charCodeAt() <= 57) {
//         } else {
//           valid_password = false;
//         }
//       }
//     } else {
//       valid_password = false;
//     }
//   } else {
//     valid_password = false;
//   }
// } else {
//   console.log('some thing wrong');
// }

// if (!valid_password) {
//   console.log('Your Entered Password dont not match all Requirement');
//   console.log('paswword should not start with a number');
//   console.log('Password must at least 6 charactor long!!');
//   console.log(`Password should contain alphabets and numbers only`);
// } else {
//   console.log('Your Entered a Valid Password');
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser

// var a = 'university of karachi'
// var b = a.split('')

// for(i =0; i <=b.length; i++){
//     console.log(b[i])
// }

// 17. Write a program to display the last character of a user
// input.

// var a = 'sarib'
// var b = a.length -1
// console.log(`username: ${a}
// last character of username: ${a[b]}`)

/*Assignemt# 18: You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
 */

// let sentance = 'The quick brown fox jumps over the lazy dog';
// sentance = sentance.toLowerCase();
// let split_sentance = sentance.split(' ');
// let number_of_the = 0;
// for (let index = 0; index < split_sentance.length; index++) {
//   if (split_sentance[index] === 'the') {
//     number_of_the++;
//   }
// }
// console.log(`Text: ${sentance}`);
// console.log(`There are ${number_of_the} occurrence(s) of "the"`);

// ,,,,,,,,,,,,,,,,,,,,,,,,,,
// math method start ch26
// ,,,,,,,,,,,,,,,,,,,,,,,

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt('enter some number')
// var b = Math.round(a)
// var c = Math.ceil(a)
// var d = Math.floor(a)
// console.log(`Number: ${a}`);
// console.log(`Round off value: ${b}`);
// console.log(`ceil value: ${c}`);
// console.log(`floor Value: ${d}`);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var a = +prompt('enter some Negative Number number')
// var b = Math.round(a)
// var c = Math.ceil(a)
// var d = Math.floor(a)
// console.log(`Number: ${a}`);
// console.log(`Round off value: ${b}`);
// console.log(`ceil value: ${c}`);
// console.log(`floor Value: ${d}`);

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var a = +prompt('enter some digits')
// var b = Math.abs(a)
// console.log(`The Absolute Value of ${a}: is ${b}`);

//Assignment# 04: Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.


// var a = Math.random()*9
// var b = Math.floor(a)
// console.log(`Random Dice Value: ${b}`);

//Assignemnt# 05: Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.

// let num_for_coin = Math.trunc(Math.random() * 2 + 1);
// num_for_coin === 2
//   ? console.log(`${num_for_coin}
// Random Coin Value: Head`)
//   : console.log(`${num_for_coin}
// Random Coin Value: Tails`);

//Assignemnt# 06: Write a program that shows a random number between 1 and 100 in your browser.

// let a = Math.random() * 100 + 1;
// var b = Math.floor(a)
// console.log(`Random Number Between 1 To 100: ${b}`);

/*
Assignment# 07: Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
a. 50
b. 50kgs
c. 50.2kgs
d. 50.2kilograms
*/

// var a = prompt('Enter Your Weigth in Kilogram.');
// var b = parseFloat(a);
// console.log(`The Weight of user is: ${b} kilograms`);

/*
Assignment# 08: Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
 */

// let secret = Math.trunc(Math.random() * 10 + 1);
// let usr_input = +prompt('Enter Number between 1 to 10');
// if (usr_input) {
//   usr_input === secret ? alert('congratulate!') : alert('Try again');
// } else {
//   alert('Enter only Number  Between 1 to 10.');
// }


////////////////////////
////   THE END     /////
///////////////////////
