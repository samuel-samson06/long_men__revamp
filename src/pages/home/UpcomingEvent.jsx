import React, { useState } from 'react'
import upcoming_event from "../../assets/event4.webp"
import "react-datepicker/dist/react-datepicker.css"
import Calendar from 'react-calendar'
import "react-calendar/dist/Calendar.css"

function UpcomingEvent() {
  const [date, setdate] = useState(new Date("2023-10-26"))
  return (
    <React.Fragment>
      <div>
        <p className=' py-3 underline font-semibold text-center text-xl'>Upcoming Event</p>
        <div className=' px-5 flex items-center flex-col gap-5'>
          <img src={upcoming_event} alt=""  loading={"lazy"}/>
          <Calendar value={date} onChange={()=> null} minDate={null} maxDate={null}/>
        </div>
      </div><br />
    </React.Fragment>
  )
}

export default UpcomingEvent