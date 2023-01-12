const response = await fetch("https://rickandmortyapi.com/api/character")
const data = await response.json()
const food = data.results

import {DOM} from "./DOM";

display(food)

DOM.MainMenu.addEventListener("click", function(){
    display(food)
})
DOM.Georgian.addEventListener("click", function(){
    food.filter((food) => food.nationality.includes("georgian"))
    display(food)
})
DOM.Armenian.addEventListener("click", function(){
    food.filter((food) => food.nationality.includes("armenian"))
    display(food)
})
DOM.Khachapuri.addEventListener("click", function(){
    food.filter((food) => food.type.includes("khachapuri"))
    display(food)
})
DOM.food.addEventListener("click", function(){
    food.filter((food) => food.group.includes("food"))
    display(food)
})
DOM.sweet.addEventListener("click", function(){
    food.filter((food) => food.group.includes("sweet"))
    display(food)
})
DOM.drink.addEventListener("click", function(){
    food.filter((food) => food.group.includes("drink"))
    display(food)
})

DOM.Warm.addEventListener("click", function(){
    if (document.body.classList.contains("cool")){
        document.body.classList.add("warm")
        document.body.classList.remove("cool")
    } else {
        document.body.classList.add("cool")
        document.body.classList.remove("warm")
    }
})

function display(food) {
    DOM.Menupage.innerHTML = "";
    food.forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>${food.status}</h2>
        <img src="${food.image}">
    </div>
    `))
}