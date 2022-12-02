function addDish(evt) {
    console.log("hello");
    inputDishEl.value;
    console.log(inputDishEl.value);
}
const ul = document.getElementById("dishes");
const inputDishEl = document.getElementById("userinput");
const addDishEl = document.querySelector("#adddish");
addDishEl.addEventListener("click", addDish)

document.getElementById("dishes").innerHTML += "<li>"





