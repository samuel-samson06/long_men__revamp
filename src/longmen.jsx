import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Event from "./pages/event/Event"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Layout from './pages/layout/Layout'

function longmen() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route index path='/' element={<Home/>}/>
              <Route index path='/events' element={<Event/>}/>
              <Route index path='/about' element={<About/>}/>
              <Route index path='/contact' element={<Contact/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default longmen

// bg-[#131b34]- Base Colour