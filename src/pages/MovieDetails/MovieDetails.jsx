import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { getMovieById } from 'services/moviesApi';
import { BackLink } from 'components/BackLink/BackLink';

import css from 'pages/MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([{ mame: ' ' }]);

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  let string = ``;

  useEffect(() => {
    setLoading(true);
    getMovieById(id)
      .then(data => {
        setMovie(data);
        setGenres(data.genres);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (movie.poster_path) {
    string = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;
  }

  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {loading && <Loader />}
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
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <p className={css.detailBasic}>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
