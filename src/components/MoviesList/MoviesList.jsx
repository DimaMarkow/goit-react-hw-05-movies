import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import css from 'components/MoviesList/MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
