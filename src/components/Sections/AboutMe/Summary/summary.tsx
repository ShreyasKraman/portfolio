import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHiking, faBicycle, faMapMarked, faGamepad} from '@fortawesome/free-solid-svg-icons';

import './Summary.scss';
import {expertise, handsOn} from '../../../../../constants/data/AboutMe/Summary/Summary';
import IconGrid from './IconGrid/iconGrid';


const Summary = (props : {nightMode : boolean}) => {
    return(
        <>
            <div className={"Summary"}>
                <p>Hey I am Shreyas, a Full stack software engineer who 
                    enjoys building unique apps to solve real world problems. 
                    I like to keep apps secure, error free, simple and clean. 
                </p>
                <p>Currently, I am working at &nbsp;  
                    <a href="https://www.sw.siemens.com/" target="_blank" rel="noopener noreferrer">
                        SIEMENS
                    </a>
                , Ohio. A year ago, I completed my Master's degree in Information Systems from &nbsp;
                    <a href="https://coe.northeastern.edu/" target="_blank" rel="noopener noreferrer" >
                        Northeastern University
                    </a>, Boston and prior to this, I accomplished 2 successful years of professional work experience at &nbsp;
                    <a href="https://www.lntinfotech.com/" target="_blank" rel="noopener noreferrer">
                        L&T Infotech
                    </a> as software engineer.
                </p>
                <h5>My areas of expertise are</h5>
                <ul>
                    {expertise.map((data,index)=>{
                        return <IconGrid key={index} text={data.text} type={data.type} asset={data.asset} icon = {data.icon}/> 
                    })}
                </ul>
                <h5>I also have hands-on knowledge in</h5>
                <ul>
                    {handsOn.map((data,index)=>{
                        return <IconGrid key={index} text={data.text} type={data.type} asset={data.asset} icon = {data.icon}/>
                    })}
                </ul>

                <p className={"Hobbies"}>
                    I love <FontAwesomeIcon className={"HobbyIcon"} icon={faHiking}/> hiking, 
                    &nbsp;<FontAwesomeIcon className={"HobbyIcon"} icon={faBicycle}/> biking, 
                    &nbsp;<FontAwesomeIcon className={"HobbyIcon"} icon={faMapMarked}/> exploring new places and
                    &nbsp;<FontAwesomeIcon className={"HobbyIcon"} icon={faGamepad}/> playing games (FPS, TPS and Fifa mostly)</p>
            </div>
        </>
    );
}

export default Summary;