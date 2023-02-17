import { DOM } from "./DOM";

fetch("https://rickandmortyapi.com/api/character").then((response) => {
  response.json().then((data) => {
    food = data.results;
    display(food);
  });
});

DOM.MainMenu.addEventListener("click", function () {
  display(food);
});
DOM.Georgian.addEventListener("click", function () {
  const filtered = food.filter((food) => food.status === "Alive");
  display(filtered);
});
DOM.Armenian.addEventListener("click", function () {
  const filtered = food.filter(
    (food) => food.status === "Dead" || food.status === "unknown"
  );
  display(filtered);
});
DOM.Khachapuri.addEventListener("click", function () {
  const filtered = food.filter((food) => food.gender === "Male");
  display(filtered);
});
DOM.food.addEventListener("click", function () {
  const filtered = food.filter((food) => food.gender === "Female");
  display(filtered);
});
DOM.sweet.addEventListener("click", function () {
  const filtered = food.filter((food) => food.gender === "unknown");
  display(filtered);
});

DOM.Warm.addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

function display(foods) {
  DOM.Menupage.innerHTML = "";
  foods.forEach((food) =>
    DOM.Menupage.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>${food.status}</h2>
        <img src="${food.image}" alt="image of ${food.name}">
    </div>
    `
    )
  );
}
