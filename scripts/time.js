function updatePokeMMOTime() {
let now = new Date();
let realHours = now.getHours() + now.getMinutes() / 60;
let pokeHours = (realHours * 24) / 6;
let pokeMinutes = (((now.getMinutes() * 24) / 6 )+7)%60;
let formattedHours = Math.floor(pokeHours) % 24;
let formattedMinutes = Math.floor(pokeMinutes).toString().padStart(2, '0');

let dayPhase = (formattedHours >= 4 && formattedHours < 21) ? '☀️Day' : '🌙Night';
document.getElementById("pokeTime").innerText = `${formattedHours}:${formattedMinutes} ${dayPhase}`;
}   
updatePokeMMOTime();
updateGameWeek();
setInterval(updatePokeMMOTime, 5000);
