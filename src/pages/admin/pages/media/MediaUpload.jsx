import React, { useState } from 'react'
import { uploadImages } from '../../firebase'

function MediaUpload() {
  const [file, setFile] = useState("")
  const [imagePreview, setImagePreview] = useState("")

  const handleUpload = (e)=>{
    e.preventDefault()
    uploadImages(file)
    console.log(file);
    setFile("")
    setImagePreview("")
  }

  const cancelImagePreview = ()=>{
    setImagePreview('')
    setFile('')
  }

  const handleFile = (e)=>{
    setImagePreview(URL.createObjectURL(e.target.files[0]))
    setFile(e.target.files[0])
  }
  return (
    <React.Fragment>
      <div className=' lg:px-10 py-6 flex flex-col gap-2'>
        <form  action="" className='  flex flex-col gap-3 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
          <p className=' text-center font-semibold'>Upload Flyers </p>
          <input onChange={handleFile} type="file" accept={"image/*"} name="" className=' file:w-full file:py-1 text-transparent ' />
        </form>
        <section className=' flex items-center justify-center'>
          <button onClick={handleUpload} className=' bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload</button>
        </section>
        {imagePreview.length!=0 && <div className=' relative flex items-center justify-center'>
                  <button onClick={cancelImagePreview} className=' absolute top-3 left-2 bg-gray-300 py-1 px-2  rounded-md font-semibold'>Cancel</button>
                  <img src={imagePreview} alt={imagePreview} className=" w-56 rounded-md" />
                </div>}
      </div>
    </React.Fragment>
  )
}

export default MediaUpload