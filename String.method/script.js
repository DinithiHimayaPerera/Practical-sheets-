

let username="Dinithi ";

console.log(username.charAt(0));
console.log(username.charAt(1));
console.log(username.charAt(2));
console.log(username.indexOf("D"));
console.log(username.indexOf("i"));
console.log(username.lastIndexOf("i"));
console.log(username.length);

username=username.toLowerCase(username);
console.log(username);

username = username.repeat(3);
console.log(username);

username="Dinithi ";

let result = username.startsWith(" ");
console.log(result);

if(result){

    console.log("Your username can not begin with ' ' ");

}
else{
    console.log(username);
}

let result01 = username.includes(" ");
console.log(result);

if(result01){

    console.log("Your username can not include  with ' ' ");

}
else{
    console.log(username);
}

let phoneNymber = "076-1067030";
phoneNymber02=phoneNymber.replaceAll("-","  ");
console.log(phoneNymber02);

phoneNymber01=phoneNymber.padStart(15,"0");
console.log(phoneNymber01);


//String Slicicng

const fulName = "Bro Code";

let firstName = fulName.slice(0,2);
let firstName01 = fulName.slice(0,5);
let firstName02 = fulName.slice(2,5);
let firstName03 = fulName.slice(-1);
let firstName04=

console.log(firstName);
console.log(firstName01);
console.log(firstName02);
console.log(firstName03);

//  string slicing = creating a substring 
//                  from a position of another string 

//                  string.slice(strat, end);


const email="dinithi@gmail.com";

let uName= email.slice(0,email.indexOf("@"));
console.log(uName);

let extention=email.slice(email.indexOf("@"));
console.log(extention);

let extention02=email.slice(email.indexOf("@") +1);
console.log(extention02);

