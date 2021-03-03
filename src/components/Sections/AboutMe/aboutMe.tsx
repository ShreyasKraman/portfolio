import React from 'react';

import ProfilePic from './Profilepic/Profilepic';
import Summary from './Summary/Summary';

import './AboutMe.scss';
import Slide from 'react-reveal/Slide';

const Aboutme = (props : {nightMode: boolean}) => {
    return(
        <Slide left>
            <div id="AboutMe" className={props.nightMode ? 'Aboutme Night' : 'AboutMe'}>
                <h2>About Me</h2>
                <div className="container">
                    <div className='row'>
                        <div className="col-8">
                            <Summary nightMode={props.nightMode}/>
                        </div>
                        <div className="col-4">
                            <ProfilePic/>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}

export default Aboutme;