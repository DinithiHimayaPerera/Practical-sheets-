let titleElement=document.getElementById("title");
console.log("Title element"+titleElement)

titleElement.innerHTML="Changed JS DOM";

let pElement= document.getElementsByClassName("paragraph")
console.log("Para element: "+pElement[2].innerHTML);

let tagElement =  document.getElementsByTagName("button");
console.log("Tag Element:"+tagElement[0].innerHTML);

let myLink=document.getElementById("myLink");
myLink.href="https://drive.google.com/drive/folders/1lzBAaMKZrrHJklX6-HqYY4NCxdmBO8zA";
myLink.innerHTML="Drivers";

//myLink.style.color="red";

//there is no specific clas for myLink we wanna add class manually
//this is how we add a new class manually with javaScript
myLink.classList.add("textGreen");

// we also wanna remove the class name "textGreen" which was added manually

myLink.classList.remove("textGreen");

let divElement= document.querySelector(".box");

/*
document.getElementsByTagName("li")[0].style.color="purple";
document.getElementsByTagName("li")[1].style.color="purple";
document.getElementsByTagName("li")[2].style.color="purple";   <= this can do

*/
//document.getElementsByTagName("li")[0][1][2].style.color="purple";   <= Error

