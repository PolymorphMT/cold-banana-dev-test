import React from "react";
import {Container, Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
import './index.css';
import './App.css';
import FamiliarImg from "./images/familiar.jpg"
import MordIcon from './images/circle4.svg';

export default class HomePage extends React.Component {
    render() {
        return (
            <Container className="App-Page">
                <div className="Content">
                    {mordenkainenLogo}
                    <p>
                        Here at the Mordenkainen Institute, we endeavour to match wizards of all ages with their
                        perfect summoning familiar!
                    </p>
                    <Card>
                        <CardActionArea>
                            <CardMedia component="img" image={FamiliarImg} alt={"A summoned magical familiar with toad-like features, sat " +
                            "in a wizard's tome"} className="Familiar-Img" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    An example familiar
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    A summoned magical familiar with toad-like features, sat in a wizard's tome.
                                </Typography>
                                <Typography variant="body3">
                                    Art sourced from: https://www.artstation.com/artwork/1BAG2
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Container>
        )
    }
}
const mordenkainenLogo = (
    <div>
        <h1>
            Mordenkainen Institute
        </h1>
        <img src={MordIcon} alt="Mordenkainen Institute Logo" width={"150vw"} color="inherit"/>
    </div>
);