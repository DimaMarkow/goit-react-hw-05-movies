import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';
import css from 'pages/MovieDetails.module.css';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([{ mame: ' ' }]);

  // const [loading, setLoading] = useState(false);

  const { id } = useParams();
  let string = ``;

  useEffect(() => {
    // setLoading(true);
    getMovieById(id)
      .then(data => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.log(error.message);
      });
    // .finally(() => setLoading(false));
  }, [id]);

  if (movie.poster_path) {
    string = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
  }

  return (
    <main>
      <div className={css.detailBox}>
        <img className={css.detailImage} src={string} alt="" />
        <div>
          <h2 className={css.detailName}>{movie.original_title}</h2>
          <p className={css.detailBasic}>
            User Score: {(movie.vote_average * 10).toFixed(0)}%
          </p>
          <h3 className={css.overview}>Overview</h3>
          <p className={css.detailBasic}>{movie.overview}</p>
          <p className={css.detailBasicBold}>Genres</p>
          <div className={css.genresContainer}>
            {genres.map((genre, index) => (
              <p key={index} className={css.detailBasic}>
                {' '}
                {genre.name}{' '}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
