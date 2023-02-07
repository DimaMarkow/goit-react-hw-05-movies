import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getTrendMovies()
      .then(data => {
        setMovies(prevMovies => [...data.results]);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};
