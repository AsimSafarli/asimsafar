import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

function Layout() {
    const location = useLocation();  

    return (
      <div className='flex flex-col gap-y-10 items-center justify-center'>
          <Navbar/>
          {location.pathname === "/" && <HomePage />} 
          <Outlet/>
          <Footer/>
   </div>
  )
}

export default Layout
