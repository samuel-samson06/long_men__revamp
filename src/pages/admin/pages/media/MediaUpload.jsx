import React from 'react'

function MediaUpload() {
  return (
    <React.Fragment>
      <div className=' lg:px-10 py-6 flex flex-col gap-2'>
        <form action="" className='  flex flex-col gap-3 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
          <p className=' text-center font-semibold'>Upload Flyers </p>
          <input type="file" accept={"image/*"} name="" className=' file:w-full file:py-1 text-transparent ' />
        </form>
        <section className=' flex items-center justify-center'>
          <button className=' bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload</button>
        </section>
      </div>
    </React.Fragment>
  )
}

export default MediaUpload