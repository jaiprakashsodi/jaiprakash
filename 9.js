

// Write a program to take a number from the user and output whether that number is negative, positive or zero.

const input=require('readline-sync')
let a=input.questionInt("enter a number")
var positive,negative,zero;
if(a==0){
    console.log("zero");
} else if(a>0) {
    console.log("positive")
}  else {
    console.log("negative")
}