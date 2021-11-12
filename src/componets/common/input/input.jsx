import React from 'react';
import PropTypes from 'prop-types';
import { TypeInput } from 'src/common/enums/enums';
import { getAllowedClasses } from 'src/helpers/helpers';
import styles from './styles.module.scss';

function Input ({ type, className, label }) {
  const isTextArea = type === TypeInput.TEXTAREA;

  const allowedClasses = getAllowedClasses([className, styles.inputWrapper]);
  return (
    <label className={allowedClasses}>
      <span className={styles.label}>{label}</span>
      {isTextArea
        ? (<textarea className={styles.textarea} />)
        : (<input className={styles.input} type={type} />)
      }
    </label>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string
};

Input.defaultProps = {
  type: TypeInput.TEXT
};

export default Input;
