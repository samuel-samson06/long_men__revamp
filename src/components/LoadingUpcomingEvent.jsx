import React from 'react'

function LoadingUpcomingEvent() {
  return (
    <React.Fragment>
        <div className=' py-4  min-[550px]:flex-row min-[550px]:h-fit min-[550px]:relative justify-around md:justify-evenly  px-5 flex flex-col items-center gap-6'>
            <p className=' md:w-72 w-60 h-[250px]  mb-2 text-transparent rounded-md animate-pulse bg-gray-100 font-semibold text-lg text-center md:text-xl underline'>Next Event</p>
            <section className=' max-md:w-full w-2/5 py-6 rounded-md px-5 bg-gray-300 '>
              <p className=' mb-2 text-transparent rounded-md animate-pulse bg-gray-100 font-semibold text-lg text-center md:text-xl underline'>Next Event</p>
              <main className=' flex flex-col gap-2'>
                <p className='bg-gray-100 w-1/2 rounded-md animate-pulse text-transparent font-semibold md:text-lg'>Date:</p>
                <p className='bg-gray-100 w-1/2 rounded-md animate-pulse text-transparent font-semibold md:text-lg'>Time: </p>
                <p className='bg-gray-100 w-1/2 rounded-md animate-pulse text-transparent font-semibold md:text-lg'>Location:</p>
                <p className='bg-gray-100 w-1/2 rounded-md animate-pulse text-transparent font-semibold md:text-lg'>Location:</p>
                <p className='bg-gray-100 w-1/2 rounded-md animate-pulse text-transparent font-semibold md:text-lg'>Description:</p>
              </main>
            </section>
          </div>
    </React.Fragment>
  )
}

export default LoadingUpcomingEvent