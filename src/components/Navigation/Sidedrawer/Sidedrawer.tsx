import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Drawer from '@material-ui/core/Drawer';
import NavigationItems from '../NavigationItems/NavigationItems';
import {SidedrawerType} from '../../../common-types/index'

// import './Sidedrawer.css';


const Sidedrawer = (props: SidedrawerType) => {

    let attachedClasses = ['SideDrawer'];
    // let action = props.open ? 'Open' : 'Close';
    // attachedClasses.push(action);
    let navClasses = 'Nav';
    if(props.open){
        navClasses = null;
    }

    return(
        <>
            {/* <Backdrop show={props.open} clicked={props.close}/> */}
            <div className={attachedClasses.join(' ')}>
                    {/* <FontAwesomeIcon size={"2x"} className={classes.Exit} onClick={props.close} icon={faTimes}/> */}
                    <h3>My Portfolio</h3>
                    <span></span>
                    <Drawer anchor={'left'} open={props.open} onClose={props.close}> 
                    {/* <nav className={navClasses}> */}
                        <NavigationItems close={props.close}/>
                    {/* </nav> */}
                    </Drawer>
            </div>
        </>
    );
}

export default Sidedrawer;