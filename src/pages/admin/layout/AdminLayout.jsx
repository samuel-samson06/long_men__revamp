import React, { useEffect } from 'react'
import Navigation from './Navigation'
import { Outlet, useNavigate } from 'react-router'
import logo from "../../../assets/logo.png"
import { NavLink } from 'react-router-dom'
import NavigationMobile from './navigations/NavigationMobile'

function AdminLayout() {
  const navigate = useNavigate()

  useEffect(()=>{
    navigate("dashboard")
  },[])

  return (
    <React.Fragment>
      <section>
              {/* This is the NavBar Component To Display All the Pages in The Admin Panel */}
              <NavigationMobile/>
            </section>
      <div className=' md:flex-row flex flex-col'>
        <header className='md:h-screen md:flex-col md:justify-normal md:items-start  md:w-2/5 lg:w-1/4  flex justify-between items-center border-b-2 border-white py-2 px-4 bg-[#131b34]'>
            <section>
              <NavLink to={"dashboard"}>
                <img  src={logo} loading='lazy' className=' w-28 sm:w-32' alt="Long men Logo" />
              </NavLink>
            </section>

          <Navigation/>
        </header>
        <main className='md:py-5 md:h-screen md:overflow-y-scroll md:w-3/5 lg:w-3/4'>
          <Outlet/>
        </main>
      </div>
    </React.Fragment>
  )
}

export default AdminLayout