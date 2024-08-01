import React from 'react'
import balvenie from "../../assets/balvenie.jpg"

function Brands() {
  return (
    <React.Fragment>
        <div className='  bg-gray-200 rounded-t-md px-2 py-4'>
            <h1 className=' text-center text-lg font-semibold py-2'>Ambassador of The Balvenie</h1>
            <section className=' md:flex-row md:items-center md:gap-10 md:justify-center flex flex-col gap-3 items-center text-center'>
                <article className=' md:w-60 md:text-lg md:leading-7  text-sm font-semibold'>
                    Savor the rich flavors of our single malt scotch whisky, expertly crafted by William Grant & Sons. Please enjoy in moderation
                </article>
                <main>
                    <img className=' w-56' src={balvenie} alt="Balvenie Whisky"/>
                </main>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Brands
