import React from 'react'
import Marquee from "../home/Marquee"
import Banner from '../../components/Banner'
import EventList from './EventList'

function Event() {
  return (
    <React.Fragment>
        <div>
          <header>
            <Marquee/>
          </header>
          <main>
            <Banner header={`Events`}
            banner_link={"assets/event_pageImg.jpg"}
            write_up_header={`Experience the art of fine living.`}
            write_up={`Step into our world of refined indulgence, where a shared passion for the extra-ordinary unites us. We're more than a brand - we're a lifestyle movement, Join our inner circle and dsicover
              .`}
            />
            <EventList/>
          </main>
        </div>
    </React.Fragment>
  )
}

export default Event