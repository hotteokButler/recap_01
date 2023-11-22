import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieLi from './MovieLi';

const api_key = process.env.REACT_APP_MOVIE_API;
const base_url = 'https://api.themoviedb.org/3/movie';
const REQUEST_URL = Object.freeze({
  popular: 'popular',
  top_rate: 'top_rated',
  upcoming: 'upcoming',
});

function MovieLis() {
  const { state } = useLocation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [current_page, setCurrentPage] = useState(1);
  const [total_page, setTotalPage] = useState(null);

  useEffect(() => {
    if (!loading) setLoading(true);

    fetch(`${base_url}/${REQUEST_URL[state.id]}?language=ko-KR&api_key=${api_key}&page=${current_page}`, {
      method: 'GET',
      redirect: 'follow',
    })
      .then((response) => response.json())
      .then((result) => {
        const { results, total_pages } = result;
        setData(results);
        // 최대 호출 가능 페이지 500페이지 제한
        setTotalPage(total_pages > 500 ? 500 : total_pages);
        setLoading(false);
      })
      .catch((error) => console.log('error', error));
  }, [state, current_page]);

  const handlePaging = (e) => {
    const hasNext = current_page < total_page;
    const hasPrev = current_page > 1;
    const target_id = e.target.id;
    window.scrollTo(0, 0);
    if (target_id === 'prev' && hasPrev) {
      setCurrentPage((prev) => prev - 1);
    }
    if (target_id === 'next' && hasNext) {
      setCurrentPage((prev) => prev + 1);
    }
    if (target_id === 'first_pg') {
      setCurrentPage(1);
    }
    if (target_id === 'last_pg') {
      setCurrentPage(total_page);
    }
  };

  return (
    <div id='movie_lis_wrap'>
      {loading ? (
        <h1 className='text-xl font-bold'>Loading</h1>
      ) : (
        <div>
          <ul className='flex justify-start flex-wrap py-4'>
            {data.length > 0 ? (
              data.map((movie, idx) => (
                <li key={idx} className='w-1/2 p-[1%] sm:w-1/3 xl:w-1/5 xl:p-[0.7%] mb-2 overflow-hidden'>
                  <MovieLi movie={movie} />
                </li>
              ))
            ) : (
              <p>no data</p>
            )}
          </ul>
          <div className='paging'>
            <button
              type='button'
              id='first_pg'
              onClick={(e) => {
                handlePaging(e);
              }}
            >
              처음으로
            </button>
            <button
              type='button'
              id='prev'
              onClick={(e) => {
                handlePaging(e);
              }}
            >
              이전
            </button>
            {current_page} / {total_page}
            <button
              type='button'
              id='next'
              onClick={(e) => {
                handlePaging(e);
              }}
            >
              다음
            </button>
            <button
              type='button'
              id='last_pg'
              onClick={(e) => {
                handlePaging(e);
              }}
            >
              마지막으로
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieLis;
