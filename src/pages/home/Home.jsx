import React from 'react'
import Events from './Events'
import Focus from './Focus'
import HeroSection from '../../components/HeroSection'
function Home() {
  return (
    <React.Fragment>
        <div>
            <main>
                <HeroSection/>
                <Focus/>
                <Events/>
            </main>

        </div>
    </React.Fragment>
  )
}

export default Home