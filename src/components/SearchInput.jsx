import React from 'react';
import { IoSearch } from 'react-icons/io5';

function SearchInput() {
  return (
    <div className='w-full flex items-center pt-3 max-w-5xl'>
      <input
        type='text'
        className='rounded-md border border-slate-200 leading-9 w-full indent-3'
        name='keyword'
        id='keyword'
        placeholder='Search Movie'
      />
      <button
        className='rounded-md px-3 py-2.5 inline-block font-bold text-l mx-2 my-2 duration-500 bg-purple-950 text-white hover:bg-purple-300 hover:text-black'
        type='button'
      >
        <IoSearch />
      </button>
    </div>
  );
}

export default SearchInput;
