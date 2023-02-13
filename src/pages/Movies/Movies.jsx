import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import SearchBox from 'components/SearchBox/SearchBox';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getSearchedMovie } from 'services/moviesApi';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = movieName => {
    const normalizedFilter = movieName.toLowerCase();
    setSearchParams({ query: normalizedFilter });
  };

  const search = searchParams.get('query');

  useEffect(() => {
    setLoading(true);
    if (search === '') {
      return;
    }
    getSearchedMovie(search)
      .then(data => {
        setMovies(prevMovies => [...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <main>
      <SearchBox onSubmit={onSubmit} />
      {loading && <Loader />}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Movies;
