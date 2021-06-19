import React from "react";
//import {Container, Card, CardMedia, CardContent, Typography, CardActionArea} from "@material-ui/core";
//import Image from '@material-ui-image'
import TextField from '@material-ui/core/TextField';
import './index.css';
import './App.css';
import {Container} from "@material-ui/core";

export default class ContactPage extends React.Component {
    render() {
        return (
            <Container className="App-Page">
                <div className="Content">
                    <h1>Talk To Us!</h1>
                    <form noValidate autoComplete="on">
                        <TextField required id="standard-basic" label="First Name" variant="filled"
                                   placeholder="Steven" margin="normal" />
                        <TextField required id="standard-basic" label="Last Name" variant="filled"
                                   placeholder="Strange" margin="normal" />
                        <TextField size="medium" required id="standard-basic" label="Email Address" variant="filled"
                                   placeholder="sorcerorsupreme@marvel.com" margin="normal" fullWidth />
                        <TextField
                            id="standard-multiline-static"
                            label="Message"
                            multiline
                            required
                            rows={10}
                            variant="filled"
                            placeholder="Your message here."
                            margin="normal"
                            fullWidth
                        />
                    </form>
                </div>
            </Container>
        )
    }
}