
const decreseBtn = document.getElementById("decreseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count=0;

increaseBtn.onclick=function(){
    count++;
    countlabel.textContent = count;
}

decreseBtn.onclick=function(){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick=function(){
    count = 0;
    countlabel.textContent = count;
}