import React from 'react'
import UpcomingEvent from './UpcomingEvent'
import Focus from './Focus'
import HomeBanner from './HomeBanner'
function Home() {
  return (
    <React.Fragment>
        <div>
            <main>
                <HomeBanner/>
                <Focus/>
                <UpcomingEvent/>
            </main>

        </div>
    </React.Fragment>
  )
}

export default Home