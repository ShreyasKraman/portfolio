import React from 'react';

import ProfilePic from './Profilepic/Profilepic';
import Summary from './Summary/Summary';
import Grid from '@material-ui/core/Grid';
import './AboutMe.scss';
import Slide from 'react-reveal/Slide';

const Aboutme = (props : {nightMode: boolean}) => {
    return(
        // <Slide left>
            <div id="AboutMe" className={props.nightMode ? 'Aboutme Night' : 'Aboutme'}>
                <h2>About Me</h2>
                {/* <div className="container"> */}
                <Grid container>
                    {/* <div className="col-lg-8 col-md"> */}
                    <Grid item lg={8} md={8} xs={12}>
                        <Summary nightMode={props.nightMode}/>
                    </Grid>
                    {/* </div> */}
                    {/* <div className="col-lg-4 col-md"> */}
                    <Grid item lg={4} md={4} xs={12}>
                        <ProfilePic/>
                    </Grid>
                    {/* </div> */}
                </Grid>
                {/* </div> */}
            </div>
        // </Slide>
    );
}

export default Aboutme;