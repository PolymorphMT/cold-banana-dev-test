import React from 'react';
import { Typography } from "@material-ui/core";
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
                    <Typography variant="h6" component="h1">Footer</Typography>
                </div>
        </div>
        )
    }
}
