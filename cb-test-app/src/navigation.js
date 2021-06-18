import React from 'react';
import {Toolbar, Typography, Button, AppBar, IconButton} from "@material-ui/core";
//import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import MordIcon from './images/circle4.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

const headersData = [
    {
        label: "Home",
        href: "./src/HomePage",
    },
    {
        label: "Contact",
        href: "./src/ContactPage",
    }
];

export default class Navigation extends React.Component {
    render() {
        return (
            <AppBar className="App-header">
                <Toolbar>
                    <IconButton edge="start" className={"Menu-Button"} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    {mordenkainenLogo}
                    <img src={MordIcon} alt="Mordenkainen Institute Logo" width={"50px"} height={"50px"}/>
                    {getMenuButtons()}
                </Toolbar>
            </AppBar>
        )
    }
}

const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
        return (
            <Button
                {...{
                    key: label,
                    color: "inherit",
                    to: href,
                    component: Router,
                    className: "Menu-Button"
                }}
            >
                {label}
            </Button>
        );
    });
};

const mordenkainenLogo = (
    <Typography variant="h6" component="h1">
        Mordenkainen Institute
    </Typography>
);