import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from 'components/Loader/Loader';
import css from 'components/SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <header>
        <nav className={css.mainNav}>
          <NavLink className={css.linkNav} to="/" end>
            Home
          </NavLink>
          <NavLink className={css.linkNav} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        style={{ fontSize: 15 }}
      />
    </div>
  );
};

export default SharedLayout;
