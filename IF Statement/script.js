
const myText= document.getElementById("myText");
const mySubmit= document.getElementById("mySubmit");
const resultElement= document.getElementById("resultElement");
let age01;
mySubmit.onclick=function(){
    age01=myText.value;
    age01=Number(age01);

    if(age01>=18){
        console.log("You can enter the site.");
        resultElement.textContent=`You can enter the site.`;
    }
    else if(age01>=100){
        console.log("You are too old .");
        resultElement.textContent=`You are too old .`;
    }
    else if(age01>0){
        console.log("You are too young.");
        resultElement.textContent=`You are too young.`;
    }
    else{
        resultElement.textContent=`You must be 18+.`;
    }
    

    }
    
    

/*
let age = 150;
let hasLicense=false;

if(age>=18){
    console.log("You are old enought to drive.");

    if(hasLicense){
    console.log("if you have your license.");

    
}
else{
    console.log(" but you do not  have your license.");
}

    
}
else{
    console.log("You must be 18+ to drive.");
}



 if(100>age>=18){
    console.log("You are old enought to drive.");

    if(hasLicense){
    console.log("if you have your license.");

    
}
else{
    console.log(" but you do not  have your license.");
}
   
}

else if(age>=100){
    console.log("You are too old to drive.");
}
else{
    console.log("You must be 18+ to drive.");
}

 if(100>age>=18){
    console.log("if you have your license.");

    
}

*/