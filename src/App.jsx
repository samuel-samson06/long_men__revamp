import React, { useState } from 'react'
import Longmen from "./longmen"
import { Context } from './Context/Context'

function App() {
  const [toggleNavBar, setToggleNavBar] = useState(false)
  const [toggleAdminNavBar,setAdminNavBar] = useState(false)
  const value = {toggleAdminNavBar,setAdminNavBar,toggleNavBar, setToggleNavBar}
  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <Longmen/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App