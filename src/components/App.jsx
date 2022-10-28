import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Appbar = lazy(() => import('./Appbar/Appbar'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));
const Cast = lazy(() => import('./Cast/Casts'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Appbar />
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="movies/:id" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
};
