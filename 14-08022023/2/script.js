const planetsList = document.getElementById("planets-list");
let planets = [];

function getPlanets() {
  const url = "https://swapi.dev/api/planets";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      planets = data.results;
      renderPlanets(planets);
    });
}

function renderPlanets(planets) {
  planetsList.innerHTML = "";
  planets.forEach(planet => {
    const card = document.createElement("div");
    card.classList.add("planet-card");

    const name = document.createElement("div");
    name.classList.add("planet-name");
    name.textContent = planet.name;

    const diameter = document.createElement("div");
    diameter.classList.add("planet-detail");
    diameter.textContent = `Diameter: ${planet.diameter}`;

    const population = document.createElement("div");
    population.classList.add("planet-detail");
    population.textContent = `Population: ${planet.population}`;

    card.appendChild(name);
    card.appendChild(diameter);
    card.appendChild(population);

    planetsList.appendChild(card);
  });
}

function sortByDiameter() {
  planets.sort((a, b) => {
    const aDiameter = parseInt(a.diameter) || 0;
    const bDiameter = parseInt(b.diameter) || 0;
    return aDiameter - bDiameter;
  });
  renderPlanets(planets);
}

function sortByPopulation() {
  planets.sort((a, b) => {
    const aPopulation = parseInt(a.population) || 0;
    const bPopulation = parseInt(b.population) || 0;
    return aPopulation - bPopulation;
  });
  renderPlanets(planets);
}

getPlanets();
