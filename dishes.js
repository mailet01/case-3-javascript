function addDish(evt) {
    console.log("hello");
    const dish = inputDishEl.value;
    console.log(dish)
    if (dish.length > 0) {
        const li = document.createElement("li");
        li.textContent = dish;
        // skapa en ta bort knapp
        const button = document.createElement("button");
        button.textContent = "delete"


        button.addEventListener("click", addDish);

        button.addEventListener("click", (evt) => {
            evt.target.parentElement.remove();
        })


        ul.appendChild(li);
        inputDishEl.value = "";
        li.appendChild(button)
    } else {
        inputDishEl.setAttribute("placeholder", "you have to write a dish")
    }


}
const ul = document.getElementById("dishes");
const inputDishEl = document.getElementById("userinput");
const addDishEl = document.querySelector("#addDish");
addDishEl.addEventListener("click", addDish)







