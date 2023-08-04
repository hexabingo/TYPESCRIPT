"use strict";
//// Functions `function (para){body}`
/// (1) types of UserDefined functions
// (i) no input no return
// (ii) pass input no return
// (iii) pass input and return
//type 1 function
// function printMsg001(/*par*/) 
// {
//     console.log("Hi, this is a was function");
// }                                             
// printMsg001()                                                    
// function printMsg002(/*par*/)
// {
//     console.log(8+2);
// }
// printMsg002()
// function Us(/*par*/ userName:string)
// {
//     console.log(`Salam ,${userName} WOWWWWW`)
// }
// Us("Allah")
// function printMsg002(/*parameter*/ userName: string){
//     //body
//     console.log(` Hi, ${userName} This is a greeting msg`)
//     }
// printMsg002("Allah")
// Function type 2 with return value
function NO(username) {
    let val = `Salam,${username} from Haider`;
    return val;
}
NO('EVERYONE');
function greetingWithReturn(userName) {
    let val = `Hi, ${userName} this is a function with some returning value`;
    return val;
}
greetingWithReturn(`Hikmat`); // will not return any value as no variable has been assigned
