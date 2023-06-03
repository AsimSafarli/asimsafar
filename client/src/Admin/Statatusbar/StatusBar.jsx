import React from 'react'
import { Link } from 'react-router-dom'

function StatusBar() {
  return (
    <div className='flex flex-col items-center justify-center p-5'>
    <div>asimsafar</div>
    <div><Link to='/dashboard'><ion-icon name="person"></ion-icon></Link></div>
    <div><Link to='/dashboard/blog'><ion-icon name="paper"></ion-icon></Link></div>
    <div><Link to='/dashboard/project'><ion-icon name="bookmarks"></ion-icon></Link></div>
    </div>
  )
}

export default StatusBar