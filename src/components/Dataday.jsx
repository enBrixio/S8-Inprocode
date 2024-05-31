import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { calculateDailyPercentageChange } from '../Slice/balanceSlide';

function Dataday() {
  const dispatch = useDispatch();
  const currentDay = useSelector((state) => state.balance.currentDay);
  const dailyPercentageChange = useSelector((state) => state.balance.dailyPercentageChange);
  const data = useSelector((state) => state.balance.data);
  const currentWeek = useSelector((state) => state.balance.currentWeek);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(calculateDailyPercentageChange());
  }, [dispatch, currentWeek, currentDay]);

  const todayValue = data[currentWeek][currentDay];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10 justify-between">
      <div className="bg-[#f9f6f6] p-5 rounded-3xl">
        <h3 className="font-bold text-sm md:text-base lg:text-lg text-slate-700">{t('main.costesHoy')}</h3>
        <div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f7664]">{todayValue} €</span>
        </div>
      </div>
      <div className="bg-[#f9f6f6] p-5 rounded-3xl">
        <h3 className="font-bold text-sm md:text-base lg:text-lg text-slate-700">{t('main.porcentaje')}</h3>
        <div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ea580c]">{dailyPercentageChange.toFixed(2)} %</span>
        </div>
      </div>
    </div>
  );
}

export default Dataday;






  