import { useState, useEffect } from 'react';
import { getTrendMovies } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    getTrendMovies()
      .then(data => {
        setMovies(prevMovies => [...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      });
    // .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <MoviesList movies={movies} />
    </main>
  );
};
