/* eslint-disable react/prop-types */
import React from 'react'
import { dateEdited } from '../pages/admin/utils/dateEdited'

function DisplayEvent({event}) {
  // const date = new Date("2023-8-10").toLocaleDateString("en-US",{"dateStyle":"full"});
  // console.log(date)
  return (
    <React.Fragment>
        <div className='bg-gray-50 mx-12 rounded-md py-4 sm:flex-row min-[550px]:h-fit min-[550px]:relative justify-center  px-5 flex flex-col items-center gap-5'>
            <img src={`${event?.imageUrl}`} alt={event.event_name} className=' md:w-72 w-60 h-full  rounded-md'  loading={"lazy"}/>
            <section className=' font-serif max-md:w-full w-2/5 py-6 rounded-md px-5 '>
              {/* <p className=' font-semibold text-lg text-center md:text-xl underline'>Next Event</p> */}
              <main className=' items-start justify-center flex flex-col gap-5'>
                <p className=' text-base md:text-xl font-semibold '><span> {event?.event_name}</span></p>
                <p className=' text-sm md:text-lg font-semibold '><span> {event?.event_description}</span></p>
                <p className=' text-sm md:text-lg font-semibold '><span>{event?.event_location}</span></p>
                <section className=' w-full text-xs flex max-md:flex-col gap-2 justify-between'>
                  <p className='font-semibold '><span className=' text-sm max-sm:hidden'>Date:  </span><span>{dateEdited(event?.event_date)}</span></p>
                  <p className='font-semibold '><span className=' text-xs md:text-sm'>Time:  </span><span>{event?.event_time}</span>{}</p>
                </section>
              </main>
            </section>
        </div>
    </React.Fragment>
  )
}

export default DisplayEvent