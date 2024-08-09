import React,{useEffect, useState} from 'react'
import { createPartner } from '../../firebase';

function Partners() {
  const [brand, setBrand] = useState({brand_name:"", description:"",imageUrl:""});
  const [file,setFile] = useState("")
  const [imagePreview,setImagePreivew] = useState("")
  const [inputFieldEmpty, setInputFieldEmpty] = useState(false)

  const submitUpload = (e)=>{
    if(brand.brand_name.length==0 || brand.description.length==0||imagePreview.length==0){
      console.log("Empty Fields")
      setInputFieldEmpty(true)
    }else{
      e.preventDefault()
      console.log(file);
      console.log(brand);
      setBrand({brand_name:"", description:"",imageUrl:""})
      setFile("")
      setImagePreivew("")
      createPartner(brand,file)
    }
  }

  
  useEffect(()=>{
    const border_timer = setTimeout(()=>{
      setInputFieldEmpty(false)
    },3000)

    return ()=>{
      clearTimeout(border_timer)
    }
  },[inputFieldEmpty])

  const handleInputChanges = (e)=>{
    e.preventDefault();
    setBrand({
      ...brand,
      [e.target.name]:e.target.value
    })

  }

  const cancelImagePreview = ()=>{
    setImagePreivew('')
    setFile('')
  }

  const handleFileSelected = (e)=>{
    setFile(e.target.files[0]);
    setImagePreivew(URL.createObjectURL(e.target.files[0]));
  }



  return (
    <React.Fragment>
        <div className=' py-6 flex flex-col gap-2 lg:px-10'>
          <form action="" className=' flex flex-col gap-5 pt-2 pb-4 bg-gray-100 mx-2  px-3 rounded-md'>
            <label htmlFor="" className=' flex flex-col'>
              <span className=' font-semibold py-1'>Brand Name</span>
                <input onChange={handleInputChanges} className={`${inputFieldEmpty?"border-2 border-red-500 rounded-md":" rounded-md"} outline-none px-2 py-1`} value={brand.brand_name} name="brand_name" type="text" placeholder='Brand Name'/>
              </label>
            <label htmlFor="" className=' flex flex-col'>
              <span className=' font-semibold py-1'>Brand Description</span>
                <textarea onChange={handleInputChanges}  className={`${inputFieldEmpty?"border-2 border-red-500 rounded-md":" rounded-md"} outline-none px-2 py-1`} value={brand.description} name="description" id="" placeholder='Brand Description'/>
            </label>
            <label className=' text-center font-semibold flex flex-col gap-2'> 
              <span className=' font-semibold'>Upload Partner</span> 
              {file.length!=0 && <div className=' relative flex items-center justify-center'>
                  <button onClick={cancelImagePreview} className=' absolute top-3 left-2 bg-gray-300 py-1 px-2  rounded-md font-semibold'>Cancel</button>
                  <img src={imagePreview} alt={file} className=" w-56 rounded-md" />
                </div>}
              <input type="file" onChange={handleFileSelected} accept={"image/*"} name="" className=' file:w-[95%] file:py-1 text-transparent ' />
            </label>
          </form>
          <section className=' flex items-center justify-center'>
            <button onClick={submitUpload} className=' bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload Partner</button>
          </section>
        </div>   
    </React.Fragment>
  )
}

export default Partners