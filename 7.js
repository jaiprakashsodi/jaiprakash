

// Write a program to take two numbers from the user and determine the greater of those two given numbers.

const input=require('readline-sync')
let a=input.questionInt("enter a number")
let b=input.questionInt("enter a number")

if(a>b){
    console.log(a);
}
else{
    console.log(b)
}
