import React from 'react'
import AboutBanner from './AboutBanner'
import Servcies from './Servcies'
import Brands from './Brands'

function About() {
  return (
    <React.Fragment>
        <div>
          <header>
            <AboutBanner />
          </header>
          <main>
            <Servcies/>
            <Brands/>
          </main>
        </div>
    </React.Fragment>
  )
}

export default About