import React,{useEffect, useState} from 'react'
import { createPartner, deletePartner, gettingPartners } from '../../firebase';

function Partners() {
  const [brand, setBrand] = useState({brand_name:"", description:"",imageUrl:""});
  const [file,setFile] = useState("")
  const [imagePreview,setImagePreivew] = useState("")
  const [inputFieldEmpty, setInputFieldEmpty] = useState(false)
  const [partnersList, setPartnersList] = useState([])


  const submitUpload = (e)=>{
    if(brand.brand_name.length==0 || brand.description.length==0||imagePreview.length==0){
      setInputFieldEmpty(true)
    }else{
      e.preventDefault()
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

  useEffect(()=>{
    const partner_data = async ()=>{
        try{
            const data = await gettingPartners()
            setPartnersList(data)
        }catch(error){
            console.log(error);
        }
    }
    partner_data()
},[])

  const handleInputChanges = (e)=>{
    e.preventDefault();
    setBrand({
      ...brand,
      [e.target.name]:e.target.value
    })

  }

  const handleDelete = async (id) => {
    try {
      await deletePartner(id);
    } catch (error) {
      console.error(`Error deleting partner with ID ${id}: ${error.message}`);
    }
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
            <button onClick={submitUpload} className='bg-[#131b34] px-4 py-1 font-semibold text-white rounded'>Upload Partner</button>
          </section>
        </div>
        <div className=' gap-5 py-5 flex flex-col items-center justify-center md:grid md:grid-cols-2 '>
        {
                partnersList.length==0?<p></p>:
                partnersList.map((each_partner,index)=>{
                    return(
                        <div key={index+"##$$"} className='  bg-gray-200 mx-10 my-2 rounded-t-md px-5 py-4'>
                            <h1 className=' text-center text-lg font-semibold py-2 px-1'>{each_partner.brand_name}</h1>
                            <section className=' md:items-center md:gap-10 md:justify-center flex flex-col gap-3 items-center text-center'>
                                <article className=' md:w-60 md:text-lg md:leading-7  text-sm font-semibold'>{each_partner.description}</article>
                                <main><img className=' w-56' loading='lazy' src={each_partner.imageUrl} alt={each_partner.brand_name}/></main>
                                <button className=' bg-red-500 text-white rounded-md py-1 px-2' onClick={()=>{handleDelete(each_partner.id)}}>Delete Partner</button>
                            </section>
                        </div>
                    )
                })
            }
        </div>   
    </React.Fragment>
  )
}

export default Partners