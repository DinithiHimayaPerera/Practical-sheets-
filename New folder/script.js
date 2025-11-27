const increseBtn = document.getElementById("increseBtn");
const resetBtn = document.getElementById("resetBtn"); 
const decreseBtn = document.getElementById("decreseBtn");
const buttonContainer = document.getElementById("buttonContainer");

let count=0;

increseBtn.onclick=function(){

    count++;
    countlabel.textContent = count;

}

decreseBtn.onclick=function(){

    count--;
    countlabel.textContent = count;
    
}

