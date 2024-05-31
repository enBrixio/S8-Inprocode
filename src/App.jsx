import React from 'react';
import Header from './layout/Header';
import Aside from './layout/Aside';
import Body from './layout/Body';

function App() {
  return (
    <section className='min-h-screen w-full bg-orange-50 flex justify-center'>
      <div className='w-full max-w-2xl'>
        <Header />
        <Aside />
        <Body />
      </div>
    </section>
  );
}

export default App;




