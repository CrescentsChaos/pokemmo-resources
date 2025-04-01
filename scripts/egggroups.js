<<<<<<< HEAD
// Predefined egg groups (adjust if needed)
const eggGroups = [
    "Monster", "Water A", "Bug", "Flying", "Field", "Fairy",
    "Plant", "Humanoid", "Water B", "Mineral", "Chaos",
    "Water C", "Ditto", "Dragon", "Genderless","Cannot Breed"
];

async function fetchPokemonData() {
    try {
        const response = await fetch("../../data/pokemondata.json"); // Load your JSON file
        return await response.json();
    } catch (error) {
        console.error("Error loading Pokémon data:", error);
        return [];
    }
}

function showSuggestions(input, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const query = input.value.toLowerCase().trim();
    dropdown.innerHTML = ""; // Clear previous suggestions

    // Hide other dropdowns when focusing on a new input
    document.querySelectorAll(".dropdown").forEach(d => {
        if (d.id !== dropdownId) d.style.display = "none";
    });

    if (!query) {
        dropdown.style.display = "none";
        return;
    }

    // Filter egg groups that match input
    const matches = eggGroups.filter(group => group.toLowerCase().includes(query));

    if (matches.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    // Show suggestions
    matches.forEach(group => {
        const div = document.createElement("div");
        div.textContent = group;
        div.onclick = () => {
            input.value = group; // Set input value
            dropdown.style.display = "none"; // Hide dropdown
        };
        dropdown.appendChild(div);
    });

    dropdown.style.display = "block";
}

// Hide dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.matches("input")) {
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    }
});

async function searchPokemon() {
    const eggGroup1 = document.getElementById("eggGroup1").value.trim();
    const eggGroup2 = document.getElementById("eggGroup2").value.trim();
    const resultsDiv = document.getElementById("results");

    const data = await fetchPokemonData();

    // Define the regions you're interested in
    const validRegions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova"];

    const filteredPokemon = data.filter(pokemon => {
        // Filter Pokémon by region (Kanto, Johto, Hoenn, Sinnoh, Unova)
        const validRegion = validRegions.includes(pokemon.region);

        // Split egg groups from JSON and trim spaces
        const groups = pokemon.Egg.split(',').map(g => g.trim().toLowerCase());

        const matchesEggGroups = 
            (eggGroup1 && eggGroup2) 
                ? groups.includes(eggGroup1.toLowerCase()) && groups.includes(eggGroup2.toLowerCase()) 
                : (eggGroup1 ? groups.includes(eggGroup1.toLowerCase()) : (eggGroup2 ? groups.includes(eggGroup2.toLowerCase()) : true));

        return validRegion && matchesEggGroups;
    });

    // Sort results by name in ascending order
    filteredPokemon.sort((a, b) => a.Name.localeCompare(b.Name));

    resultsDiv.innerHTML = filteredPokemon.length
        ? filteredPokemon.map(p => `
            <div class="pokemon-result">
                <figure id="${p.Name}">
                <img src="${p.sprite.replace('ani/', 'gen5ani/')}" alt="${p.Name}" class="pokemon-sprite">
                <figcaption>${p.Name}</figcaption>
                </figure>
            </div>
        `).join("")
        : "<p>No Pokémon found</p>";
}

=======
// Predefined egg groups (adjust if needed)
const eggGroups = [
    "Monster", "Water A", "Bug", "Flying", "Field", "Fairy",
    "Plant", "Humanoid", "Water B", "Mineral", "Chaos",
    "Water C", "Ditto", "Dragon", "Genderless","Cannot Breed"
];

async function fetchPokemonData() {
    try {
        const response = await fetch("../../data/pokemondata.json"); // Load your JSON file
        return await response.json();
    } catch (error) {
        console.error("Error loading Pokémon data:", error);
        return [];
    }
}

function showSuggestions(input, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const query = input.value.toLowerCase().trim();
    dropdown.innerHTML = ""; // Clear previous suggestions

    // Hide other dropdowns when focusing on a new input
    document.querySelectorAll(".dropdown").forEach(d => {
        if (d.id !== dropdownId) d.style.display = "none";
    });

    if (!query) {
        dropdown.style.display = "none";
        return;
    }

    // Filter egg groups that match input
    const matches = eggGroups.filter(group => group.toLowerCase().includes(query));

    if (matches.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    // Show suggestions
    matches.forEach(group => {
        const div = document.createElement("div");
        div.textContent = group;
        div.onclick = () => {
            input.value = group; // Set input value
            dropdown.style.display = "none"; // Hide dropdown
        };
        dropdown.appendChild(div);
    });

    dropdown.style.display = "block";
}

// Hide dropdown when clicking outside
document.addEventListener("click", (event) => {
    if (!event.target.matches("input")) {
        document.querySelectorAll(".dropdown").forEach(d => d.style.display = "none");
    }
});

async function searchPokemon() {
    const eggGroup1 = document.getElementById("eggGroup1").value.trim();
    const eggGroup2 = document.getElementById("eggGroup2").value.trim();
    const resultsDiv = document.getElementById("results");

    const data = await fetchPokemonData();

    // Define the regions you're interested in
    const validRegions = ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova"];

    const filteredPokemon = data.filter(pokemon => {
        // Filter Pokémon by region (Kanto, Johto, Hoenn, Sinnoh, Unova)
        const validRegion = validRegions.includes(pokemon.region);

        // Split egg groups from JSON and trim spaces
        const groups = pokemon.Egg.split(',').map(g => g.trim().toLowerCase());

        const matchesEggGroups = 
            (eggGroup1 && eggGroup2) 
                ? groups.includes(eggGroup1.toLowerCase()) && groups.includes(eggGroup2.toLowerCase()) 
                : (eggGroup1 ? groups.includes(eggGroup1.toLowerCase()) : (eggGroup2 ? groups.includes(eggGroup2.toLowerCase()) : true));

        return validRegion && matchesEggGroups;
    });

    // Sort results by name in ascending order
    filteredPokemon.sort((a, b) => a.Name.localeCompare(b.Name));

    resultsDiv.innerHTML = filteredPokemon.length
        ? filteredPokemon.map(p => `
            <div class="pokemon-result">
                <figure id="${p.Name}">
                <img src="${p.sprite.replace('ani/', 'gen5ani/')}" alt="${p.Name}" class="pokemon-sprite">
                <figcaption>${p.Name}</figcaption>
                </figure>
            </div>
        `).join("")
        : "<p>No Pokémon found</p>";
}

>>>>>>> e32b61f59e6986ce32ca71b3c2f2bcb2f5807b50
