const res = await fetch("https://rickandmortyapi.com/api/character");
const data = await res.json()
console.log(data)