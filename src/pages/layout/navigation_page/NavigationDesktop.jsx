import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationDesktop() {

  const links_to_pages = [{
    page_link:"/",
    page:'home'
  },{
    page_link:"/events",
    page:'events'
  },{
    page_link:"/about",
    page:'about'
  },{
    page_link:"/contact",
    page:'contact'
  }]


  return (
    <React.Fragment>
        <div>
          <section className=' capitalize text-base font-medium flex text-white gap-6 py-4'>
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