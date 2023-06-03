import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Project from '../../Components/Project/Project'
import Blog from '../../Components/Blog/Blog'
import Contact from '../../Components/Contact/Contact'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import About from '../../Components/About/About'

function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-y-20'>
        <Helmet>
          <title>{t("title.homepage")}</title>
        </Helmet>
      <Banner/>
      <Project/>
      <Blog/>
      <About/>
      <Contact/>
    </div>
  )
}

export default HomePage
