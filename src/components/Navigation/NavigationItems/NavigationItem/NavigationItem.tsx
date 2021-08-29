import React from "react"
import { Link } from "react-scroll"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { INavigationItem } from "../../../../common-types/index"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import "./NavigationItem.scss"

const NavigationItem = (props: INavigationItem) => {
  return (
    <div className="NavigationItem">
      <ListItem button>
        <ListItemIcon classes={{ root: props.nightMode ? "Night" : "" }}>
          {props.icon}
        </ListItemIcon>
        <ListItemText
          classes={{ root: props.nightMode ? "Night" : "" }}
          primary={props.text}
        />
      </ListItem>
    </div>
  )
}

export default NavigationItem
