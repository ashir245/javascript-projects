const btn = document.getElementById("btn");
const joke = document.getElementById("joke");
btn.addEventListener("click", getJoke);
const ApiKey = "M7/JFPXW5hV2BW2jXwKUZA==hYFjN1HLGkGV15tn";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": ApiKey,
  },
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    joke.innerText = "fetching ...";
    btn.disabled = true;
    btn.innerText = "loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    btn.disabled = false;
    btn.innerText = "TELL ME A JOKE";
    joke.innerText = data[0].joke;
  } catch (error) {
    console.log(error);
    joke.innerText = "an error  ocured try again ";
    btn.disabled = false;
    btn.innerText = "TELL ME A JOKE";
  }
}
