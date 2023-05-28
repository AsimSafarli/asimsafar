import React from 'react'
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

  return (
    <footer className='flex flex-col gap-y-5'>
        <div className=' flex flex-row items-center justify-around gap-x-10'>
        <div>{t('footer.header')}</div>
        <ul className='flex flex-row items-center gap-x-10'>
            <li><a href='https://www.instagram.com/asafarlidev/'><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href='https://www.facebook.com/asim.seferli.18'><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href='https://www.linkedin.com/in/asim-seferli-272164202/'><ion-icon name="logo-linkedin"></ion-icon></a></li> 
            <li><a href='https://github.com/AsimSafarli'><ion-icon name="logo-github"></ion-icon></a></li>
        </ul>
        </div>
        <div className='flex items-center justify-center'>
        {t('footer.descrb')}
        </div>
    </footer>
  )
}

export default Footer
