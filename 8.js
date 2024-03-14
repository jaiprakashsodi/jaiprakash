
//  write a program to take two numbers, A and B from the user. Your task is to find the largest number that is less than A and can be divided evenly by B. Can you figure out that number?


const input=require('readline-sync')
let a=input.questionInt("enter a number")
let b=input.questionInt("enter a number")
r=Math.floor((a-1)/b);
console.log(r*b)