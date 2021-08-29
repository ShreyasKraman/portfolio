import React from "react"

import "./Icon.css"

const Icon = props => (
  <img src={props.img} alt={props.desc} className={"Icon"} />
)

export default Icon
