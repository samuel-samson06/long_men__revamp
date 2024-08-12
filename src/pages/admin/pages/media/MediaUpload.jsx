import React, { useEffect, useState } from 'react'
import { deleteImage, listAllUploadedImages, uploadImages } from '../../firebase'
import { getImg } from '../../utils/getExactImage';

function MediaUpload() {
  const [file, setFile] = useState("")
  const [imagePreview, setImagePreview] = useState("")
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

const handleDeleteImage = (image_id)=>{
  const id_image = eventList.filter((id)=> id.id==image_id)
  const img = getImg(id_image)
  deleteImage(img[0])
}

  const handleUpload = (e)=>{
    e.preventDefault()
    if(file!==""){
      uploadImages(file)
      setFile("")
      setImagePreview("")
    }else{
      alert("Select An Image To Upload")
    }
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
        <div className=" rounded-md bg-gray-200 px-2 grid grid-cols-2 md:grid-cols-3 md:justify-evenly md:flex-row gap-8  items-center py-5">
          {eventList.length === 0 ? (
            <p>...</p>
          ) : (
            eventList.map((img) => (
              <section className=' flex gap-3 flex-col items-center ' key={`${img.id}-event`}>
                <img
                  className="rounded-md min-[430px]:size-60 min-[560px]:size-72 md:size-64 size-52"
                  loading="lazy"
                  src={img.img}
                  alt="Events"
                />
                <button onClick={()=>{
                  handleDeleteImage(img.id)
                }} className=" text-white text-lg px-2 font-semibold bg-red-600 rounded-md py-1">Delete</button>
              </section>
            ))
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default MediaUpload