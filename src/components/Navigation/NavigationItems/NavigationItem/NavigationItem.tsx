import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {INavigationItem} from '../../../../common-types/index';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './NavigationItem.css';

const NavigationItem = (props : INavigationItem) =>{
    return (
        // <li className="NavigationItem">
        //     {/* <a 
        //         href={props.link} 
        //         className={props.active ? classes.active : null}>{props.children}
        //     </a> */}
        //     <FontAwesomeIcon size={"sm"} className="Icons" icon={props.icon}/>
        //     <Link to={props.link}  
        //         className={props.active ? "active" : null}
        //         activeClass={props.active ? "active" : null}
        //         onClick={props.close}
        //         smooth={true}
        //         offset={-70}
        //         duration={1000}>
        //             {props.children}
        //     </Link> 
        // </li>
            <ListItem button>
                <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.text} />
            </ListItem>
    );
}

export default NavigationItem;
