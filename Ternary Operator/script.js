// ternary operator= shortcut to if() and else() statements
// condition ?   codeIfTrue :  codeIfFalse;

let age= 21;
let massage = age >= 18 ? "You are an adult" : "You are  a minnor" ;

 console.log(massage);

let isStudent=false;
let massage01 = isStudent ? "You are a student" : "You are not a student." ;
console.log(massage01);

let perchaseAmount=155;
let discount = perchaseAmount>=100 ? 10 : 0;
console.log(`Your total is $${perchaseAmount - perchaseAmount*(discount/100)}`);