const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

// Functions

const generateJoke = async () => {
  try {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
    if(!response.ok) {
      throw new Error(response.message);
    }
  const data = response.json();
  jokeEl.innerHTML = data.value;
    
  } catch (error) {
    console.log(error)
    jokeEl.innerHtml = `Something isn't right!`;
  };
};

jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
};

// Event handelers
jokeBtn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
