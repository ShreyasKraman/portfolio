import React,{Component} from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'; 

import './Toolbar.scss';
import {ToolbarType} from '../../../common-types/index'

import Logo from './Logo/Logo';
import Menu from '@material-ui/icons/Menu';
// import Fade from 'react-reveal/Fade';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch'
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function HideOnScroll(props: {children: React.ReactElement}) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }


const navToolbar = (props: ToolbarType) =>{

    const resume = ['DesktopOnly', 'Resume'];

    return(
        // <Fade top>
            <header className='Toolbar'>
                <HideOnScroll {...props}>
                    <AppBar classes={{root:props.nightMode?'Night':""}}>
                        <Toolbar>
                            <div className='MobileOnly' onClick={props.open}><Menu/></div>
                            <div className='Logo'>
                                <Logo/>
                            </div>
                            <Grid container direction='row' justify='flex-end' alignItems='center'>
                                <nav className='DesktopOnly'>
                                    <NavigationItems nightMode={props.nightMode} switch={props.switch}/>
                                </nav>
                                <span>
                                <ListItem button>
                                    <ListItemIcon classes={{root:props.nightMode?"Night":""}}>
                                        <FormGroup row>
                                            <FormControlLabel
                                                control={
                                                    <Switch
                                                        checked={props.nightMode}
                                                        onChange={props.switch}
                                                    />
                                                }
                                                label="Night"
                                            />
                                        </FormGroup>
                                    </ListItemIcon>
                                    {/* <ListItemText classes={{root:props.nightMode?"Night":""}}primary="Night" /> */}
                                </ListItem>
                                </span>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar id="back-to-top-anchor" />
            </header>
        // </Fade>
    );
}

export default navToolbar;


