import { useEffect, useState } from 'react';
import MovieLi from './MovieLi';
import { useLocation  } from 'react-router-dom';
import TabButton from './TabButton';

// const api_key = process.env.REACT_APP_MOVIE_API;

const REQUEST_URL = Object.freeze({
  popular: '/json/popular.json',
  top_rate: '/json/top_rate.json',
  upcomming: '/json/upcomming.json',
});

function MovieLis({id}) {
  const [request, setRequest] = useState('popular');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [paging, setPaging] = useState({});

  useEffect(() => {
    fetch(REQUEST_URL[request], {
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
  }, [request]);

  const renderBtn = (func) => {
    for (let i = 0; i < 3; i++) {
     return <TabButton key={i} id={request} state={request === id ? true : false} handleBtn={func} />;
    }
 }

  const handleBtn = (e) => {
    const target_id = e.target.id;
    setRequest(target_id);
  };



  return (
    <div id="movie_lis_wrap" className="px-4">
      {loading ? (
        <h1 className="text-xl font-bold">Loading</h1>
      ) : (
        <div>
          <div className="tab_btn_wrap">
          {renderBtn(handleBtn)}
          </div>
          <ul className="flex justify-start flex-wrap">
            {data.map((movie, idx) => (
              <MovieLi key={idx} movie={movie} />
            ))}
          </ul>
          <div className="paging">
            {paging.page} / {paging.total_pages}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieLis;
