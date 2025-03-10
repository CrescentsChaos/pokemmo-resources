let pokemonData = [];
let currentPokemon = null;

// Define rarity spawn chances (higher value = more frequent)
const rarityWeights = {
    "Common": 50,        
    "Uncommon": 30,      
    "Rare": 12,          
    "Very Rare": 5,      
    "Common Legendary": 2, 
    "Legendary": 1,      
    "Mythical": 0.5      
};

// Fetch Pokémon data from JSON file
async function loadPokemonData() {
    try {
        let response = await fetch('../../data/pokemondata.json'); // Ensure this file is in the same directory
        pokemonData = await response.json();
        selectRandomPokemon();
    } catch (error) {
        console.error("Error loading Pokémon data:", error);
    }
}

// Select a Pokémon based on rarity
function selectRandomPokemon() {
    document.getElementById("pokemonInput").value = "";
    if (pokemonData.length === 0) return;

    let weightedList = [];

    // Build a weighted list based on rarity
    pokemonData.forEach(pokemon => {
        let rarity = pokemon.Rarity || "Common"; // Default to Common if missing
        let weight = rarityWeights[rarity] || 1; // Default to 1 if unknown rarity

        for (let i = 0; i < weight; i++) {
            weightedList.push(pokemon);
        }
    });

    // Pick a random Pokémon from the weighted list
    currentPokemon = weightedList[Math.floor(Math.random() * weightedList.length)];

    // Display the Pokémon data
    document.getElementById("pokemonSprite").src = currentPokemon.sprite;
    document.getElementById("pokemonRegion").innerText = ` ${currentPokemon.region}`;
    document.getElementById("pokemonName").innerText = `Name: ???`; // Hide the name until caught
    document.getElementById("message").innerText = ""; // Clear message
    document.getElementById("pokemonInput").value = ""; // Clear input field
}

// Check if the user typed the correct name
function catchPokemon() {
    let userInput = document.getElementById("pokemonInput").value.trim();
    if (!currentPokemon) return;

    if (userInput.toLowerCase() === currentPokemon.Name.toLowerCase()) {
        document.getElementById("pokemonInput").value = "";
        document.getElementById("message").innerText = "🎉 You caught a " + currentPokemon.Name + "!";
        document.getElementById("message").style.color = "green";
        document.getElementById("pokemonName").innerText = `Name: ${currentPokemon.Name}`;
        reloadPokemon();
    } else {
        document.getElementById("pokemonInput").value = "";
        document.getElementById("message").innerText = `❌ ${currentPokemon.Name} fled!`;
        document.getElementById("message").style.color = "red";
        reloadPokemon();
    }
}

// Reloads a new Pokémon
function reloadPokemon() {
    selectRandomPokemon();
}

// Load Pokémon data when page loads
window.onload = loadPokemonData;
