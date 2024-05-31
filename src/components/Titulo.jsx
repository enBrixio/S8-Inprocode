import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function Titulo() {
  const { t } = useTranslation();
  const currentWeek = useSelector((state) => state.balance.currentWeek);
  const maxWeek = useSelector((state) => state.balance.data.length - 1);

  return (
    <h1 className="text-center font-bold text-xl">
      {t('main.costes')} - {t('main.semana')} {currentWeek + 1} {currentWeek === maxWeek ? `(${t('main.ultimaSemana')})` : ''}
    </h1>
  );
}

export default Titulo;






