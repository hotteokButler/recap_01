import React from 'react';
import { Outlet } from 'react-router-dom';
import TabButton from '../components/TabButton';

const BTN_LIS = Object.freeze({
  popular: 'popular',
  upcomming: 'upcomming',
  top_rate: 'top_rate',
});

function MainPage() {


  return (
    <div id="wrapper">
      <div className="tab_btn_wrap">
        {Object.keys(BTN_LIS).map((btn, idx) => (
          <TabButton key={idx} elem_id={btn}/>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default MainPage;
