import React from 'react'
import EventList from './EventList'
import EventBanner from './EventBanner'

function Event() {
  return (
    <React.Fragment>
        <div>
          <main>
            <EventBanner/>
            <EventList/>
          </main>
        </div>
    </React.Fragment>
  )
}

export default Event