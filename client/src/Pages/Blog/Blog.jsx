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
Blog
    </div>
  )
}

export default Blog
