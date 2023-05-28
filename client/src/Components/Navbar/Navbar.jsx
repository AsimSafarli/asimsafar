import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? 'dark' : 'light';
  const toggleIcon = isDarkMode ? faSun : faMoon;
  document.documentElement.className = theme;

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <nav className='flex flex-row items-center justify-around p-10  gap-x-10 '>
        <Link to='/'>asimsafar</Link>
        <ul className='flex flex-row items-center  gap-x-10'>
         
          <li>
            <NavLink to='/project'>{t('navbar.projects')}</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>{t('navbar.blog')}</NavLink>
          </li>
          <li>
            <NavLink to='/about'>{t('navbar.about')}</NavLink>
          </li>
          <li className='flex flex-row gap-x-3'>
            <button
              onClick={() => handleChangeLanguage('az')}
              className='light w-8 h-max text-slate-50'
            >
              Az
            </button>
            <button
              onClick={() => handleChangeLanguage('en')}
              className='light w-8 h-max text-slate-50'
            >
              En
            </button>
          </li>
          <li>
            <button className='dark-mode-toggle' onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={toggleIcon} className='dark-mode-icon' />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
