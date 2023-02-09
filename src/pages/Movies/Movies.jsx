import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from 'pages/Movies/Movies.module.css';
import SearchBox from 'components/SearchBox/SearchBox';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filter, setFilter] = useState('');

  const onSubmit = data => {
    const normalizedFilter = data.toLowerCase();
    setFilter(normalizedFilter);
  };

  return (
    <main>
      <SearchBox onSubmit={onSubmit} />
    </main>
  );
};
