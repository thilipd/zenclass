const req = new XMLHttpRequest();

req.open("GET", 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json');

req.send();

req.onload = function () {
    let data = JSON.parse(req.response);


    console.log(data);

    // Question 1.
    let asianCounty = data.filter(val => val.region === "Asia").map(val => val.name);
    console.log(asianCounty);

    // Question b.
    let countyPopulationLessthan2 = data.filter(val => val.population < 200000);
    console.log(countyPopulationLessthan2);


    //Question c.
    data.forEach(val => {
        console.log(`name: ${val.name}
                     capital:${val.capital}
                     flag:${val.flag}`)

    });

    //Question d.
    let totalPopulation = data.map(val => val.population).reduce((a, b) => a + b);
    console.log(totalPopulation);

    //Question e.
    let countyHasUSD = data.filter(val => (val.currencies[0].code === 'USD')
    ).map(val => val.name);
    console.log(countyHasUSD);
}