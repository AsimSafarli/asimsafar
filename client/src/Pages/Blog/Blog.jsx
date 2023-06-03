import React from 'react'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next';
function Blog() {
  const { t } = useTranslation();
  return (
    <div>
       <Helmet>
            <title>{t('title.blog')}</title>
      </Helmet>
      <div className='flex flex-col gap-y-10'>
 <div className='flex flex-row justify-around items-center'>
    <div>Blog</div>
    <div className='border-2 border-sky-900 w-96'></div>
    </div>   
    <div className='flex flex-row justify-around items-center gap-x-5'>
    <div className='flex flex-row items-center justify-around  gap-x-5  border-2 border-purple-800 rounded-3xl w-max h-max p-3'>
      <div><img src='Assets/Group.png' className='w-10 h-16'/></div>
      <div className='flex flex-col gap-x-1'>
      <div>How to create React App</div>
      <div className='flex justify-end'>Read the more</div>
      </div>
      
    </div>
    <div className='flex flex-row items-center justify-around gap-x-5 border-2 border-purple-800 rounded-3xl w-max h-max p-3'>
      <div><img src='Assets/Group.png' className='w-10 h-16'/></div>
      <div className='flex flex-col gap-x-1'>
      <div>How to create React App</div>
      <div className='flex justify-end'>Read the more</div>
      </div>
    </div>
    </div> 
    
    </div>
    </div>
  )
}

export default Blog
