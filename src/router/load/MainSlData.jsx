export const nowPlayingData = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1&api_key=${process.env.REACT_APP_MOVIE_API}`);

  if (res.ok) {
    return await res.json();
  }
};
