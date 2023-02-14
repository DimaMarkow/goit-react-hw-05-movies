import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from 'components/SearchBox/SearchBox.module.css';

const SearchBox = ({ onSubmit, initMovie }) => {
  const [movieName, setMovieName] = useState(initMovie || '');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setMovieName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (movieName.trim() === '') {
      toast.error('Please, fill the field for filter!', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light',
      });
      return;
    }
    onSubmit(movieName);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchFormIinput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={movieName}
          onChange={handleChange}
        />
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
      </form>
    </header>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initMovie: PropTypes.string,
};
