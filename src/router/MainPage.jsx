import React from 'react';
import { Outlet } from 'react-router-dom';
import TabButton from '../components/TabButton';
import SearchInput from '../components/SearchInput';
import { useLocation } from 'react-router-dom';
import MainIntroSlide from './MainIntroSlide';
import { PiSmileyWinkFill } from 'react-icons/pi';

const BTN_LIS = Object.freeze({
  popular: 'popular',
  upcoming: 'upcoming',
  top_rate: 'top_rate',
});

function MainPage() {
  const location = useLocation();
  const { key } = location;

  return (
    <div id='wrapper' className='px-4'>
      <SearchInput />
      <div className='tab_btn_wrap'>
        {Object.keys(BTN_LIS).map((btn, idx) => (
          <TabButton key={idx} elem_id={btn} />
        ))}
      </div>
      {key === 'default' ? (
        <>
          <h1 className='w-full text-3xl font-bold text-zinc-300 py-[7%] flex items-center justify-center'>
            <span>...Now Search Movie!!! </span>
            <PiSmileyWinkFill className='inline-block' />
          </h1>
          <MainIntroSlide />
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default MainPage;
