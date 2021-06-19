import React from 'react';
import PropTypes from 'prop-types';
import {Toolbar, Typography, Button, AppBar, IconButton, Tabs, Tab, Box, Paper} from "@material-ui/core";
//import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import HomePage from './HomePage'
import ContactPage from './ContactPage'
import { styled, createMuiTheme } from '@material-ui/core/styles';

const StyledTabs = styled(Tabs)({
    background: 'linear-gradient(to right, #00253D, #8B5BC2, #FFC2DD)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
});

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFC2DE',
            main: '#FF1F87',
            dark: '#3D001C',
            contrastText: '#00253D',
        },
        secondary: {
            light: '#C2E7FF',
            main: '#1FA5FF',
            dark: '#00253D',
            contrastText: '#FF1F87',
        },
    },
});

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
                <StyledTabs value={value} onChange={handleChange} aria-label="website navigation" textColor="white"
                indicatorColor="secondary">
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Contact" {...a11yProps(1)} />
                </StyledTabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Paper elevation={3}>
                    <HomePage />
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper elevation={3}>
                    <ContactPage />
                </Paper>
            </TabPanel>
    </div>
    )
}