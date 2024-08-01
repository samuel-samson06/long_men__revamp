/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function EventBanner() {
  return (
    <React.Fragment>
        <div className=' h-[300px] sm:h-[450px] md:h-[550px] relative'>
            <div className={` bg-[url(assets/event_pageImg.jpg)] bg-cover relative bg-no-repeat w-full h-full border-t-2 border-white`}>
                <section className='  bg-black bg-opacity-80 justify-center items-center  text-white text-base absolute w-full h-full px-3 py-4 flex flex-col  gap-5'>
                    <h1 className=' text-center font-semibold text-2xl'>Events</h1>
                    <main className=' text-center items-center flex flex-col justify-center italic font-normal capitalize space-y-2 w-full'>
                        <span className=' font-semibold py-1'>Experience the art of fine living.</span>
                        <span> We're more than a brand - we&apos;re a lifestyle movement, Join our inner circle and dsicover.</span>
                    </main>
                </section>
            </div>
        </div>
    </React.Fragment>
  )
}

export default EventBanner