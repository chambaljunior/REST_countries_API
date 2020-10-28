//Variables Global
let countries; //will contain fetched data
const countriesList = document.getElementById("countries");

//Event listener
countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}



fetch("https://restcountries.eu/rest/v2/all")
  .then(res => res.json())
  .then(data => initialize(data))
  .catch(err => console.log("Error:", err))

function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name}</option>`);

  countriesList.innerHTML = options;
  countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);


  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString('en-US');
  document.getElementById("area").innerHTML = countryData.area;
  document.getElementById("time-zones").innerHTML = countryData.timezones;
  document.getElementById("native-name").innerHTML = countryData.nativeName;
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("subregion").innerHTML = countryData.subregion;
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${counryData.name}`;
}