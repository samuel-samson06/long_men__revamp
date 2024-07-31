import React, { useContext } from 'react'
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Context } from '../../../Context/Context'

function NavigationPhone() {
  const {toggleNavBar,setToggleNavBar} = useContext(Context)
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
        <motion.div 
        variants={{
          initial:{
            x:-1000
          },
          animate:{
            x:0,
            transition:{
              type:"tween"
            }
          },
          exit:{
            x:-1000
          }
        }}
        initial="initial" animate={toggleNavBar?"animate":'exit'} className=' z-10 fixed px-2 py-3 text-white border-r-2 border-white bg-[#131b34] w-3/4 h-screen overflow-scroll'>
          <section>
            <img src={logo} className=' w-24 py-3' alt="logo" />
          </section>
          <section className=' capitalize text-base font-medium flex flex-col gap-5 py-4'>
            {
              links_to_pages.map((eachLink,index)=>{
                return(
                  <div onClick={()=>{setToggleNavBar(false)}}  key={index+"##"}>
                    <NavLink to={`${eachLink.page_link}`}>
                      {eachLink.page}
                    </NavLink>
                  </div>
                )
              })
            }
            <p className=' text-center text-sm font-light'>&copy;Longmen Africa</p>
          </section>
        </motion.div>
    </React.Fragment>
  )
}

export default NavigationPhone