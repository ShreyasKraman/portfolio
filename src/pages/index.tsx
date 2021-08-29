import React, { useState } from "react"

import Layout from "../hoc/Layout/Layout"
import Portfolio from "../container/Portfolio/Portfolio"
import "bootstrap/dist/css/bootstrap.min.css"

import "../styles/index.scss"

import Container from "@material-ui/core/Container"

const App = () => {
  const [layoutNight, setLayoutNight] = useState(true)

  const toggleNightSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayoutNight(!layoutNight)
  }

  return (
    <Container maxWidth={false} style={{ padding: 0 }}>
      <div className={layoutNight ? "App Night" : "App"}>
        <Layout nightMode={layoutNight} switch={toggleNightSwitch}>
          <Portfolio nightMode={layoutNight} />
        </Layout>
      </div>
    </Container>
  )
}

export default App
