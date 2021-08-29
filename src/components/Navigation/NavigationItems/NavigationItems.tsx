import React from 'react';

import './NavigationItems.scss';
import './NavigationItem/NavigationItem.scss';

import {INavigationItem} from '../../../common-types/index';
import NavigationItem from './NavigationItem/NavigationItem';


// import AboutMe from '../../Sections/Aboutme/Aboutme';
// import Timeline from '../../Sections/Timeline/Events';
// import Project from '../../Sections/Feats/Feats';
// import Contact from '../../Sections/Contact/Contact';

// import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
// import {faFolder} from '@fortawesome/free-solid-svg-icons';
// import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
// import {faPhone} from '@fortawesome/free-solid-svg-icons';

import {Folder, CalendarToday, Phone, AccountCircle} from '@material-ui/icons'

import { faMoon } from '@fortawesome/free-solid-svg-icons';


import FormCheck from 'react-bootstrap/FormCheck';

const NavigationItems = (props : INavigationItem) =>{
    
    const links = [
        {
            link:"AboutMe",
            desc:"About Me",
            component:"AboutMe",
            icon:<AccountCircle/>,
            active:true,
        },
        {
            link:"Timeline",
            desc:"Timeline",
            component:"Timeline",
            icon:<CalendarToday/>,
            active:false,
        },
        {
            link:"Projects",
            desc:"Projects",
            component:"Project",
            icon:<Folder/>,
            active:false,
        },
        {
            link:"Contact",
            desc:"Contact",
            component:"Contact",
            icon: <Phone/>,
            active:false,
        },
    ];

    const navigationitems = links.map((value,idx) => {

        return <NavigationItem 
                    key={idx} 
                    link={value.link} 
                    active 
                    icon={value.icon}
                    text={value.desc}
                    nightMode={props.nightMode}>
                    {/*component={value.component}> */}
                    {value.desc}</NavigationItem>
    }); 

    return (
        <div className="NavigationItems">
            {/* <div className={props.nightMode?"Night":''}>   */}
                <span className="ListItem">
                    {navigationitems}
                </span>
            {/* </div> */}
        </div>
    );
};

export default NavigationItems;