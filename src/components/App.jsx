import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import SharedLayout from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));
// const NotFound = lazy(() => import('pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
