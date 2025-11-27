
function addTask(){
    const input= document.getElementById("taskInput");
    const task=input.ariaValueMax.trim() //trim unusable spaces

    if( task=" "){
        alert("Enter a task");
    }

    const li= document.createElement("li");
    li.innerHTML=task;
    const ul=document.getElementById("taskList")
    ul.appendChild(li);

}

function activeCategory(element){

    const cats=document.getElementsByClassName("category");
    for(let i=0;i<cats.length;i+1){
        cats[i].classList.remove("active")
    }

    element.classList.add("active");

}

