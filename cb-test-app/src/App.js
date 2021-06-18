import React from 'react';
import { AppBar, Container } from "@material-ui/core";
// import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import HeaderComponent from './header';

export default class App extends React.Component {
    render() {
        console.log("App Launched.");
        return (
            <div className="App-Background">
                <AppBar>
                    <HeaderComponent
                    />
                </AppBar>
                <Container>
                    <p>Hello</p>
                </Container>
            </div>
        )
    }
}
