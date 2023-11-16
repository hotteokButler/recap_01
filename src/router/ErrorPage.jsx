import React from 'react';

function ErrorPage() {
  return (
    <div className='text-center mt-10'>
      <h1 className="text-5xl my-6 font-bold">Ooops!</h1>
      <p className='mb-5s'>Sorry, an unexpected errorPage has occurred.</p>
      <em className='text-neutral-400'>Not found</em>
    </div>
  );
}

export default ErrorPage;