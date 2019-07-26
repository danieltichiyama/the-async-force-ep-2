const contentContainer = document.getElementById("contentContainer");
const resourceType = document.getElementById("resourceType");
const resourceId = document.getElementById("resourceId");

const requestResourceButton = document.getElementById("requestResourceButton");

const people = "https://swapi.co/api/people/";
const planets = "https://swapi.co/api/planets/";
const starships = "https://swapi.co/api/starships/";

function oReqPeopleListener() {
  if (this.status !== 200) {
    return alert(this.status + " ERROR: Index not found. ");
  }
  let obj = JSON.parse(this.responseText);

  let name = document.createElement("h2");
  name.className = "name";
  name.innerHTML = obj.name;
  contentContainer.appendChild(name);

  let gender = document.createElement("p");
  gender.className = "gender";
  gender.innerHTML = "Gender: " + obj.gender;
  contentContainer.appendChild(gender);

  let oReq = new XMLHttpRequest();

  function oReqSpeciesListener() {
    let obj = JSON.parse(this.responseText);
    let species = document.createElement("p");
    species.className = "species";
    species.innerHTML = "Species: " + obj.name;
    contentContainer.appendChild(species);
  }

  oReq.addEventListener("load", oReqSpeciesListener);
  oReq.open("GET", obj.species[0]);
  oReq.send();
}

function oReqPlanetsListener() {
  if (this.status !== 200) {
    return alert(this.status + " ERROR: Index not found. ");
  }
  let obj = JSON.parse(this.responseText);

  let name = document.createElement("h2");
  name.className = "name";
  name.innerHTML = obj.name;
  contentContainer.appendChild(name);

  let terrain = document.createElement("p");
  terrain.className = "terrain";
  terrain.innerHTML = "Terrain: " + obj.terrain;
  contentContainer.appendChild(terrain);

  let population = document.createElement("p");
  population.className = "terrain";
  population.innerHTML = "Population: " + obj.population;
  contentContainer.appendChild(population);

  let movies = document.createElement("h3");
  movies.className = "movies";
  movies.innerHTML = "Appears In";
  contentContainer.appendChild(movies);

  let filmList = document.createElement("ul");
  filmList.className = "filmList";

  let films = obj.films;
  for (i = 0; i < films.length; i++) {
    let oReq = new XMLHttpRequest();

    function oReqFilmsListener() {
      let obj = JSON.parse(this.responseText);
      let filmTitle = document.createElement("li");
      filmTitle.className = "filmTitle";
      filmTitle.innerHTML = obj.title;
      filmList.appendChild(filmTitle);
    }

    oReq.addEventListener("load", oReqFilmsListener);
    oReq.open("GET", films[i]);
    oReq.send();
  }
  contentContainer.appendChild(filmList);
}

function oReqStarshipsListener() {
  if (this.status !== 200) {
    return alert(this.status + " ERROR: Index not found. ");
  }
  let obj = JSON.parse(this.responseText);

  let name = document.createElement("h2");
  name.className = "name";
  name.innerHTML = obj.name;
  contentContainer.appendChild(name);

  let manufacturer = document.createElement("p");
  manufacturer.className = "manufacturer";
  manufacturer.innerHTML = "Manufacturer: " + obj.manufacturer;
  contentContainer.appendChild(manufacturer);

  let starshipClass = document.createElement("p");
  starshipClass.className = "starshipClass";
  starshipClass.innerHTML = "Starship Class: " + obj.starship_class;
  contentContainer.appendChild(starshipClass);

  let movies = document.createElement("h3");
  movies.className = "movies";
  movies.innerHTML = "Appears In";
  contentContainer.appendChild(movies);

  let filmList = document.createElement("ul");
  filmList.className = "filmList";

  let films = obj.films;
  for (i = 0; i < films.length; i++) {
    let oReq = new XMLHttpRequest();

    function oReqFilmsListener() {
      let obj = JSON.parse(this.responseText);
      let filmTitle = document.createElement("li");
      filmTitle.className = "filmTitle";
      filmTitle.innerHTML = obj.title;
      filmList.appendChild(filmTitle);
    }

    oReq.addEventListener("load", oReqFilmsListener);
    oReq.open("GET", films[i]);
    oReq.send();
  }
  contentContainer.appendChild(filmList);
}

function callAPI() {
  oReq = new XMLHttpRequest();
  if (typeof parseInt(resourceId.value) !== "number") {
    return alert("ERROR: value must be a number.");
  }
  contentContainer.innerHTML = "";
  if (resourceType.value === "people") {
    oReq.addEventListener("load", oReqPeopleListener);

    oReq.open("GET", people + resourceId.value);
    oReq.send();
  }
  if (resourceType.value === "planets") {
    oReq.addEventListener("load", oReqPlanetsListener);

    oReq.open("GET", planets + resourceId.value);
    oReq.send();
  }
  if (resourceType.value === "starships") {
    oReq.addEventListener("load", oReqStarshipsListener);

    oReq.open("GET", starships + resourceId.value);
    oReq.send();
  }
}

requestResourceButton.addEventListener("click", callAPI);
