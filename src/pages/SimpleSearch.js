import React, { useState} from 'react';
import { Grid, makeStyles, TextField, Button, Typography } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import "../css/SimpleSearch.css";
import NavBar from "../components/NavBar";
import {HeroSections, DataNotAvailable} from "../components/HeroSections";
import PUBLIC_KEY from "../API_KEYS/API_KEY";


const useStyles = makeStyles((theme) => ({
    searchContainer: {
        marginTop: theme.spacing(2),
    },
    typHelp: {
        marginBottom: theme.spacing(2),
    },
    heroContainer: {
        backgroundColor: "yellow",
    },
    subHeroContainer: {
        backgroundColor: "green",
    }
}));



function SimpleSearch() {
    // state and hook
    const ownStyle = useStyles();
    //var heroFound = new Hero();
    
    const [userInput, setUserInput] = useState("655"); // to store user input and search heroes 
    const [isAvailable, setIsAvailable] = useState(false); // to store some informations about heroes searched
    const [heroFound, setHeroFound] = useState(null);
    // const [render, setRender] = useState(false);

    /* useEffect(() => {
        search();
    }); */

    // SuperHero API using
    function fetchHeroesByName(heroName) {
        fetch(`https://superheroapi.com/api/${PUBLIC_KEY}/search/${heroName}`)
            .then(response => response.json())
            .then(data => {
             
            })
            .catch(error => {
                alert(error);
            })
    }

    function fetchHeroesById(heroID) {
        fetch(`https://captainreact.herokuapp.com/https://superheroapi.com/api/${PUBLIC_KEY}/${heroID}`)
            .then(response => response.json())
            .then(data => {

                if (data.response === "success") {
                    setHeroFound(treatData(data));
                    setIsAvailable(true);

                } else {
                    setIsAvailable(false);
                }
                
            })
            .catch(error => {
                console.log(error);
                setIsAvailable(false);
            })
    }


    function treatData(heroInfos) {
        const hero = new Hero(heroInfos.image.url,
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

    // work functions
    function search() {
        var id = Number(userInput);

        if (id > 0) {
            // user provide an id
            if (id > 731) {
                console.log("Not exist");
                setIsAvailable(false);
            } else {
                fetchHeroesById(id);
            }
        }
        else {
            // user provide a name
            fetchHeroesByName(userInput);
        }
    }


    function handleUserInput(event) {
        setUserInput(event.target.value);
    }



    return (
        <Grid container className="main-container">
            <Grid item xs={12}>
                <NavBar />
                <Grid container item spacing={1} alignItems="flex-end" className={ownStyle.searchContainer} justify="center">
                    <Grid item> <SearchOutlinedIcon /> </Grid>
                    <Grid item> <TextField color="secondary" id="search-text" label="search hero" size="medium" defaultValue="655" onChange={handleUserInput} /> </Grid>
                    <Grid item> <Button color="secondary" variant="outlined" onClick={() => search()} >Search</Button> </Grid>
                </Grid>
                <Typography align="center" color="textPrimary" className={ownStyle.typHelp}>Enter hero name or an id between 1 and 731</Typography>

                <Grid container item alignItems="center" justify="center">
                    <Grid item xs={11} md={3}>
                        {isAvailable && <HeroSections heroData={heroFound} />}   { /*: <DataNotAvailable /> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

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


export default SimpleSearch;
