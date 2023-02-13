import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import css from 'components/BackLink/BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <NavLink className={css.goBackLink} to={to}>
      <HiArrowLeft size="24" />
      {children}
    </NavLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object,
};
