import React from 'react'
import logo from "../../assets/logo.png"
import Navigation from "./Navigation"
import NavigationPhone from './navigation_page/NavigationPhone'
import NavigationDesktop from './navigation_page/NavigationDesktop'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <React.Fragment>
        <div>
            <span className=' md:hidden'><NavigationPhone/></span>
            <div className=' flex justify-between items-center border-b-2 border-white py-2 px-4 bg-[#131b34]'>
                <section>
                    <NavLink to={"/"}>
                        <img  src={logo} className=' w-28 sm:w-32' loading='lazy' alt="Long men Logo" />
                    </NavLink>
                </section>
                <section>
                    <span className=' md:hidden'><Navigation/></span>
                    <span className=' max-md:hidden'><NavigationDesktop/></span>
                </section>
            </div>
        </div>
        
    </React.Fragment>
  )
}

export default Header