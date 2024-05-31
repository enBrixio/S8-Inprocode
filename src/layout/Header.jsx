import React from 'react';
import { useTranslation } from 'react-i18next';
import uk from '../assets/united-kingdom.webp';
import spain from '../assets/spain.webp';
import catalonia from '../assets/flag.webp';
import china from '../assets/chino.webp'; // Agrega esta línea

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className='py-5 lg:py-10 px-4'>
<div className='flex gap-2 justify-center lg:justify-end'>
  <button
    className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
    onClick={() => changeLanguage('en')}
    aria-label="Change language to English"
  >
    <img src={uk} alt="UK Flag" className='h-12 w-12'/>
  </button>
  <button
    className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
    onClick={() => changeLanguage('es')}
    aria-label="Change language to Spanish"
  >
    <img src={spain} alt="Spain Flag" className='h-12 w-12'/>
  </button>
  <button
    className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
    onClick={() => changeLanguage('ca')}
    aria-label="Change language to Catalan"
  >
    <img src={catalonia} alt="Catalonia Flag" className='h-12 w-12'/>
  </button>
  <button
    className='h-12 w-12 hover:scale-125 transition-transform duration-500 cursor-pointer'
    onClick={() => changeLanguage('ch')}
    aria-label="Change language to Chinese"
  >
    <img src={china} alt="China Flag" className='h-12 w-12'/>
  </button>
</div>
    </header>
  );
}

export default Header;






