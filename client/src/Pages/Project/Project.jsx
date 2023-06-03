import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
function Project() { 
    const {t} =useTranslation()
  return (
    <div>
       <Helmet>
            <title>{t('title.project')}</title>
      </Helmet>
      <div className='flex flex-col gap-y-5'>
    <div className='flex flex-row justify-around items-center'>
    <div>Project</div>
    <div className='border-2 border-sky-900 w-96'></div>

    </div>
<div className='flex flex-row justify-around gap-x-10'>
      <div className='flex flex-col gap-y-5 p-3 border-2 border-sky-900 w-max h-max'>
      <div className='flex flex-col gap-y-3'>
        <div><img src='Assets/blog.jpg' className='w-72'/></div>
        <div className='flex flex-col gap-y-5'>
        <div className='flex items-center justify-center border-2 border-sky-900 p-2'>React,Exprees,MongoDb</div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex items-center justify-start text-3xl'>ChertNodes</div>
          <div className='flex items-center justify-start text-gray-400'>Minecraft servers hosting </div>
          <div className='flex items-center justify-start w-max h-max p-2 bg-slate-50 text-sky-900  hover:border-2 hover:border-sky-900  hover:text-sky-900'><button>Github Source</button></div>
        </div>
        </div>
     
      </div>
    </div>
    <div className='flex flex-col gap-y-5 p-3 border-2 border-sky-900 w-max h-max'>
      <div className='flex flex-col gap-y-3'>
        <div><img src='Assets/blog.jpg' className='w-72'/></div>
        <div className='flex flex-col gap-y-5'>
        <div className='flex items-center justify-center border-2 border-sky-900 p-2'>React,Exprees,MongoDb</div>
        <div className='flex flex-col gap-y-3'>
          <div className='flex items-center justify-start text-3xl'>ChertNodes</div>
          <div className='flex items-center justify-start text-gray-400'>Minecraft servers hosting </div>
          <div className='flex items-center justify-start w-max h-max p-2 bg-slate-50 text-sky-900  hover:border-2 hover:border-sky-900  hover:text-sky-900'><button>Github Source</button></div>
        </div>
        </div>
     
      </div>
    </div>
    </div>
    </div>
    
    </div>
  )
}

export default Project
