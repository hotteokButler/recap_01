import React from 'react';

function TabButton({ id, state, handleBtn }) {
  const format_txt = id.replace(/[_-]/g, ' ').toUpperCase();
  return (
    <button
      className={`rounded-md px-4 py-3 inline-block font-bold text-xs mx-2 my-4 duration-500 hover:bg-purple-950 hover:text-white ${ state ? 'bg-purple-950 text-white' : 'bg-slate-200'}`}
      id={id}
      onClick={(e) => {
        handleBtn(e);
      }}
    >
      {format_txt}
    </button>
  );
}

export default TabButton;
