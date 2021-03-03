import React,{Component} from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'; 

import './Toolbar.scss';
import {ToolbarType} from '../../../common-types/index'

import Logo from './Logo/Logo';
import Menu from '@material-ui/icons/Menu';
// import Fade from 'react-reveal/Fade';

import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


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
                    <AppBar>
                        <Toolbar>
                            <div className='MobileOnly' onClick={props.open}><Menu/></div>
                            <div className='Logo'>
                                <Logo/>
                            </div>
                            <nav className='DesktopOnly'>
                                <NavigationItems switch={props.switch}/>
                            </nav>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Toolbar id="back-to-top-anchor" />
            </header>
        // </Fade>
    );
}

export default navToolbar;


