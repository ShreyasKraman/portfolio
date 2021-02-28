import React, {useState} from "react"

import Layout from '../hoc/Layout/Layout'
import Portfolio from '../container/Portfolio/Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/index.scss'

const App = () => {

  const [layoutNight, setLayoutNight] = useState(true);

  const toggleNightSwitch = () => {
    setLayoutNight(!layoutNight);
  }

  return(
    <div className={layoutNight ? 'App Night' : 'App'}>
      <Layout switch={toggleNightSwitch}>
        <Portfolio nightMode={layoutNight}/>
      </Layout>
    </div>
  )
};

export default App;
