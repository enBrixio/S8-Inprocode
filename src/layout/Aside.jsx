// src/layout/Aside.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from '../Slice/balanceSlide';
import arrowFront from '../assets/arrow.svg';
import arrowBack from '../assets/arrow_back.svg';

function Aside() {
  const dispatch = useDispatch();
  const total = useSelector((state) => state.balance.total);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [dispatch]);

  return (
    <aside className="p-4 mb-4">
      <div className="bg-orange-500 h-20 w-full rounded-3xl flex justify-between items-center px-7">
        <div>
          <h3 className="text-white text-lg">Balance total</h3>
          <span className="text-white text-2xl font-bold">{total} €</span>
        </div>
        <div className="flex items-center">
          <img src={arrowBack} alt="arrow back" className="h-10 w-10 mr-2 cursor-pointer" />
          <img src={arrowFront} alt="arrow front" className="h-10 w-10 cursor-pointer" />
        </div>
      </div>
    </aside>
  );
}

export default Aside;



  
  
  