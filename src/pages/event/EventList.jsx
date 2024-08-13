import React, { useEffect, useState } from 'react'
import event3 from "../../assets/event3.jpg"
import event2 from "../../assets/event2.jpg"
import event4 from "../../assets/event4.webp"
import { listAllUploadedImages } from '../admin/firebase'

const event_images = [
    {image:event2,id:"234"},
    {image:event3,id:"123"},
    {image:event4,id:"345"},
]



function EventList() {
    const [eventList, setEventList] = useState([]);

    useEffect(()=>{
        const images = async ()=>{
            try{
                const event_data = await listAllUploadedImages()
                setEventList(event_data);
            }catch(error){
                console.log(error)
            }
        }
        images()
        
    },[])

    return (
    <React.Fragment>
        <div className=' text-center px-2 py-2'>
            <h1 className=' italics font-semibold '>Cheers to the art of living well!</h1>  
        </div>
       <div className=' bg-gray-200 px-2 grid grid-cols-2 md:grid-cols-3 md:justify-evenly md:flex-row gap-6 items-center justify-center py-5'>
        {event_images.map(function(image){
                return (
                    <section className=' flex flex-col items-center justify-center
                    ' key={image.id}>
                        <img className='rounded-md min-[430px]:w-60 min-[560px]:w-72 md:w-64 w-52' loading='lazy' src={image.image} alt="Events" />
                    </section>
                )
            })
        }
       </div>
       <div className="bg-gray-200 px-2 grid grid-cols-2 md:grid-cols-3 md:justify-evenly md:flex-row gap-8  items-center py-5">
        {eventList.length === 0 ? (
          <p></p>
        ) : (
          eventList.map((img) => (
            <section className=' flex flex-col items-center justify-center
                    ' key={`${img.id}-event`}>
              <img
                className="rounded-md min-[430px]:size-60 min-[560px]:size-72 md:size-64 size-52"
                loading="lazy"
                src={img.img}
                alt="Events"
              />
            </section>
          ))
        )}
      </div>
    </React.Fragment>
  )
}

export default EventList
