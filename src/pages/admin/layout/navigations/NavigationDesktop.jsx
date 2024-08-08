import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationDesktop() {
  const links_to_pages = [{
    page_link:"dashboard",
    page:'dashboard'},
    {page_link:"events",
      page:'events'},
    {page_link:"media-upload",
      page:'media upload'},
    {page_link:"partners",
      page:'partners'}]

  return (
    <React.Fragment>
      <div>
      <section className=' md:h-9 md:text-xl md:gap-6 md:pt-10 max-md:hidden capitalize text-base font-medium flex flex-col md:px-5 text-white gap-6 py-4'>
            {
              links_to_pages.map((eachLink,index)=>{
                return(
                  <div key={index+"##"}>
                    <NavLink to={`${eachLink.page_link}`}>
                      {eachLink.page}
                    </NavLink>
                  </div>
                )
              })
            }
          </section>
      </div>
    </React.Fragment>
  )
}

export default NavigationDesktop