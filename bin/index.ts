#! /usr/bin/env node
import clear from "clear";
import figlet from "figlet";
import colors from "colors";
import inquirer from "inquirer";

async function main() {
    clear();
    console.log(colors.magenta("Currency Converter  "));
    console.log('\n');

    const msg1 = colors.rainbow("input amount to be converted  \n");

    const msg2 = colors.rainbow("select currency to  convert \n ");
     const msg3 = colors.rainbow("select currency to be  \n ");
     const msg4 = colors.rainbow("start conversion?  \n ");

  interface ExchangeRates{
   USD:{
    USD:number,
    PKR:number,
    Euro:number,
    Pound:number,
    CAD:number
   },
   PKR:{
    PKR:number,
    USD:number,
    Euro:number,
    Pound:number,
    CAD:number
   },
   Euro:{
    Euro:number,
    USD:number,
    PKR:number,
    Pound:number,
    CAD:number
   },
   Pound:{
    Pound:number,
    USD:number,
    Euro:number,
    PKR:number,
    CAD:number
   },
   CAD:{
    CAD:number,
    USD:number,
    Euro:number,
    Pound:number,
    PKR:number
   }
    
  }


    let arrCurrency=["Pound","Euro","CAD","USD","PKR"]

let currencyList:ExchangeRates  =
    {
        "USD":{
        "USD":1,
        "PKR":226.38,
        "Euro":0.94,  
        "Pound":0.83,
        "CAD":1.36
    },
      
        "PKR":{
            "PKR":1,
            "USD":0.0044,
            "Euro":0.0042,
            "Pound":0.0037,
            "CAD":0.0060
           },
    "Euro":{
            "Euro":1,
            "USD":1.06,
            "PKR":240.27,
            "Pound":0.88,
            "CAD":1.44
           },
    "Pound":{
            "Pound":1,
            "USD":1.20,
            "Euro":1.13,
            "PKR":272.22,
            "CAD":1.64
           },
    "CAD":{
            "CAD":1,
            "USD":0.74,
            "Euro":0.69,
            "Pound":0.61,
            "PKR":166.46
           }
    }



let answers:{play:boolean,currencyValue:number,currency:"USD"|"PKR"|"Euro"|"Pound"|"CAD",currencyConvert:"USD"|"PKR"|"Euro"|"Pound"|"CAD"}= await inquirer.prompt([
               
            {
                name: "currencyValue",
                type: "number",
                message: msg1,
            },
            {
                name:"currency",
                type:"list",
                message:msg2,
                choices:arrCurrency
            },
            {
                name:"currencyConvert",
                type:"list",
                message:msg3,
                choices:arrCurrency
            },
         
          
        ]) 
        const {currencyValue,currency,currencyConvert,play}=answers
         let result=currencyList[currency][currencyConvert]*currencyValue
        console.log(`converted value is ${result}`)
        
        
      
      
        }    
        
    
main();
