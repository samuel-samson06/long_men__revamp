import React, { useEffect, useState } from 'react'
import previous_event from "../../assets/event4.webp"
import video from "../../assets/longmen_video.mp4"
import { gettingUpcomingEvent } from '../admin/firebase'
import DisplayEvent from '../../components/DisplayEvent'
import LoadingUpcomingEvent from "../../components/LoadingUpcomingEvent"

function UpcomingEvent() {
  const [upcoming_event, setUpcomingEvent] = useState([])

    useEffect(()=>{
      const upcomingEvent = async()=>{
        try{
          const response = await gettingUpcomingEvent()
          console.log(response)
          setUpcomingEvent([response]);
        }catch(error){
          console.log(error);
        }
      }
      upcomingEvent();
    },[])

  return (
    <React.Fragment><br/>
      <div className=' bg-[#131b34]'>
        <p className=' py-3 underline text-white font-semibold capitalize text-center text-xl'>Upcoming Events</p>
        {/* Loading Data */}
        {
          upcoming_event[0]==undefined?
          <LoadingUpcomingEvent/>:
          <div>
            {
              upcoming_event.map((event,index)=>{
                return(
                  <section key={index+"#1s$"}>
                    {event.event_name.length!=0&&<DisplayEvent event={event}/>}
                  </section>
                )
              })
            }
          </div>
        }
        <br />
        <p className=' py-3 underline font-semibold text-white capitalize text-center text-xl'>previous Events</p>
        <div className=' min-[550px]:flex-row min-[550px]:h-fit min-[550px]:relative justify-around md:justify-evenly  px-5 flex flex-col items-center  gap-5'>
          <img src={previous_event} alt="" className=' md:w-72 w-60 h-full  rounded-md'  loading={"lazy"}/>
          <video src={video} controls loading="lazy" className=" w-52 rounded"/>
        </div><br />
      </div>
    </React.Fragment>
  )
}

export default UpcomingEvent