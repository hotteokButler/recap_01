import React from 'react';
import { Outlet } from 'react-router-dom';
import TabButton from '../components/TabButton';
import SearchInput from '../components/SearchInput';
import { useLocation } from 'react-router-dom';
import MainIntroSlide from './MainIntroSlide';

const BTN_LIS = Object.freeze({
  popular: 'popular',
  upcomming: 'upcomming',
  top_rate: 'top_rate',
});

function MainPage() {
  const location = useLocation();
  const {key} = location;

  return (
    <div id="wrapper" className='px-4'>
      <SearchInput/>
      <div className="tab_btn_wrap">
        {Object.keys(BTN_LIS).map((btn, idx) => (
          <TabButton key={idx} elem_id={btn}/>
        ))}
      </div>
      {key === "default" ? <MainIntroSlide /> :  <Outlet />}
    </div>
  );
}

export default MainPage;
