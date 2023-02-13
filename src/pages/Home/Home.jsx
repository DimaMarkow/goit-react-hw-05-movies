import { useState, useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { getTrendMovies } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import css from 'pages/Home/Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendMovies()
      .then(data => {
        setMovies(prevMovies => [...data.results]);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      {loading && <Loader />}
      <h1 className={css.detailName}> Trending today </h1>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </main>
  );
};

export default Home;
