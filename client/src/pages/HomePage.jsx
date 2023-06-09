import React from 'react';
import Navbar from '../components/nav/Navbar';

function HomePage() {
  document.title = 'Stuart Turnbull || Composer';

  return (
    <div className=''>
      <Navbar />
      <section className='grid h-[calc(100vh-64px)] max-w-[100vw] object-contain'>
        <div
          className={`bg-[url('../assets/img/homepage.jpeg')] bg-no-repeat bg-cover bg-center`}
        ></div>
      </section>
    </div>
  );
}

export default HomePage;
