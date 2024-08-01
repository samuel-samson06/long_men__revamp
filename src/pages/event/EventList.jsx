import React from 'react'
import event3 from "../../assets/event3.jpg"
import event2 from "../../assets/event2.jpg"
import event4 from "../../assets/event4.webp"

const event_images = [
    {image:event2,id:"234"},
    {image:event3,id:"123"},
    {image:event4,id:"345"}
]


function EventList() {
    return (
    <React.Fragment>
        <div>
            <h1 className=' italics font-semibold text-center px-2 py-2'>Cheers to the art of living well!</h1>  
        </div>
       <div className=' bg-gray-200 px-2 flex flex-col md:justify-evenly md:flex-row gap-6 items-center py-5'>
        {
            event_images.map(function(image){
                return (
                    <section key={image.id}>
                        <img className='rounded-md min-[430px]:w-60 min-[560px]:w-72 md:w-64 w-52' src={image.image} alt="Events" />
                    </section>
                )
            })
        }
       </div>
    </React.Fragment>
  )
}

export default EventList
