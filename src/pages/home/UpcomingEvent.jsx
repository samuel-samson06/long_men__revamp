import React from 'react'
import upcoming_event from "../../assets/event4.webp"
import video from "../../assets/longmen_video.mp4"

function UpcomingEvent() {
  return (
    <React.Fragment><br/>
      <div className=' bg-gray-200'>
        <p className=' py-3 underline font-semibold capitalize text-center text-xl'>Upcoming Events</p>
        <div className=' min-[550px]:flex-row min-[550px]:h-fit min-[550px]:relative justify-around md:justify-evenly  px-5 flex flex-col items-center  gap-5'>
          <img src={upcoming_event} alt="" className=' md:w-72 w-60 h-full  rounded-md'  loading={"lazy"}/>
          <section>
            <p>Upcoming Event</p>
            <p>Date 📅</p>
            <p>Time </p>
            <p>Location</p>
            <p>Location</p>
            <p>Description</p>
          </section>
        </div><br />
        <p className=' py-3 underline font-semibold capitalize text-center text-xl'>previous Events</p>
        <div className=' min-[550px]:flex-row min-[550px]:h-fit min-[550px]:relative justify-around md:justify-evenly  px-5 flex flex-col items-center  gap-5'>
          <img src={upcoming_event} alt="" className=' md:w-72 w-60 h-full  rounded-md'  loading={"lazy"}/>
          <video src={video} controls loading="lazy" className=" w-52 rounded"/>
        </div><br />
      </div>
    </React.Fragment>
  )
}

export default UpcomingEvent