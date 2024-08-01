/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import image1 from "../../assets/focus_art.jpg"
import image2 from "../../assets/focus_elvis.jpg"
import image3 from "../../assets/focus_lotana.jpg"

function Focus() {
  return (
    <React.Fragment>
        <div className='text-center flex flex-col gap-4 bg-[#f0eeee] px-3 py-3'>
            <p className=' text-xl font-semibold underline'>Focus</p>
        </div><br />
        <div className=' md:flex-row md:items-center md:justify-evenly py-2  flex flex-col items-center gap-7 px-3 '>
            <section className=' w-fit relative '>
                <p className=' rounded-md bg-black bg-opacity-60 flex items-center justify-center text-white text-center absolute w-full h-full top-0 left-0 uppercase font-semibold text-lg'>Art</p>
                <img src={image1} alt="" className=' min-[430px]:w-80 min-[560px]:w-[390px] w-64 md:w-72  rounded-md' loading='lazy' />
            </section>
            <section className=' w-fit relative '>
                <p className=' rounded-md bg-black bg-opacity-60 flex items-center justify-center text-white text-center absolute w-full h-full top-0 left-0 uppercase font-semibold text-lg'>Whisky</p>                
                <img src={image3} alt="" className=' min-[430px]:w-80 min-[560px]:w-[390px] w-64 md:w-72  rounded-md' loading='lazy' />
            </section>
            <section className=' w-fit relative '>
                <p className=' rounded-md bg-black bg-opacity-60 flex items-center justify-center text-white text-center absolute w-full h-full top-0 left-0 uppercase font-semibold text-lg' >Cigars</p>
                <img src={image2} alt="" className=' min-[430px]:w-80 min-[560px]:w-[390px] w-64 md:w-72  rounded-md' loading='lazy' />
            </section>
        </div><br />
    </React.Fragment>
  )
}

export default Focus