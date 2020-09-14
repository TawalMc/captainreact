import React from 'react';
import {makeStyles,
    AppBar, IconButton, Toolbar,
    Typography, Button, Drawer} from '@material-ui/core';
    import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';

import "../css/SimpleSearch.css";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function NavBar() {
    const ownStyle = useStyles();

    return (
        <AppBar position="static" color="secondary" className={ownStyle.root}>
            <Toolbar>
                <IconButton color="inherit" dge="start" className={ownStyle.menuButon}>
                    <FitnessCenterOutlinedIcon />
                </IconButton>
                <Typography variant="h6" className={ownStyle.title}>
                    Captain React
                </Typography>
                <Button color="inherit">Heroes</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;