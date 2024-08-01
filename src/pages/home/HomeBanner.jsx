import React from 'react'
import { NavLink } from 'react-router-dom'

function HomeBanner() {
  return (
    <React.Fragment>
        <div className=' h-[300px] sm:h-[450px] md:h-[550px] relative'>
            <div className={` bg-[url(assets/home_pageImg.jpg)] bg-cover relative bg-no-repeat w-full h-full border-t-2 border-white`}>
                <section className='  bg-black bg-opacity-80 justify-center items-center  text-white text-base absolute w-full h-full px-3 py-4 flex flex-col  gap-5'>
                    <h1 className=' text-center font-semibold text-2xl '>Longmen Africa</h1>
                    <main className=' text-center items-center flex flex-col justify-center italic font-normal capitalize space-y-2 w-full'>
                        <span className=' font-semibold py-1'>Where exclisivity meets opportunity.</span>
                        <span>Enjoy luxury lifestyle events  and  strategic brand partnerships and private club memberships.</span>
                    </main>
                    <NavLink to={"/about"}>
                        <section className=' border-2 px-2 py-1 '>
                            About Us
                        </section>
                    </NavLink>
                </section>
            </div>
        </div>
    </React.Fragment>
  )
}

export default HomeBanner