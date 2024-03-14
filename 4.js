// Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

const input=require('readline-sync')
let a=input.questionInt("enter a number")
let b=input.questionInt("enter a number")
r=a%b;
q=Math.floor(a/b);
console.log(r,q);