import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieLi from './MovieLi';

// const api_key = process.env.REACT_APP_MOVIE_API;

const REQUEST_URL = Object.freeze({
  popular: '/json/popular.json',
  top_rate: '/json/top_rate.json',
  upcomming: '/json/upcomming.json',
});

function MovieLis() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [paging, setPaging] = useState({});

  useEffect(() => {
    fetch(REQUEST_URL[state.id], {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        const { page, results, total_pages } = result;
        setData(results);
        setPaging({
          page,
          total_pages,
        });
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [state, paging]);

  return (
    <div id='movie_lis_wrap'>
      {loading ? (
        <h1 className='text-xl font-bold'>Loading</h1>
      ) : (
        <div>
          <ul className='flex justify-start flex-wrap py-4'>
            {data.map((movie, idx) => (
              <li key={idx} className='w-1/2 p-[1%] sm:w-1/3 xl:w-1/5 xl:p-[0.7%] mb-2'>
                <MovieLi movie={movie} />
              </li>
            ))}
          </ul>
          <div className='paging'>
            {paging.page} / {paging.total_pages}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieLis;
