/* eslint-disable react/prop-types */
import React from 'react'

function UpcomingEventForm({uploadFunction,eventsForm,setEventsForm,border}) {

    const handleInputChange = (e)=>{
        setEventsForm({
            ...eventsForm,
            [e.target.name]:e.target.value
        })
    }
  return (
    <React.Fragment>
        <div>
            <form onSubmit={uploadFunction} action="" className=' flex flex-col gap-3 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Name of Event</span>
                    <input onChange={handleInputChange} name='event_name' value={eventsForm.event_name} className={`${border&& eventsForm.event_name.length==0?" border-2 border-red-500":""} outline-none rounded-md px-2 py-1`}  type="text" placeholder='Event Name'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Date of Event</span>
                    <input onChange={handleInputChange} name='event_date' value={eventsForm.event_date} className={`${border&& eventsForm.event_date.length==0?" border-2 border-red-500":""} outline-none rounded-md px-2 py-1`}  type={'date'}  placeholder='Events Date'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Time</span>
                    <input onChange={handleInputChange} name='event_time' value={eventsForm.event_time} className={`${border&& eventsForm.event_date.length==0?" border-2 border-red-500":""} outline-none rounded-md px-2 py-1`}  type={"time"}  placeholder='Events Time'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Location</span>
                    <input onChange={handleInputChange} name='event_location' value={eventsForm.event_location} className={`${border&& eventsForm.event_location.length==0?" border-2 border-red-500":""} outline-none rounded-md px-2 py-1`}  type={"text"}  placeholder='Events Location'/>
                </label>
                <label htmlFor="" className=' flex flex-col'>
                    <span className=' font-semibold py-1'>Description</span>
                    <textarea  onChange={handleInputChange} className={`${border&& eventsForm.event_description.length==0?" border-2 border-red-500":""} outline-none rounded-md px-2 py-1`} value={eventsForm.event_description} name="event_description" id="" placeholder='Events Description'/>
                </label>
            </form>
        </div>
    </React.Fragment>
  )
}

export default UpcomingEventForm