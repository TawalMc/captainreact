const fetch = require("node-fetch");
const PUBLIC_KEY = "989770671456079"; //process.env.PUBLIC_KEY;

class Hero {
    constructor(photoUrl, heroName, realName, aliaseName, birthPlace, alterEgo, height, weight, publisher) {
        this.photoUrl = photoUrl;
        this.heroName = heroName;
        this.realName = realName;
        this.aliaseName = aliaseName;
        this.birthPlace = birthPlace;
        this.alterEgo = alterEgo;
        this.height = height;
        this.weight = weight;
        this.publisher = publisher;
    }
}

// Parse Hero class data
function treatData(heroInfos) {
    var hero = new Hero(heroInfos.image.url,
        heroInfos.name,
        heroInfos.biography["full-name"],
        heroInfos.biography.aliases[0],
        heroInfos.biography["place-of-birth"],
        heroInfos.biography["alter-egos"],
        heroInfos.appearance.height[1],
        heroInfos.appearance.weight[1],
        heroInfos.biography.publisher
    );
   return hero;
}


// SuperHero API using

// If user input is string
function fetchHeroesByName(heroName, result) {
    fetch(`https://superheroapi.com/api/${PUBLIC_KEY}/search/${heroName}`)
        .then(response => response.json())
        .then(data => {
            
            if(data.response === "success") {
                
                var heroes = data.results;
                var arrayHero = new Array();

                arrayHero = heroes.map(treatData);

                result.send({
                    value: arrayHero,
                    status: true
                });
            
            } else {
                result.send({
                    value: data.error.toUpperCase(),
                    status: false
                });
            }

        })
        .catch(error => {
            result.send({
                value: "Error when calling API",
                status: false
            });
        })
}

// If user input is number
function fetchHeroesById(heroID, result) {

    fetch(`https://superheroapi.com/api/${PUBLIC_KEY}/${heroID}`)
        .then(response => response.json())
        .then(data => {

            if (data.response === "success") {

                var hero = treatData(data);
                var arrayHero = new Array();

                arrayHero.push(hero);

                result.send({
                    value: arrayHero,
                    status: true
                });

            } else {
                result.send({
                    value: data.error.toUpperCase(),
                    status: false
                });
            }
        })
        .catch(error => {
            result.send({
                value: "Error when calling API",
                status: false
            });
        })
}

function retrieveData(userInput, result) {
    var value = Number(userInput);

    if( value > 0) {
        fetchHeroesById(userInput, result);

    } else {
        fetchHeroesByName(userInput, result);
    }
}


module.exports = retrieveData;