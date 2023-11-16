import React from 'react';

const BASIC_IMG_PAHT = 'https://image.tmdb.org/t/p/w500';

function MovieLi({ movie }) {
  const { original_title, overview, poster_path, release_date, title, vote_average } = movie;

  const date_arr = release_date.split('-');
  const format_date = `${date_arr[1].replace(/(^0+)/, '')}월 ${date_arr[2]}일, ${date_arr[0]}년`;

  const format_vote_avg = Math.ceil(vote_average * 10);

  return (
    <li className="w-1/2 p-[1%] sm:w-1/3 xl:w-1/5 xl:p-[0.7%] mb-2">
      <div className="movie_li relative mb-3">
        <img className="rounded-md" src={`${BASIC_IMG_PAHT}${poster_path}`} alt={title} />
        <p className="movie_rate absolute block w-11 leading-11 h-11 text-center right-2 bottom-2 rounded-full font-bold text-slate-50 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-600">
          {format_vote_avg}
          <sup className="absolute text-xs right-1 top-1 text-xxs">%</sup>
        </p>
      </div>
      <dl className="movie_desc ">
        <dt className="movie_tit mb-3 font-bold text-l leading-3">
          <a href="#">
            <span className="leading-7"> {title}</span>
            <br />
            <span className="text-xs font-light ">{original_title}</span>
          </a>
        </dt>
        <dl className="movie_release mb-3">{format_date}</dl>
        <dl className="movie_desc text-ellipsis line-clamp-2 font-light text-xs">{overview}</dl>
      </dl>
    </li>
  );
}

export default MovieLi;
