function updatePokeMMOTime() {
let now = new Date();
let realHours = now.getHours() + now.getMinutes() / 60;
let pokeHours = ((realHours * 24) / 6);
let pokeMinutes = (((now.getMinutes() * 24) / 6 )+7)%60;
let formattedHours = Math.floor(pokeHours) % 24;
let formattedMinutes = Math.floor(pokeMinutes).toString().padStart(2, '0');

let dayPhase = (formattedHours >= 4 && formattedHours < 21) ? '☀️Day' : '🌙Night';
document.getElementById("pokeTime").innerText = `${formattedHours}:${formattedMinutes} ${dayPhase}`;
}   
function updateGameWeek() {
    let realDaysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24)); // Real-world days since 1970
    let pokeDaysSinceEpoch = Math.floor(realDaysSinceEpoch * 4); // 1 real day = 4 PokéMMO days
    let pokeDayIndex = pokeDaysSinceEpoch % 7; // Loop within a 7-day week

    let pokeWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentPokeDay = pokeWeekDays[pokeDayIndex];

    document.getElementById("pokeDay").innerText = `📅 In-game Day: ${currentPokeDay}`;
}

updatePokeMMOTime();
updateGameWeek();
setInterval(updatePokeMMOTime, 5000);
setInterval(updateGameWeek, 5000);
