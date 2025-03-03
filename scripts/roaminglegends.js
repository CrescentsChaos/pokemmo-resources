const legendaryCycle = [
    { names: ["Moltres", "Suicune"], images: ["http://play.pokemonshowdown.com/sprites/gen5ani/moltres.gif", "http://play.pokemonshowdown.com/sprites/gen5ani/suicune.gif"] },
    { names: ["Articuno", "Raikou"], images: ["http://play.pokemonshowdown.com/sprites/gen5ani/articuno.gif", "http://play.pokemonshowdown.com/sprites/gen5ani/raikou.gif"] },
    { names: ["Zapdos", "Entei"], images: ["http://play.pokemonshowdown.com/sprites/gen5ani/zapdos.gif", "http://play.pokemonshowdown.com/sprites/gen5ani/entei.gif"] }
];
const currentMonth = new Date().getMonth() + 1; 
const cycleIndex = (currentMonth - 2) % 3;
const legendaryPair = legendaryCycle[(cycleIndex + 3) % 3]; 
document.getElementById("legendary1").src = legendaryPair.images[0];
document.getElementById("legendary1").alt = legendaryPair.names[0];
document.getElementById("legendary1-name").textContent = legendaryPair.names[0];
document.getElementById("legendary2").src = legendaryPair.images[1];
document.getElementById("legendary2").alt = legendaryPair.names[1];
document.getElementById("legendary2-name").textContent = legendaryPair.names[1];