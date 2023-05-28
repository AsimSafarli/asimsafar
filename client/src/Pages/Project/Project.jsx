import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function Project() { 
    const {t} =useTranslation()
  return (
    <div>
       <Helmet>
            <title>{t('title.project')}</title>
      </Helmet>
      Proyekt Page
    </div>
  )
}

export default Project
