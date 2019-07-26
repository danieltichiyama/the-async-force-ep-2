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
  console.log(obj);
}

function oReqPlanetsListener() {
  if (this.status !== 200) {
    return alert(this.status + " ERROR: Index not found. ");
  }
  let obj = JSON.parse(this.responseText);
  console.log(obj);
}

function oReqStarshipsListener() {
  if (this.status !== 200) {
    return alert(this.status + " ERROR: Index not found. ");
  }
  let obj = JSON.parse(this.responseText);
  console.log(obj);
}

function transferFailed() {
  console.log("failed request");
}

function callAPI() {
  oReq = new XMLHttpRequest();
  if (typeof resourceId.value !== "number") {
    return alert("ERROR: value must be a number.");
  }
  if (resourceType.value === "people") {
    console.log(resourceType.value);

    oReq.addEventListener("load", oReqPeopleListener);

    oReq.open("GET", people + resourceId.value);
    oReq.send();
  }
  if (resourceType.value === "planets") {
    console.log(resourceType.value);

    oReq.addEventListener("load", oReqPlanetsListener);

    oReq.open("GET", planets + resourceId.value);
    oReq.send();
  }
  if (resourceType.value === "starships") {
    console.log(resourceType.value);

    oReq.addEventListener("load", oReqStarshipsListener);

    oReq.open("GET", starships + resourceId.value);
    oReq.send();
  }
}

requestResourceButton.addEventListener("click", callAPI);
