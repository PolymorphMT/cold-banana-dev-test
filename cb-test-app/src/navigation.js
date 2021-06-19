import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, Typography, Button, AppBar, IconButton, Tabs, Tab, Box} from "@material-ui/core";
//import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import HomePage from './HomePage'
import ContactPage from './ContactPage'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Navigation() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="App-Nav">
            <AppBar>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Contact" {...a11yProps(1)} />
                    <Tab label="Other" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <HomePage />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ContactPage />
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
    </div>
    )
}