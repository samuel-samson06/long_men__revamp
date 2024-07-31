import React from 'react'

function AboutBanner() {
  return (
    <React.Fragment>
        <div className={` bg-[url(assets/aboutBg.jpg)] bg-cover bg-no-repeat w-full border-t-2 border-white`}>
            <section className=' bg-black bg-opacity-80 text-white text-base w-relative px-3 py-4 flex flex-col gap-5'>
                <h1 className=' text-center hidden font-semibold text-2xl font-serif'>About Us</h1>
                <main className=' text-center italic font-normal capitalize space-y-2 w-full'>
                    <span className=' font-semibold py-1'>At Longmen</span><br />
                    <span className=' '>We embrace the philosophy that life&apos;s true beauty lies in its slow, delibrate moments- much like the rich 
                        flavors of a finely aged whisky or the meticulous craftsmanship of a hand-rolled cigar.
                        Our brand is dedicated to crafting moments of warmth, connection and beauty through
                        the perfect smoke, the comfort of fine tumblers or the magic of shared experience 
                    </span>
                    <br />
                </main>
            </section>
        </div>
    </React.Fragment>
  )
}

export default AboutBanner