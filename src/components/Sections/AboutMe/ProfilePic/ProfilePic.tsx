import React from "react"

import Mypic from "../../../../assets/profilePic.jpg"

import Image from "react-bootstrap/Image"
import "./ProfilePic.scss"

const Profilepic = () => {
  return (
    <div className={"Profilepic"}>
      <a
        href="https://github.com/ShreyasKRaman"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Mypic} fluid={true} alt="Shreyas Kalyanaraman" />
      </a>
    </div>
  )
}

export default Profilepic
