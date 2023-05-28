import React from 'react'
import Skills from '../../Components/Skills/Skills'
import Banner from '../../Components/Banner/Banner'
import Project from '../../Components/Project/Project'
import Blog from '../Blog/Blog'
import Contact from '../../Components/Contact/Contact'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
        <Helmet>
          <title>{t("title.homepage")}</title>
        </Helmet>

      <Banner/>
      <Skills/>
      <Project/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default HomePage
