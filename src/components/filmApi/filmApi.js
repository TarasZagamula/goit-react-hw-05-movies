import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY_API = '85408d76642bbd5b8143762a2dcea99d';

export async function getFilmByQuerry(querry) {
  const url = `${BASE_URL}search/movie?api_key=${KEY_API}&language=en-US&query=${querry}&page=1&include_adult=false`;
  const querryData = await axios
    .get(url)
    .then(res => res.data.results)
    .then(data => {
      return data;
    });
  return querryData;
}

export async function getFilmByTrending() {
  const url = `${BASE_URL}trending/all/day?api_key=${KEY_API}`;
  const trendingData = await axios
    .get(url)
    .then(res => res.data.results)
    .then(data => {
      return data;
    });
  return trendingData;
}

export async function getFilmInfoById(id) {
  const url = `${BASE_URL}movie/${id}?api_key=${KEY_API}&language=en-US`;
  const idData = await axios
    .get(url)
    .then(res => res.data)
    .then(data => {
      return data;
    });
  return idData;
}

export async function getCastsById(id) {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${KEY_API}&language=en-US`;
  const idData = await axios
    .get(url)
    .then(res => res.data.cast)
    .then(data => {
      return data;
    });
  return idData;
}

export async function getReviewsById(id) {
  const url = `${BASE_URL}movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=1`;
  const idData = await axios
    .get(url)
    .then(res => res.data.results)
    .then(data => {
      return data;
    });
  return idData;
}
