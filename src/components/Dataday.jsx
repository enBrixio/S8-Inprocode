// src/components/Dataday.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, calculatePercentageChange } from '../Slice/balanceSlide';

function Dataday() {
  const dispatch = useDispatch();
  const lastExpense = useSelector((state) => state.balance.lastExpense);
  const percentageChange = useSelector((state) => state.balance.percentageChange);

  useEffect(() => {
    dispatch(calculateTotal());
    dispatch(calculatePercentageChange());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-10 justify-between">
      <div className="bg-[#f9f6f6] p-5 rounded-3xl">
        <h3 className="font-bold text-sm md:text-base lg:text-lg text-slate-700">Despeses d'avui</h3>
        <div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0f7664]">{lastExpense} €</span>
        </div>
      </div>
      <div className="bg-[#f9f6f6] p-5 rounded-3xl">
        <h3 className="font-bold text-sm md:text-base lg:text-lg text-slate-700">respecte a ahir</h3>
        <div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ea580c]">{percentageChange.toFixed(2)} %</span>
        </div>
      </div>
    </div>
  );
}

export default Dataday;

  