import React from "react"
import { BackdropType } from "../../../common-types/index"
import "./Backdrop.scss"

const Backdrop = (props: BackdropType) => {
  return props.show ? (
    <div className="Backdrop" onClick={props.clicked} />
  ) : null
}

export default Backdrop
