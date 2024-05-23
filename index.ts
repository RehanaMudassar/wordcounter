console.log("Word Counter By Rehana")
//#! /usr/bin/env node
import chalkPipe from 'chalk-pipe'

//console.log(chalkPipe('blue.bold')('Word Counter by Rehana Mudassar'));
import inquirer from "inquirer"
import { parseArgs } from "util"
// 1) Computer will count words, letters and spaces in a paragraph

// 2) User input a sentence
function counter(text:string){
    let freeWhiteSpace=text.replace(/\s/g,"")
    return freeWhiteSpace.length
}
async function wordcounterstart(counter:(pra:string)=>number){
        let ans=await inquirer.prompt({
        name:"para",
        type: "input",
        message:"Type your pargraph"
            })
            console.log(ans.para);
            console.log("No of characters in this paragraph are:");
            console.log(counter(ans.para));
            const word=ans.para.trim().split(" ");
            let letters=ans.para.split("")
            console.log(chalkPipe('blue.bold'), word)
            console.log(letters)
            console.log("*".repeat(50))
            console.log(`Word count in your Sentence is :${word.length}`);
            console.log("*".repeat(50))
            console.log(`Letters count in your Sentence is :${letters.length}`);
            console.log("*".repeat(50))
            console.log("Space count in your Sentence is : " ,word.length-1);
           }

wordcounterstart(counter)