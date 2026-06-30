import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import OfflineStatus from '../components/OfflineStatus'
import ScrollToTopButton from '../components/ScrollToTopButton'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <OfflineStatus />
        <Outlet />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default MainLayout;
