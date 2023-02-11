import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getSearchedMovie } from 'services/moviesApi';

// const [loading, setLoading] = useState(false);

export const Movies = () => {
  // const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = movieName => {
    const normalizedFilter = movieName.toLowerCase();
    setSearchParams({ query: normalizedFilter });
  };

  const search = searchParams.get('query');

  console.log(search);

  useEffect(() => {
    // setLoading(true);
    if (search === '') {
      return;
    }
    getSearchedMovie(search)
      .then(data => {
        setMovies(prevMovies => [...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      });
    // .finally(() => setLoading(false));
  }, [search]);

  return (
    <main>
      <SearchBox onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};
