// chapter 2
// Q1: Declare a variable called username.

var username;

// Q2:Declare a variable called myName & assign to it a string that represents your full name.

var myName = "Huzaifa Irfan";

// Q3:Write script to
//  a: Declare a JS variable, title messaged.
//  b: Assign "Hello World" to variable message.
//  c:Display the message in a alert box.

var message;

message = "Hello World!";

alert(message);

// Q4
var studentName = "Name : Huzaifa Irfan";

var course = "course : Modern web development.";
alert(studentName);

alert(course);

// Q5
var word = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(word);

// Q6

var email = "huzaifa123@gmail.com";
alert("My email is " + email);

// Q7
var book = "A smarter \n way to learn Java script";
alert("I am trying to learn Java script. " + book);

//  Q8

document.write("Yah! I can write HTML content through Java script." + "<br>");

// Q9
let line = "▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬";
alert(line);
document.write(line);

// chapter 3

// Q1:
var age = "i am 19 years old.";
alert(age);

// Q2:
var visits = 14;
alert("you have visited this site " + visits + " times. ");

// Q3:
var birthYear = 2007;
document.write("<br>" + "My birth year is  " + birthYear + " <br>");
document.write(
  "Data type of my declared variable is " + typeof birthYear + "<br>",
);

// Q4:

let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;

document.write(
  "<b>" +
    visitorName +
    "</b> ordered <b>" +
    quantity +
    " " +
    productTitle +
    "</b>(s) on XYZ Clothing store",
);

// chapter 4

// Q1:
var a = 10,
  b = 20,
  c = 30;

// Q2

// legal names
var $my_1stVariable = 1;
var $name = "Huzaif";
var _name = "Irfan";
var name = "Web";
var userAge = 20;

// 5 illegal names
// var 1stVariable = 1;
// var my-name = "x";
// var my name = "x";
// var let = 5;
// var user@email = "x";

// chapter 5

// Q1:
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<br>" + "sum of 3 and 5 is " + sum + "<br>");

// Q2:

var num1 = 3;
var num2 = 5;

var difference = num1 - num2;
document.write("Subtraction of 3 and 5 is " + difference + "<br>");

var product = num1 * num2;
document.write("Multiplication of 3 and 5 is " + product + "<br>");

var quotient = num1 / num2;
document.write("Division of 3 and 5 is " + quotient + "<br>");

var remainder = num1 % num2;
document.write("Modulus of 3 and 5 is " + remainder + "<br>");

// Q3:

var num;
document.write("Value after variable declaration is: " + num + "<br>");

num = 5;
document.write("Initial value: " + num + "<br>");

num++;
document.write("Value after increment is: " + num + "<br>");

num = num + 7;
document.write("Value after addition is: " + num + "<br>");

num--;
document.write("Value after decrement is: " + num + "<br>");

var remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");

// Q4:
var ticketPrice = 600;

var totalCost = ticketPrice * 5;
document.write(
  "Total cost to buy 5 tickets to a movie is " +
    totalCost +
    "<b>PKR</b>" +
    "<br>",
);

// Q5:
