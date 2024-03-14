// Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers


const input=require('readline-sync')
let a=input.questionInt("enter a number")
let b=input.questionInt("enter a number")
c=a+b;
d=a/b;
e=a-b;
f=a*b;
g=a%b;
h=Math.floor(a/b);
console.log(c,d,e,f,g,h);