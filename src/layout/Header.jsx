import React from 'react';
import { useTranslation } from 'react-i18next';
import uk from '../assets/united-kingdom.webp';
import spain from '../assets/spain.webp';
import catalonia from '../assets/flag.webp';

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className='py-5 lg:py-10 px-4'>
      <div className='flex gap-2 justify-center lg:justify-end'>
        <img
          className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
          src={uk}
          alt="UK Flag"
          onClick={() => changeLanguage('en')}
        />
        <img
          className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
          src={spain}
          alt="Spain Flag"
          onClick={() => changeLanguage('es')}
        />
        <img
          className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
          src={catalonia}
          alt="Catalonia Flag"
          onClick={() => changeLanguage('ca')}
        />
      </div>
    </header>
  );
}

export default Header;





