import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

function TabButton({ elem_id }) {
  const location = useLocation();
  const { pathname } = location;
  const match = useMatch(pathname);
  const is_match = match.pathname.slice(1) === elem_id ? true : false;

  const format_txt = elem_id.replace(/[_-]/g, ' ').toUpperCase();

  return (
    <Link
      className={`rounded-md px-4 py-3 inline-block font-bold text-xs mx-2 my-4 duration-500 hover:bg-purple-950 hover:text-white ${
        is_match ? 'bg-purple-950 text-white' : 'bg-slate-200'
      }`}
      to={elem_id}
      state={{ id: elem_id, active: is_match }}
    >
      {format_txt}
    </Link>
  );
}

export default TabButton;
