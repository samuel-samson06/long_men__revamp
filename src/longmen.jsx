import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Event from "./pages/event/Event"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Layout from './pages/layout/Layout'
import AdminLayout from './pages/admin/layout/AdminLayout'
import MediaUpload from "./pages/admin/pages/media/MediaUpload"
import Partners from "./pages/admin/pages/media/Partners"
import AdminDashboard from './pages/admin/pages/dashboard/AdminDashboard'
import UpcomingEvent from './pages/admin/pages/events/UpcomingEvent'

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
            <Route path='/admin' element={<AdminLayout/>}>
              <Route index path='dashboard' element={<AdminDashboard/>}/>
              <Route path='media-upload' element={<MediaUpload/>}/>
              <Route path='events' element={<UpcomingEvent/>}/>
              <Route path='partners' element={<Partners/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default longmen

// bg-[#131b34]- Base Colour