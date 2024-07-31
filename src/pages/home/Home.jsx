import React from 'react'
import Marquee from './Marquee'
import Banner from "../../components/Banner"
import UpcomingEvent from './UpcomingEvent'
import Focus from './Focus'
function Home() {
  return (
    <React.Fragment>
        <div>
            <header>
                <Marquee/>
            </header>
            <main>
                <Banner 
                    banner_link={"assets/home_pageImg.jpg"} 
                    header={`Longmen Africa`}
                    write_up_header={`Where exclisivity meets opportunity.`}
                    write_up={`Enjoy luxury lifestyle and events,\n strategic brand 
                    partnerships and private club memberships.`}
                    link_trigger={true} 
                    />
                <Focus/>
                <UpcomingEvent/>
            </main>

        </div>
    </React.Fragment>
  )
}

export default Home