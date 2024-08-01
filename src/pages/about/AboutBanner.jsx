import React from 'react'

function AboutBanner() {
  return (
    <React.Fragment>
        <div className=' h-[300px] sm:h-[450px] md:h-[550px] relative'>
            <div className={` bg-[url(assets/aboutBg.jpg)] bg-cover relative bg-no-repeat w-full h-full border-t-2 border-white`}>
                <section className='  bg-black bg-opacity-80 justify-center items-center  text-white text-base absolute w-full h-full px-3 py-4 flex flex-col  gap-5'>
                    <main className=' text-center italic font-normal capitalize space-y-2 w-full'>
                        <span className=' font-semibold py-1'>At Longmen</span><br />
                        <span className=' '>Our  brand is dedicated to crafting moments of warmth, connection and beauty through
                            the perfect smoke, the comfort of fine tumblers or the magic of shared experience 
                        </span>
                        <br />
                    </main>
                </section>
            </div>
        </div>
    </React.Fragment>
  )
}

export default AboutBanner