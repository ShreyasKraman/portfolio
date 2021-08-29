import React from 'react';

import Fade from 'react-reveal/Fade';

import './Introduction.scss';
import {introduction} from '../../../../constants/data/Introduction/Introduction';




const Intrduction = ( props : {nightMode: boolean} ) => (
    <div className={'Introduction bgColor' }>
        {/* <Fade top cascade> */}
            <div className={props.nightMode ? 'Pitch Night' : 'Pitch'}>
                <h5>{introduction.heading1}</h5> 
                <h2>{introduction.heading2}</h2>
                <h3>{introduction.heading3}</h3>
                <div className={'Paragraph'}>
                    <p>{introduction.paragraph1}</p>
                </div>
                <div className={'Grid'}>
                    <div className={'mail'}> 
                        <a href={introduction.button1.url}>{introduction.button1.text}</a>
                    </div>
                    <div className={'Resume'}>
                        <a  target="_blank"
                            rel="noopener noreferrer"
                            href={introduction.mobileButton1.url}>
                        {introduction.mobileButton1.text}</a>
                    </div>
                </div>
            </div>
        {/* </Fade> */}
    </div>
);

export default Intrduction;