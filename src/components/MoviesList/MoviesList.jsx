import { Link } from 'react-router-dom';
import css from 'components/MoviesList/MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <div className={css.container}>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
