import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

function Button ({ children }) {
  return (
    <button className={styles.button} >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string
};

export default Button;
