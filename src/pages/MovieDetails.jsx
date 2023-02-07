import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getMovieById(id)
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const string = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;

  return (
    <main>
      <img src={string} alt="" />
      <div>
        <h2>{movie.original_title}</h2>
        <p>
          overview <br></br> {movie.overview}
        </p>
      </div>
    </main>
  );
};
