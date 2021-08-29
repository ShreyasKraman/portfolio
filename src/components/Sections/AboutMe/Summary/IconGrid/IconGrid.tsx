import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Icon from "../Icon/Icon"
import React from "react"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

const IconGrid = (props: {
  type: string
  text: string
  icon?: IconProp
  asset?: File
  style?: string
}) => (
  <li>
    <div className={"IconGrid"}>
      {props.type === "icon" && (
        <FontAwesomeIcon className={props.style} icon={props.icon} />
      )}
      {props.type === "image" && <Icon img={props.asset} desc={props.text} />}
      {props.text}
    </div>
  </li>
)

export default IconGrid
