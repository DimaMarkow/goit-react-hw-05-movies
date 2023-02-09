import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from 'components/SearchBox/SearchBox.module.css';

const SearchBox = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setImageName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (imageName.trim() === '') {
      toast.error('Please, fill the field for filter!', {
        position: 'top-right',
        autoClose: 2000,
        theme: 'light',
      });
      return;
    }
    onSubmit(imageName);
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
          value={imageName}
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
};
