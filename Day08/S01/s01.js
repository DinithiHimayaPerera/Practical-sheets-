

function addItemToList() {
    const userInput = document.getElementById('userInput');
    const myList = document.getElementById('myList');

  
    const itemText = userInput.value.trim(); 

    if (itemText !== '') {
      
        const listItem = document.createElement('li');
        listItem.textContent = itemText; 

       
        myList.appendChild(listItem);

       
        userInput.value = '';
    }
}


const buttons = document.querySelectorAll(".category");

buttons.forEach(button => {
    button.addEventListener("click", function () {

       
        buttons.forEach(btn => btn.classList.remove("selected"));

        
        this.classList.add("selected");
    });
});