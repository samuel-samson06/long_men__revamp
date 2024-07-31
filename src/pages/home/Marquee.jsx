/* eslint-disable react/no-unknown-property */
import React from 'react'

function Marquee() {
  return (
    <React.Fragment>
        <div className=' flex w-screen bg-gray-300'>
            <p className=' w-2/5 border-r-[1px] border-white font-semibold text-center bg-[#131b34] text-white'>Upcoming</p>
            <marquee className=" bg-gray-300  text-black font-semibold font-serif">Engage Your Senses</marquee>
        </div>
    </React.Fragment>
  )
}

export default Marquee