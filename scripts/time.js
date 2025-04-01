function updatePokeMMOTime() {
let now = new Date();
let realHours = now.getHours() + now.getMinutes() / 60;
let pokeHours = ((realHours * 24) / 6);
let pokeMinutes = (((now.getMinutes() * 24) / 6 )+7)%60;
let formattedHours = Math.floor(pokeHours) % 24;
let formattedMinutes = Math.floor(pokeMinutes).toString().padStart(2, '0');

let dayPhase = (formattedHours >= 4 && formattedHours < 21) ? '☀️Day' : '🌙Night';
document.getElementById("pokeTime").innerText = `${formattedHours}:${formattedMinutes} ${dayPhase}`;
updateGameWeek();
}   
function updateGameWeek() {
    let now = new Date();
    
    // Get real-world timestamp in hours since epoch
    let realHoursSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60));
    
    // Calculate in-game day index (each in-game day is 6 real hours)
    let pokeDayIndex = (Math.floor(realHoursSinceEpoch / 6)-1) % 7;
    
    let pokeWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let currentPokeDay = pokeWeekDays[pokeDayIndex];

    document.getElementById("pokeDay").innerText = `📅 In-game Day: ${currentPokeDay}`;
}
function getSeason() {
    const seasons = [
        "Spring",  // January
        "Summer",  // February
        "Autumn",  // March
        "Winter",  // April
        "Spring",  // May
        "Summer",  // June
        "Autumn",  // July
        "Winter",  // August
        "Spring",  // September
        "Summer",  // October
        "Autumn",  // November
        "Winter"   // December
    ];
    
    const currentMonth = new Date().getMonth(); // 0 = January, 11 = December
    document.getElementById("season").textContent = "The current season is: " + seasons[currentMonth];
}

updatePokeMMOTime();
updateGameWeek();
setInterval(updatePokeMMOTime, 1000);
setInterval(updateGameWeek, 5000);
window.onload = getSeason;
