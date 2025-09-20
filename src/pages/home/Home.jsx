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
                <Events/>
                <Focus/>
            </main>

        </div>
    </React.Fragment>
  )
}

export default Home