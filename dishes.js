const form = document.getElementById("dishes")
const inputDish = document.getElementById("dishes")
const addDish = document.getElementById("dishes")
addDish.addEventListener("click"), 
function addDish(evt) {
    console.log(inputDish.value);
    // lägger till lista i ul-elementet
    let ul = document.createElement("ul");
    ul.innerText = inputDish.value;
    
    
    
        
}
