import React from "react";
import {Container, Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
//import Image from '@material-ui-image'
import './index.css';
import './App.css';
import FamiliarImg from "./images/familiar.jpg"

export default class HomePage extends React.Component {
    render() {
        return (
            <Container className="App-Page">
                <h1>This is the Mordenkainen Institute</h1>
                <Card className="Familiar-Img">
                    <CardActionArea>
                        <CardMedia className="media" image={FamiliarImg} alt={"A summoned magical familiar with toad-like features, sat " +
                        "in a wizard's tome"} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                An example familiar
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A summoned magical familiar with toad-like features, sat in a wizard's tome.
                            </Typography>
                            {/*<Typography variant="body3">*/}
                            {/*    Art sourced from: https://www.artstation.com/artwork/1BAG2*/}
                            {/*</Typography>*/}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        )
    }
}