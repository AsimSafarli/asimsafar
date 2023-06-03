import React from 'react'
import { NavLink } from 'react-router-dom'

function Blog() {
  return (
    <div className='flex flex-col gap-y-10'>
 <div className='flex flex-row justify-around items-center'>
    <div>Blog</div>
    <div className='border-2 border-purple-900 w-96'></div>
     <div><NavLink to='blog'>View all of them</NavLink></div>
    </div>   
    <div className='flex flex-row justify-around items-center gap-x-5'>
    <div className='flex flex-row items-center justify-around border-2 border-purple-800 rounded-3xl w-1/3 h-max p-3'>
      <div><img src='Assets/Group.png' className='w-10 h-16'/></div>
      <div>Title</div>
      <div>Read the more</div>
    </div>
    <div className='flex flex-row items-center justify-around border-2 border-purple-800 rounded-3xl w-1/3 h-max p-3'>
      <div><img src='Assets/Group.png' className='w-10 h-16'/></div>
      <div>Title</div>
      <div>Read the more</div>
    </div>
    </div> 
    
    </div>
    
  )
}

export default Blog
