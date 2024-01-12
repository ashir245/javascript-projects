function rollDice() {
  const numOfDice = document.getElementById("no").value;
  const diceresults = document.getElementById("idresults");
  const imgresults = document.getElementById("imgresults");
  const values = [];
  const Images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    console.log(value);

    values.push(value);
    Images.push(`<img src='images/${value}.png'>`);
  }
  diceresults.textContent = `dice:${values}`;
  imgresults.innerHTML = `${Images}`;
}
