import React, { useState} from 'react';
import { Grid, makeStyles, TextField, Button, Typography } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import "../css/SimpleSearch.css";
import NavBar from "../components/NavBar";
import {HeroSections, DataNotAvailable} from "../components/HeroSections";


const useStyles = makeStyles((theme) => ({
    searchContainer: {
        marginTop: theme.spacing(10),
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
    
    const [userInput, setUserInput] = useState("655"); // to store user input and search heroes 
    const [isAvailable, setIsAvailable] = useState(false); // to store some informations about heroes searched
    const [heroFound, setHeroFound] = useState([]);
    const [notAvailableText, setNotAvailableText] = useState("Just enter a number or name. Mahou!");

    // when ssr
    function callHeroAPI(input) {
        fetch("/api/heroAPI",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({post: input})
        })
        .then(response => response.json())
        .then(data => {
            
            if(data.status === true) {
                setHeroFound(data.value);
            } else {
                setNotAvailableText(data.value+". Try again and leave me alone!");
            }
            setIsAvailable(data.status);
            
        })
        .catch(err => {
            setNotAvailableText("An error occurs when loading data!");
            setIsAvailable(false);
        });
    }

    // work functions
    function search() {

        callHeroAPI(userInput);
    }

    function handleUserInput(event) {
        setUserInput(event.target.value);
    }


    return (
        <Grid container className="main-container">
            <Grid item xs={12}>
                <NavBar />
                <Grid container item spacing={1} alignItems="flex-end" className={ownStyle.searchContainer} justify="center" id="top">
                    <Grid item> <SearchOutlinedIcon /> </Grid>
                    <Grid item> <TextField color="secondary" id="search-text" label="search hero" size="medium" defaultValue="655" onChange={handleUserInput} /> </Grid>
                    <Grid item> <Button color="secondary" variant="outlined" onClick={() => search()} >Search</Button> </Grid>
                </Grid>
                <Typography align="center" color="textPrimary" className={ownStyle.typHelp}>Enter hero name or an id between 1 and 731</Typography>

                <Grid container item alignItems="center" justify="center">
                    <Grid item xs={11} md={3}>
                        {isAvailable ? 
                            heroFound.map( (heroesData, index) => 
                                <HeroSections heroData={heroesData} key={index} />
                            ) :
                            <DataNotAvailable text={notAvailableText} />
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default SimpleSearch;
