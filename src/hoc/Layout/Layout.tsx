import React, {useState} from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

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
        </>
    );

};

export default Layout;