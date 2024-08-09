// Upcoming Event Upload
import React, { useEffect, useState } from 'react'
import UpcomingEventForm from './UpcomingEventForm'
import UploadImage from './UploadImage'
import { upcoming_event } from '../../firebase'

function UpcomingEvent() {
  const [eventsForm, setEventsForm] = useState({event_name:"",event_date:"",event_time:"",event_location:"",event_description:""})
  const {event_name,event_time,event_description,event_date,event_location} = eventsForm
  const [fileImage, setFileImage ] = useState('')
  const [file, setFile ] = useState('')
  const [inputFieldEmpty, setInputFieldEmpty] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [uploadedMessage, setUploadedMessage] = useState("")
  useEffect(()=>{
    const border_timer = setTimeout(()=>{
      setInputFieldEmpty(false)
    },3000)

    return ()=>{
      clearTimeout(border_timer)
    }
  },[inputFieldEmpty])

  
  useEffect(()=>{
    const upload_timer = setTimeout(()=>{
      setUploaded(false)
    },3000)

    return ()=>{
      clearTimeout(upload_timer)
    }
  },[uploaded])



  const uploadFunction = (e)=>{
    e.preventDefault()
    if (fileImage.length==0 || event_name.length==0 || event_time.length==0 || event_description.length==0 || event_date.length==0 || event_location.length==0){
      setInputFieldEmpty(true)
    }else{
      const upcomingEvent =  async ()=>{
        try{
          const event = await upcoming_event(eventsForm,file);
          setUploadedMessage("Upload Successful")
          setUploaded(true)
          return event        
        }catch(error){
          setUploaded(true)
          setUploadedMessage("Upload Unsuccessful")
          console.log(error)
        }
      }
      // const check_update = async function(){
      //   try{
      //     const file_updated  = await upcoming_event(eventsForm);
      //     return file_updated;
      //   }catch(error){
      //     console.log(error)
      //   }
      // }
      
      // const check_image = async function(){
      //   try{
      //     const image_uploaded  = await uploadImage(file);
      //     return image_uploaded;
      //   }catch(error){
      //     console.log(error)
      //   }
      // }

      // check_update()
      // check_image()
      upcomingEvent()
      
      setEventsForm({event_name:"",event_date:"",event_time:"",event_location:"",event_description:""})
      setFileImage('')
      setFile('')
    }
  }
  return (
    <React.Fragment>
      <div className=' lg:px-10 py-6 flex flex-col gap-2'>
        <p className=' text-center font-semibold'>Next Event Upload</p>
        <section className=' flex flex-col gap-4'>
          <UpcomingEventForm eventsForm={eventsForm} border={inputFieldEmpty} setEventsForm={setEventsForm} uploadFunction={uploadFunction}/>
          <UploadImage fileImage={fileImage} setFile={setFile} setFileImage={setFileImage}/>
        </section>
        <section className=' flex flex-col items-center justify-center gap-4'>
          {inputFieldEmpty && <p className=" font-semibold text-lg md:text-xl lg:text-2xl  text-red-700">Provide Image and Details</p>}
          <button onClick={uploadFunction} className=' bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload</button>
          {uploaded&&<p className={`${uploaded?" text-green-600":"text-red-500"} text-lg md:text-xl lg:text-2xl`}>{uploadedMessage}</p>}
        </section>
      </div>
    </React.Fragment>
  )
}

export default UpcomingEvent