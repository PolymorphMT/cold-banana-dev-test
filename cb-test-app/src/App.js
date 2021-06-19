import React from 'react';
import { AppBar, Container } from "@material-ui/core";
// import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import NavPage from './navigation';

export default class App extends React.Component {
    render() {
        console.log("App Launched.");
        return (
            <div>
            <div className="App-Background">
                <NavPage
                />
            </div>
                <div className="App-Footer">
                    <h1>this is the footer</h1>
                </div>
        </div>
        )
    }
}
