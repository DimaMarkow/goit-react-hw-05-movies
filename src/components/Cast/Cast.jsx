import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { getCastById } from 'services/moviesApi';
import css from 'components/Cast/Cast.module.css';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getCastById(id)
      .then(data => {
        setActors(data.cast);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (actors.length === 0 && !loading) {
    return (
      <p className={css.detailBasicBold}>
        We don't have any results for this movie ...
      </p>
    );
  }

  return (
    <>
      {loading && <Loader />}
      <ul>
        {actors.map(actor => (
          <li key={actor.cast_id}>
            <img
              className={css.detailImage}
              src={isActors(actor.profile_path)}
              alt=""
            />
            <p className={css.detailBasic}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

function isActors(string) {
  let poster = ' ';
  if (string) {
    poster = `https://image.tmdb.org/t/p/w400${string}`;
  }
  return poster;
}

export default Cast;
