import React from 'react'
import logo from "../../assets/logo.png"
import Navigation from "./Navigation"
import NavigationPhone from './navigation_page/NavigationPhone'
function Header() {
  return (
    <React.Fragment>
        <div>
            <NavigationPhone/>
            <div className=' flex justify-between items-center border-b-2 border-white py-2 px-4 bg-[#131b34]'>
                <section>
                    <img  src={logo} className=' w-32' alt="Long men Logo" />
                </section>
                <section>
                    <Navigation/>
                </section>
            </div>
        </div>
        
    </React.Fragment>
  )
}

export default Header