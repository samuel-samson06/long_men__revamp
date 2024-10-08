import React from 'react'
import Header from "./Header"
import { Outlet } from 'react-router'
import Footer from "./Footer"

function Layout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            <header>
                <Header/>
            </header>
            <main className=' flex-grow'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    </React.Fragment>
  )
}

export default Layout