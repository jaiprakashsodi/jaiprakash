
// a program to convert a temperature from Celsius to Fahrenheit using the formula C/5 = (F-32)/9


const input=require('readline-sync')
let c=input.questionInt("enter a number")
f=9*c/5+32 
console.log (f)