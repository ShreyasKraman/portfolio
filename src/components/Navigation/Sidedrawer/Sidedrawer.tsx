import React from "react"

// import Backdrop from '../../UI/Backdrop/Backdrop';
import Drawer from "@material-ui/core/Drawer"
import NavigationItems from "../NavigationItems/NavigationItems"
import { SidedrawerType } from "../../../common-types/index"

import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"

// import './Sidedrawer.css';

const Sidedrawer = (props: SidedrawerType) => {
  let attachedClasses = ["SideDrawer"]
  // let action = props.open ? 'Open' : 'Close';
  // attachedClasses.push(action);
  let navClasses = "Nav"
  if (props.open) {
    navClasses = null
  }

  return (
    <>
      {/* <Backdrop show={props.open} clicked={props.close}/> */}
      <div className={attachedClasses.join(" ")}>
        {/* <FontAwesomeIcon size={"2x"} className={classes.Exit} onClick={props.close} icon={faTimes}/> */}
        {/* <h3>My Portfolio</h3> */}
        <span></span>
        <Drawer anchor={"left"} open={props.open} onClose={props.close}>
          {/* <nav className={navClasses}> */}
          <ListItem>
            <ListItemText>
              <Typography className={""} variant="h5" noWrap>
                My Portfolio
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider />
          <NavigationItems close={props.close} />
          {/* </nav> */}
        </Drawer>
      </div>
    </>
  )
}

export default Sidedrawer
