// Dom elements
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// functions
const generateJoke = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    if (!response.ok) {
      throw new Error(response.message);
    }
    const data = await response.json();
    jokeEl.innerHTML = data.value;
  } catch (error) {
    console.log(error);
    jokeEl.innerHTML = `Something went wrong!`;
  }
};

// App initiator
function init() {
  jokeBtn.addEventListener("click", generateJoke);
  document.addEventListener("DOMContentLoaded", generateJoke);
}

init();

