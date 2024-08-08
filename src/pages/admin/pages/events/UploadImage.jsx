import React, { useState } from 'react'

function UploadImage() {
  const [fileImage, setFileImage ] = useState('')


  function handleDisplayImagePreview(e){
    setFileImage(URL.createObjectURL(e.target.files[0]));
  }
  const cancelImagePreview = ()=>{
    setFileImage('')
  }

  return (
    <React.Fragment>
        <div>
            <form action="" className='  flex flex-col gap-3 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
                {fileImage.length!=0 && <div className=' relative flex items-center justify-center'>
                  <button onClick={cancelImagePreview} className=' absolute top-3 left-2 bg-gray-300 py-1 px-2  rounded-md font-semibold'>Cancel</button>
                  <img src={fileImage} alt={fileImage} className=" w-56 rounded-md" />
                </div>}
                <p className=' text-center font-semibold'>Upload Event Flyer</p>
                <input onChange={handleDisplayImagePreview} type="file" accept={"image/*"} name="" className=' file:w-full file:py-1 text-transparent ' />
            </form>
        </div>
    </React.Fragment>
  )
}

export default UploadImage