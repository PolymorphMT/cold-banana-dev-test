import React from 'react';
import {Toolbar, Typography} from "@material-ui/core";
//import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import MordIcon from './icons/circle4.svg';

export default class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <Toolbar>
                    {mordenkainenLogo}
                    <img src={MordIcon} alt="Mordenkainen Institute Logo" width={"50px"} height={"50px"}/>
                </Toolbar>
            </header>
        )
    }
}

const mordenkainenLogo = (
    <Typography variant="h6" component="h1">
        Mordenkainen Institute
    </Typography>
);