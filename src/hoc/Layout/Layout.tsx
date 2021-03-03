import React, {useState} from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

import ScrollTop from '../../components/UI/ScrollTop/ScrollTop';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';

import './Layout.scss';



const Layout = (props : {switch : () => void, children : React.ReactNode}) => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const openSideDrawerHandler = () => {
        setShowSideDrawer(true);
    }

    const closeSideDrawerHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return(
        <>
            <Toolbar open={openSideDrawerHandler} switch={props.switch}/>
            {/* {sidedrawer} */}
            <Sidedrawer open={showSideDrawer} close={closeSideDrawerHandler}/>
            <main>
                {props.children}
            </main>
            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop> 
        </>
    );

};

export default Layout;