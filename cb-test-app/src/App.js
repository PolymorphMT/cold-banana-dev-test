import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Header from './header';

export default class App extends React.Component {
    render() {
        console.log("App Launched.");
        return (
            <div className="App-Background">
                <Header
                />
            </div>
        )
    }
}
