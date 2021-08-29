import React from "react"

import Slide from "react-reveal/Slide"

import { timeline } from "../../../../constants/data/Timeline/Timeline"
import "./Timeline.scss"

const Timeline = (props: { nightMode: boolean }) => (
  // <Slide right>
  <div
    className={props.nightMode ? "Timeline Night" : "Timeline"}
    id="Timeline"
  >
    <h2>Timeline</h2>
    <div className="Events">
      {timeline.map((data, index) => {
        const style = index % 2 === 0 ? "container right" : "container left"
        return (
          <div className={style} key={index}>
            <div className="content">
              <img src={data.image} alt={data.header} />
              <h3>{data.header}</h3>
              <h6>{data.jobTitle}</h6>
              <ul>
                {data.description.map((desc, index) => {
                  return <li key={index}>{desc}</li>
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  </div>
  // </Slide>
)

export default Timeline
