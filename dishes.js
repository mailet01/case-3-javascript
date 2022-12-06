// skapa en funktion för att lägga till en maträtt
function addDish(evt) {
    
    // skapa en variabel för att kunna skriva en maträtt
    const dish = inputDishEl.value;
    console.log(dish)
// skapa ett vilkor som kontrollerar om användaren har skrivit en maträtt eller inte
    if (dish.length > 0) {
        const li = document.createElement("li");
        li.textContent = dish;
        // skapa en ta bort knapp
        // skapa en variabel för att lägga till en ta bort knapp
        const button = document.createElement("button");
        button.textContent = "delete"
        button.addEventListener("click", addDish);

        button.addEventListener("click", (evt) => {
            evt.target.parentElement.remove();
            const button1 = document.createElement("button");
            button1.textContent = "favorite"
            button1.addEventListener("click", (evt) => {
                evt.target.parentElement.favorite();

            })
        })

       

        // gör så att li elementet visas när man lägger till en maträtt
        ul.appendChild(li);
        // gör så att textfältet för maträtten töms efter hen har lagt till en rätt
        inputDishEl.value = "";
        li.appendChild(button)
    } else {
        // sätter en placeholder som talar om att man måste lägga till en rätt för att programmet ska köras
        inputDishEl.setAttribute("placeholder", "you have to write a dish")
    }


}
            
// skapat en variabel för ulelementet i HTMLfilen och pekar på ett id
const ul = document.getElementById("dishes");
// skapar en variabel för inputfältet o
const inputDishEl = document.getElementById("userinput");
// skapar en variabel till knappen för att lägga till en rätt
const addDishEl = document.querySelector("#addDish");
// gör så att maträtten läggs till när man trycker på knappen "add dish"
addDishEl.addEventListener("click", addDish)







