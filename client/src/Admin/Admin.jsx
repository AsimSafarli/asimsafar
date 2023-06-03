import React from 'react'
import { Helmet } from 'react-helmet'
import DashBoard from './DashBoard/DashBoard'
import Person from './Person/Person'
import { Outlet, useLocation } from 'react-router-dom'

function Admin() {
  const location=useLocation()
  return (
    <div className='flex flex-row justify-around items-center h-max'>
        <Helmet>
            <title>Admin Panel</title>
        </Helmet>
      <DashBoard/>
      {location.pathname === "/dashboard" && <Person />} 
      <Outlet/>
    </div>
  )
}

export default Admin
