import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../../../Context/Context'
import logo from "../../../../assets/logo.png"

function NavigationMobile() {
    const {toggleAdminNavBar,setAdminNavBar} = useContext(Context)
    
    const links_to_pages = [{
        page_link:"dashboard",
        page:'dashboard'
    },{
        page_link:"events",
        page:'events'
    },{
        page_link:"media-upload",
        page:'media upload'
    },{
        page_link:"partners",
        page:'partners'
    }]

    return(
        <React.Fragment>
        <motion.div 
        variants={{
        initial:{
            x:-500
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
        initial="initial" animate={toggleAdminNavBar?"animate":'exit'} className=' md:hidden z-10 fixed px-2 py-3 text-white border-r-2 border-white bg-[#131b34] w-3/4 h-screen overflow-scroll'>
        <section>
            <img src={logo} className=' w-24 py-3' alt="logo" />
        </section>
        <section className=' capitalize text-base font-medium flex flex-col gap-5 py-4'>
            {
            links_to_pages.map((eachLink,index)=>{
                return(
                <div onClick={()=>{setAdminNavBar(false)}}  key={index+"##"}>
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

export default NavigationMobile