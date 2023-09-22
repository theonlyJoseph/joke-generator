const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// Functions
const generateJoke = () => {
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

const generateJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => (jokeEl.innerHTML = data.value))
    .catch((error) => error.json());
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
};

// Event handelers
jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
