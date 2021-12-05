const API_KEY = "00c7a04ad84e83a20962ab14d2d9e9c3";
const END_POINT = "https://api.themoviedb.org/3";

export const getNowPlayings = async () => {
  return (
    await fetch(`${END_POINT}/movie/now_playing?api_key=${API_KEY}&language=ko`)
  ).json();
};
