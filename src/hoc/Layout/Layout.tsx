import React, {useState} from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import './Layout.scss';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

function ScrollTop(props: Props) {
    const { children, window } = props;
    
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
  
    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }

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