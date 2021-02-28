import React from 'react';

import ProfilePic from './Profilepic/Profilepic';
import Summary from './Summary/Summary';

import './aboutMe.scss';
import Slide from 'react-reveal/Slide';

const Aboutme = (props : {nightMode: boolean}) => {
    return(
        <Slide left>
            <div id="AboutMe" className={props.nightMode ? 'Aboutme bgColor-Night' : 'AboutMe bgColor'}>
                <h2>About Me</h2>
                <div className="contain">
                    <Summary nightMode={props.nightMode}/>
                    <ProfilePic/>
                </div>
            </div>
        </Slide>
    );
}

export default Aboutme;