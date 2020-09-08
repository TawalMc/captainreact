import React from 'react';
import { Container, Grid, makeStyles, TextField, Button, Typography } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import "../css/SimpleSearch.css";
import NavBar from "../components/NavBar";
import PUBLIC_KEY from "../API_KEYS/API_KEY";

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        marginTop: theme.spacing(2),
    }
}));



function SimpleSearch() {
    const ownStyle = useStyles();

    function fetchHeroes(heroName) {
        fetch(`https://developer.marvel.com/v1/public/characters?nameStartsWith=${heroName}&limit=${5}&apikey=${PUBLIC_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    function beginSearch() {
        //console.log("Clicked");
        fetchHeroes("iron");
    }

    return (
        <Grid container className="main-container">
            <Grid item xs={12}>
                <NavBar />
                <Grid container spacing={2} alignItems="flex-end"  className={ownStyle.searchContainer} justify="center">
                    <Grid item> <SearchOutlinedIcon  /> </Grid>
                    <Grid item> <TextField color="secondary" id="search-text" label="search hero"  size="medium" defaultValue="iron" /> </Grid>
                    <Grid item> <Button color="secondary" variant="outlined" onClick={() => beginSearch()} >Search</Button> </Grid>
                </Grid>
                <Typography align="center" color="textPrimary">Enter the beginning letters of the name</Typography>
            </Grid>
        </Grid>
    );
}

export default SimpleSearch;