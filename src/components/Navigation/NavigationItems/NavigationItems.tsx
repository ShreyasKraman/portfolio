import React from 'react';

import './NavigationItems.css';
import './NavigationItem/NavigationItem.css';

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
        }
    ];

    const navigationitems = links.map((value,idx) => {
        if(props.close){
            let navigation = value.active ? <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                active
                                                close={props.close} 
                                                icon={value.icon}
                                                text={value.desc}>
                                                {/* component={value.component}> */}
                                                {value.desc}</NavigationItem>
                                        :
                                        <NavigationItem 
                                                key={idx} 
                                                link={value.link}
                                                active 
                                                close={props.close}
                                                icon={value.icon}
                                                text={value.desc}>
                                                {/* component={value.component}> */}
                                                {value.desc}</NavigationItem>
            
            return navigation
    
        }

        let navigation = value.active ? <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                active 
                                                icon={value.icon}
                                                text={value.desc}>
                                                {/*component={value.component}> */}
                                                {value.desc}</NavigationItem>
                                        :
                                        <NavigationItem 
                                                key={idx} 
                                                link={value.link} 
                                                active 
                                                icon={value.icon}
                                                text={value.desc}>
                                                {/* component={value.component}> */}
                                                {value.desc}</NavigationItem>
        return navigation
        
    }); 

    return (
        <>
            <ul className="NavigationItems">
                {navigationitems}
                {/* <li className='NavigationItem'>
                    <FormCheck 
                        type="switch"
                        id="night-mode-switch"
                        label="Night Mode"
                        onClick={props.switch}
                    />
                </li> */}
            </ul>
        </>
    );
};

export default NavigationItems;