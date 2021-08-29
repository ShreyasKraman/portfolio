import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./Contact.scss"

const contact = (props: { nightMode: boolean }) => (
  <div className={props.nightMode ? "Contact Night" : "Contact"} id="Contact">
    <h2>Contact</h2>
    <h4>This was me. Now its your turn. Say Hello!</h4>
    <div className={"mail"}>
      <a href="mailto:shreyas.kalyanaraman@gmail.com">Get in touch</a>
    </div>
    <div className={"Links"}>
      <div className={"FontAwesome"}>
        <a
          href="https://www.linkedin.com/in/ShreyasKalyanaraman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size={"3x"} icon={faLinkedin} />
        </a>
      </div>
      <div className={"FontAwesome"}>
        <a href="mailto:shreyas.kalyanaraman@gmail.com">
          <FontAwesomeIcon size={"3x"} icon={faEnvelope} />
        </a>
      </div>
      <div className="FontAwesome">
        <a
          href="https://www.github.com/ShreyasKRaman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size={"3x"} icon={faGithub} />
        </a>
      </div>
      <div className="FontAwesome">
        <a
          href="https://www.instagram.com/shreyaskalyanaraman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size={"3x"} icon={faInstagram} />
        </a>
      </div>
    </div>
    <p> Designed & Built with Shreyas Kalyanaraman</p>
  </div>
)

export default contact
