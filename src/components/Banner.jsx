/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

function Banner({banner_link,write_up_header,write_up,link_trigger,header}) {
  return (
    <React.Fragment>
        <div className={` bg-[url(${banner_link})] bg-cover bg-no-repeat w-full border-t-2 border-white`}>
            <section className=' bg-black bg-opacity-80 text-white text-base w-relative px-3 py-4 flex flex-col gap-5'>
                <h1 className=' font-semibold text-2xl'>{header}</h1>
                <main className=' italic font-normal capitalize space-y-2 w-full'>
                    <span className=' font-semibold py-1'>{write_up_header}</span><br />
                    {write_up}
                </main>
                <aside>
                    <NavLink to={"/about"}>{link_trigger&&
                    <section className=' font-semibold text-lg bg-[#131b34] w-fit px-2 py-1 rounded-md'>
                        About Us
                    </section>}
                    </NavLink>
                </aside>
            </section>
        </div>
    </React.Fragment>
  )
}

export default Banner