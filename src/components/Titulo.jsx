import React from 'react';
import { useTranslation } from 'react-i18next';

function Titulo() {
  const { t } = useTranslation();
  return (
    <h1 className="text-center font-bold text-xl">{t('main.costes')} - {t('main.semana')}</h1>
  );
}

export default Titulo;


