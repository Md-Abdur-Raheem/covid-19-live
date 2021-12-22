function addInfo() {
    const getCountry = document.getElementById('country-name');
    const countryName = getCountry.value;
    getCountry.value = '';
    fetch(`https://api.covid19api.com/total/country/${countryName}`)
        .then(response => response.json())
        .then(data => displayData(data))
}

function displayData(country) {
    // console.log(country[0]);
    // console.log(country.reverse()[0].Confirmed);
    const infoContainer = document.getElementById('info-section');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class = "text-center text-white p-4">${country.reverse()[0].Country}</h1>
    <h4 class = "text-center text-white ">Total Cases : <span class = "text-danger">${country[0].Confirmed}</span></h4>
    <h4 class = "text-center text-white ">Total Deaths : <span class = "text-danger">${country[0].Deaths}</span></h4>
    <h4 class = "text-center text-white ">Recovered : <span class = "text-success">${country[0].Confirmed - country[0].Deaths}</span></h4>
    `;
    infoContainer.appendChild(div);
}