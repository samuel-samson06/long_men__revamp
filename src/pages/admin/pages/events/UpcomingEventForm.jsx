import React, { useState } from 'react'

function UpcomingEventForm() {

    const [eventsForm, setEventsForm] = useState({event_name:"",event_date:"",event_time:"",event_location:"",event_description:""})
    const {event_name,event_time,event_description,event_date,event_location} = eventsForm

    const handleInputChange = (e)=>{
        setEventsForm({
            ...eventsForm,
            [e.target.name]:e.target.value
        })
    }
  return (
    <React.Fragment>
        <div>
            <form action="" className=' flex flex-col gap-3 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Name of Event</span>
                    <input onChange={handleInputChange} name='event_name' value={event_name} className=' px-2 py-1'  type="text" placeholder='Event Name'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Date of Event</span>
                    <input onChange={handleInputChange} name='event_date' value={event_date} className=' px-2 py-1'  type={'date'}  placeholder='Events Date'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Time</span>
                    <input onChange={handleInputChange} name='event_time' value={event_time} className=' px-2 py-1'  type={"time"}  placeholder='Events Time'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Location</span>
                    <input onChange={handleInputChange} name='event_location' value={event_location} className=' px-2 py-1'  type={"text"}  placeholder='Events Location'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Description</span>
                    <textarea  onChange={handleInputChange} className=' px-2 py-1' value={event_description} name="event_description" id="" placeholder='Events Description'/>
                </label>
            </form>
        </div>
    </React.Fragment>
  )
}

export default UpcomingEventForm