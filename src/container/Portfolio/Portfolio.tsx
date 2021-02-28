import React from 'react';

import Introduction from '../../components/Sections/Introduction/Introduction';
import AboutMe from '../../components/Sections/AboutMe/aboutMe';
import Timeline from '../../components/Sections/Timeline/timeline';
import Contact from '../../components/Sections/Contact/contact';

import './Portfolio.css';

const Portfolio = (props : { nightMode: boolean }) => (
    <div className='Portfolio' >
        <Introduction nightMode = {props.nightMode}/>
        <AboutMe nightMode = {props.nightMode}/>
        <Timeline nightMode = {props.nightMode}/>
        <Contact nightMode = {props.nightMode}/>
    </div>
);

export default Portfolio;