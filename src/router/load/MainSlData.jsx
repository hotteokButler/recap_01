export const nowPlayingData = async () => {
  const res = await fetch('/json/now_playing.json');

  if (res.ok) {
    return await res.json();
  }
};
