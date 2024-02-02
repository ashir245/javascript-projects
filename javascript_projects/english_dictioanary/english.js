const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpWord = document.getElementById("inp-word").value;

  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let noun = "",
        verb = "",
        adjective = "";

      // Iterate through the meanings array and assign the part of speech to the appropriate variable
      data[0].meanings.forEach((meaning) => {
        if (meaning.partOfSpeech === "noun" && !noun) {
          noun = meaning.partOfSpeech;
        } else if (meaning.partOfSpeech === "verb" && !verb) {
          verb = meaning.partOfSpeech;
        } else if (meaning.partOfSpeech === "adjective" && !adjective) {
          adjective = meaning.partOfSpeech;
        }
      });

      result.innerHTML = `
        <div class="word">
          <h3>${inpWord}</h3>
          <button onclick="playSound()">
            <i class="fas fa-volume-up" aria-hidden="true"></i>
          </button>
        </div>
        <div class="details">
          <p>${noun}</p>
          <p>${verb}</p>
          <p>${adjective}</p>
          <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
         <strong> Noun:</strong> ${
           data[0].meanings[0].definitions[0].example || ""
         }<br>
         <strong> Verb:</strong>  ${
           data[0].meanings[1].definitions[0].example || ""
         }
        </p>`;

      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
});

function playSound() {
  sound.play();
}
