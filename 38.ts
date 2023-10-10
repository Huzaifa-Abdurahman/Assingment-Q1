function describe_city(city1:string,city2:string,country1:string,country2:string="palestine"){
    console.log(`${city1} ${country1}`);
    console.log(`${city2} ${country1}`);
    console.log(`${city1} ${country2}`);
}
describe_city("lahore","islamabad","pakistan");