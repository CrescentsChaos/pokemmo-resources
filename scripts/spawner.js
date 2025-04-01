<<<<<<< HEAD
let pokemonData = [];
let currentPokemon = null;
let roundCount = 0;
let totalRounds = 10;
let correctAnswers = 0;
let incorrectAnswers = 0;

const rarityWeights = {
    "Common": 1,
    "Uncommon": 1,
    "Rare": 1,
    "Very Rare": 1,
    "Common Legendary": 1,
    "Legendary": 1,
    "Mythical": 1,
    "Unobtainable": 1
};

async function loadPokemonData() {
    try {
        let response = await fetch('../../data/pokemondata.json');
        pokemonData = await response.json();
        startNewRound();
    } catch (error) {
        console.error("Error loading Pokémon data:", error);
    }
}

function selectRandomPokemon() {
    document.getElementById("pokemonInput").value = "";
    if (pokemonData.length === 0) return;

    let weightedList = [];
    pokemonData.forEach(pokemon => {
        let rarity = pokemon.Rarity || "Common";
        let weight = rarityWeights[rarity] || 1;
        for (let i = 0; i < weight; i++) {
            weightedList.push(pokemon);
        }
    });

    currentPokemon = weightedList[Math.floor(Math.random() * weightedList.length)];

    document.getElementById("pokemonSprite").src = currentPokemon.sprite;
    document.getElementById("pokemonRegion").innerText = ` ${currentPokemon.region}`;
    document.getElementById("message").innerText = "";
    document.getElementById("pokemonInput").value = "";
}

function catchPokemon() {
    let userInput = document.getElementById("pokemonInput").value.trim();
    if (!currentPokemon) return;

    if (userInput.toLowerCase() === currentPokemon.Name.toLowerCase()) {
        correctAnswers++;
        document.getElementById("message").innerText = "🎉 You caught a " + currentPokemon.Name + "!";
        document.getElementById("message").style.color = "green";
    } else {
        incorrectAnswers++;
        document.getElementById("message").innerText = `❌ ${currentPokemon.Name} fled!`;
        document.getElementById("message").style.color = "red";
    }

    nextRound();
}

function skipPokemon() {
    incorrectAnswers++;
    document.getElementById("message").innerText = `⏭️ You skipped ${currentPokemon.Name}.`;
    document.getElementById("message").style.color = "orange";
    nextRound();
}

function nextRound() {
    roundCount++;
    if (roundCount < totalRounds) {
        setTimeout(selectRandomPokemon, 1000);
    } else {
        setTimeout(displayResults, 1000);
    }
}

function startNewRound() {
    roundCount = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    selectRandomPokemon();
}

function displayResults() {
    let canvas = document.getElementById("resultsChart");
    let ctx = canvas.getContext("2d");
    canvas.style.display = "block";
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                label: 'Results',
                data: [correctAnswers, incorrectAnswers],
                backgroundColor: ['green', 'red']
            }]
        }
    });
}

window.onload = loadPokemonData;
=======
let pokemonData = [];
let currentPokemon = null;
let roundCount = 0;
let totalRounds = 10;
let correctAnswers = 0;
let incorrectAnswers = 0;

const rarityWeights = {
    "Common": 1,
    "Uncommon": 1,
    "Rare": 1,
    "Very Rare": 1,
    "Common Legendary": 1,
    "Legendary": 1,
    "Mythical": 1,
    "Unobtainable": 1
};

async function loadPokemonData() {
    try {
        let response = await fetch('../../data/pokemondata.json');
        pokemonData = await response.json();
        startNewRound();
    } catch (error) {
        console.error("Error loading Pokémon data:", error);
    }
}

function selectRandomPokemon() {
    document.getElementById("pokemonInput").value = "";
    if (pokemonData.length === 0) return;

    let weightedList = [];
    pokemonData.forEach(pokemon => {
        let rarity = pokemon.Rarity || "Common";
        let weight = rarityWeights[rarity] || 1;
        for (let i = 0; i < weight; i++) {
            weightedList.push(pokemon);
        }
    });

    currentPokemon = weightedList[Math.floor(Math.random() * weightedList.length)];

    document.getElementById("pokemonSprite").src = currentPokemon.sprite;
    document.getElementById("pokemonRegion").innerText = ` ${currentPokemon.region}`;
    document.getElementById("message").innerText = "";
    document.getElementById("pokemonInput").value = "";
}

function catchPokemon() {
    let userInput = document.getElementById("pokemonInput").value.trim();
    if (!currentPokemon) return;

    if (userInput.toLowerCase() === currentPokemon.Name.toLowerCase()) {
        correctAnswers++;
        document.getElementById("message").innerText = "🎉 You caught a " + currentPokemon.Name + "!";
        document.getElementById("message").style.color = "green";
    } else {
        incorrectAnswers++;
        document.getElementById("message").innerText = `❌ ${currentPokemon.Name} fled!`;
        document.getElementById("message").style.color = "red";
    }

    nextRound();
}

function skipPokemon() {
    incorrectAnswers++;
    document.getElementById("message").innerText = `⏭️ You skipped ${currentPokemon.Name}.`;
    document.getElementById("message").style.color = "orange";
    nextRound();
}

function nextRound() {
    roundCount++;
    if (roundCount < totalRounds) {
        setTimeout(selectRandomPokemon, 1000);
    } else {
        setTimeout(displayResults, 1000);
    }
}

function startNewRound() {
    roundCount = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    selectRandomPokemon();
}

function displayResults() {
    let canvas = document.getElementById("resultsChart");
    let ctx = canvas.getContext("2d");
    canvas.style.display = "block";
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                label: 'Results',
                data: [correctAnswers, incorrectAnswers],
                backgroundColor: ['green', 'red']
            }]
        }
    });
}

window.onload = loadPokemonData;
>>>>>>> e32b61f59e6986ce32ca71b3c2f2bcb2f5807b50
