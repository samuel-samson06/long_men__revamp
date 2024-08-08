// Upcoming Event Upload
import React from 'react'
import UpcomingEventForm from './UpcomingEventForm'
import UploadImage from './UploadImage'

function UpcomingEvent() {
  return (
    <React.Fragment>
      <div className=' lg:px-10 py-6 flex flex-col gap-2'>
        <p className=' text-center font-semibold'>Next Event Upload</p>
        <section className=' flex flex-col gap-4'>
          <UpcomingEventForm/>
          <UploadImage/>
        </section>
        <section className=' flex items-center justify-center'>
          <button className=' bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload</button>
        </section>
      </div>
    </React.Fragment>
  )
}

export default UpcomingEvent