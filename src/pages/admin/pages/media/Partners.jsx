import React from 'react'

function Partners() {
  return (
    <React.Fragment>
        <div className=' py-6 flex flex-col gap-2 lg:px-10'>
          <form action="" className=' flex flex-col gap-5 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
            <label htmlFor="" className=' flex flex-col'>
              <span className=' font-semibold py-1'>Brand Name</span>
                <input className=' px-2 py-1'  type="text" placeholder='Brand Name'/>
              </label>
            <label htmlFor="" className=' flex flex-col'>
              <span className=' font-semibold py-1'>Brand Description</span>
                <textarea  className=' px-2 py-1' name="" id="" placeholder='Brand Description'/>
            </label>
            <label className=' text-center font-semibold flex flex-col gap-2'> 
              <span className=' font-semibold'>Upload Partner</span> 
              <input type="file" accept={"image/*"} name="" className=' file:w-[95%] file:py-1 text-transparent ' />
            </label>
          </form>
          <section className=' flex items-center justify-center'>
            <button className=' bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload Partner</button>
          </section>
        </div>   
    </React.Fragment>
  )
}

export default Partners