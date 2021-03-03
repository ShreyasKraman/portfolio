import React,{Component} from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'; 

import './Toolbar.css';
import {ToolbarType} from '../../../common-types/index'

import Logo from './Logo/Logo';
import Menu from '@material-ui/icons/Menu';
// import Fade from 'react-reveal/Fade';

import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }


const navToolbar = (props: Props) =>{

    const resume = ['DesktopOnly', 'Resume'];

    return(
        // <Fade top>
            <header className='Toolbar'>
                <div className='MobileOnly' onClick={props.open}><Menu/></div>
                {/* <div className='Logo'>
                    <Logo/>
                </div>
                <nav className='DesktopOnly'>
                    <NavigationItems switch={props.switch}/>
                </nav>
                <div className={resume.join(' ')}>
                    <a  target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1NWPdeDhDoJLNV-fd-3G-IJNDgppcMVCD/view?usp=sharing">
                    Resume</a>
                </div> */}
                <HideOnScroll {...props}>
                    <AppBar>
                        <Toolbar>
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


