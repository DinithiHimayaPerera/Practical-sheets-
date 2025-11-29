const myBtn = document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const min=1;
const max=6;

let randumNumber1;
let randumNumber2;
let randumNumber3;



myBtn.onclick = function(){
    randumNumber1=Math.floor(Math.random() * max) + min;
    randumNumber2=Math.floor(Math.random() * max) + min;
    randumNumber3=Math.floor(Math.random() * max) + min;
    myLabel1.textContent= randumNumber1;
    myLabel2.textContent= randumNumber2;
    myLabel3.textContent= randumNumber3;
    
}
























//random num between 1-6
let randumNum=Math.floor(Math.random()* 6 )+1;
console.log(randumNum);

//random num between 1-100
let randumNum2=Math.floor(Math.random()* 100 )+1;
console.log(randumNum2);

//random num between max-min
let max2=1000;
let min2=100;
let randumNum3=Math.floor(Math.random()* max2 )+min2;
console.log(randumNum3);

let randumNum4=Math.floor(Math.random()* (max2-min2) )+min2;
console.log(randumNum4);

/*console.log(Math.PI);
console.log(Math.E);
let x=6.991111111122222222;
let a=2;
let b=10;

z=Math.round(x);
w=Math.floor(x);
y=Math.trunc(x);
b=Math.pow(a,2);
c=Math.log(a);
f=Math.sin(a);
g=Math.cos(a);
h=Math.tan(a);
i=Math.abs(x);
j=Math.sign(a);
k=Math.max(x,a,b);
l=Math.min(x,a,b);


console.log(x);
console.log(z);
console.log(w);
console.log(y);
console.log(b);
console.log(c);
console.log(f);
console.log(g);
console.log(h); 
console.log(i);
console.log(j); 
console.log(k); 
console.log(l); 
*/
