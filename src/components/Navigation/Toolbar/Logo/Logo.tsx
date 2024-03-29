import React from "react"

import LogoImage from "../../../../assets/Logo.png"

import "./Logo.css"

const Logo = () => (
  <div className="Logo">
    <a href="/">
      <img src={LogoImage} alt="Shreyas Kalyanaraman" />
    </a>
  </div>
)

export default Logo
