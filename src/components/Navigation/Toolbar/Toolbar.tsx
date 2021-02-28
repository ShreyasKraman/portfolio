import React,{Component} from 'react';

import NavigationItems from '../NavigationItems/NavigationItems'; 

import './Toolbar.css';
import {ToolbarType} from '../../../common-types/index'

import Logo from './Logo/Logo';
import Menu from '@material-ui/icons/Menu';
import Fade from 'react-reveal/Fade';

const Toolbar = (props: ToolbarType) =>{

    const resume = ['DesktopOnly', 'Resume'];
    return(
        <Fade top>
            <header className='Toolbar'>
                <div className='MobileOnly' onClick={props.open}><Menu/></div>
                <div className='Logo'>
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
                </div>
            </header>
        </Fade>
    );
}

export default Toolbar;


