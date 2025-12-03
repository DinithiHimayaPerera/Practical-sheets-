// method chaining = calling one method ahter another 
//                   in one continuous line of code.


// ---------NO method chaining --------------

let username=window.prompt("Enter your name : ");

//username=username.trim();
//let letter=username.charAt(0);
//letter=letter.toUpperCase();

// ---------WITH method chaining --------------

username=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
// username.trim().charAt(0).toUpperCase()  ->  username eke 1st letter eka capital karanawa
// username.trim().slice(1).toLowerCase();  ->  username eke ithuru  letters eka simple karanawa
console.log(username);

//Logical operators
const isSunny = true;

if(isSunny){
    // isSunny = true -> then prnt this
    console.log("Is Sunny");
}
else{
    // isSunny = false -> then prnt this
    console.log("Is not Sunny");
}
const temp = 20;

if(temp>0 && temp<=30){

    console.log("the weather is good");

}
else{
    console.log("Weather is too bad");
}


// = assignment operator   -> assign a value
// == comparison operator  -> compare 2 values
// === strict equality operator  -> compare if VALUES and DATA TYPE  are equal
//  != Inequality
//  !==      strict Inequality

const Pi = 3.14;

if( Pi==="3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}

//const Pi = 3.14;

// Pi==="3.14" this is not Pi because in here this is not number type. it is string .



