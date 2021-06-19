import React from 'react';
import { AppBar, Container } from "@material-ui/core";
// import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import HeaderComponent from './navigation';

export default class App extends React.Component {
    render() {
        console.log("App Launched.");
        return (
            <div className="App-Background">
                <HeaderComponent
                />
            </div>
        )
    }
}
