import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getSearchedMovie } from 'services/moviesApi';

// const [loading, setLoading] = useState(false);

export const Movies = () => {
  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = movieName => {
    const normalizedFilter = movieName.toLowerCase();
    setFilter(normalizedFilter);
    setSearchParams({ query: normalizedFilter });
  };

  console.log(searchParams);

  useEffect(() => {
    // setLoading(true);
    if (filter === '') {
      return;
    }
    getSearchedMovie(filter)
      .then(data => {
        setMovies(prevMovies => [...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      });
    // .finally(() => setLoading(false));
  }, [filter]);

  return (
    <main>
      <SearchBox onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};
