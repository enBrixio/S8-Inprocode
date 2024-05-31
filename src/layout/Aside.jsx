import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { calculateTotal, setCurrentWeek } from '../Slice/balanceSlide';
import arrowFront from '../assets/arrow.svg';
import arrowBack from '../assets/arrow_back.svg';

function Aside() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const total = useSelector((state) => state.balance.total);
  const currentWeek = useSelector((state) => state.balance.currentWeek);
  const maxWeek = 4; // La semana más actual (índice 4)

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch, currentWeek]);

  const handlePreviousWeek = () => {
    if (currentWeek > 0) {
      dispatch(setCurrentWeek(currentWeek - 1));
    }
  };

  const handleNextWeek = () => {
    if (currentWeek < maxWeek) {
      dispatch(setCurrentWeek(currentWeek + 1));
    }
  };

  return (
    <aside className="p-4 mb-4">
      <div className="bg-orange-500 h-20 w-full rounded-3xl flex justify-between items-center px-7">
        <div>
          <h3 className="text-white text-lg">{t('main.balance')}</h3>
          <span className="text-white text-2xl font-bold">{total} €</span>
        </div>
        <div className="flex items-center">
          <img
            src={arrowBack}
            alt="arrow back"
            className={`h-10 w-10 mr-2 cursor-pointer ${currentWeek === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handlePreviousWeek}
          />
          <img
            src={arrowFront}
            alt="arrow front"
            className={`h-10 w-10 cursor-pointer ${currentWeek === maxWeek ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleNextWeek}
          />
        </div>
      </div>
    </aside>
  );
}

export default Aside;








  
  
  