import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FDFEFE",
        marginBottom: theme.spacing(4),
    },
    typName: {
        color: "#EC407A",
    },
    firstInfo: {
        marginBottom: theme.spacing(2),
    },
    aliaseAlter: {
        fontSize: 16,
        fontStyle: "italic", 
    }

}));

export function HeroSections(props) {
    const classes = useStyles();
    const heroData = props.heroData;

    return (
        <Card className={classes.root} square={true}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={heroData.heroName}
                    height="250"
                    image={heroData.photoUrl}
                    title={heroData.heroName}
                />
                <CardContent>
                    <Grid container alignItems="center">
                        <Grid container item alignItems="center" justify="space-between" xs={12} className={classes.firstInfo}>
                            <Grid item xs={4}>
                                <Typography gutterBottom className={classes.typName} variant="h6" component="h3">
                                   {heroData.heroName}
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography gutterBottom variant="body1" color="textPrimary" component="p" align="right">
                                    {heroData.height}/ {heroData.weight}
                                </Typography>
                                <Typography gutterBottom variant="body1" color="textPrimary" component="p" align="right">
                                    {heroData.birthPlace}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container item alignItems="center"  xs={12} justify="space-around">
                            <Typography gutterBottom variant="body2" color="textPrimary" component="p" className={classes.aliaseAlter}>
                                {heroData.aliaseName}        
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="p">
                                😎        
                            </Typography>
                            <Typography gutterBottom variant="body2" color="textPrimary" component="p" className={classes.aliaseAlter}>
                                {heroData.alterEgo}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container item alignItems="center" justify="space-between" xs={12}>
                    <Grid item xs={6}>
                        <Button size="small" color="primary">
                            {heroData.realName}
                        </Button>
                    </Grid>
                    <Grid container item xs={6} alignItems="center" justify="flex-end">
                        <Button size="small" color="primary" >
                            {heroData.publisher}
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    );
}

export function DataNotAvailable(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root} square={true}>
            <CardContent>
                <Grid container spacing={2} justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography align="left" color="error">
                            😒😒😒 We know you! {props.text} I said: A hero name inh like black, spider antman and not your crazy Naruto or Deku.
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}