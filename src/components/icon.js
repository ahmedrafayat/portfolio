import React from 'react';
import PropTypes from 'prop-types';

import * as style from '../styles/icon.module.css';

const Icon = (props) => {
  const { d, size = '1em', label, style: styles, redirectLink } = props;

  return (
    <a className={style.root} style={styles} href={redirectLink}>
      <svg
        version="1.1"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={d} className={style.icon} />
      </svg>
      {label && <span className={style.label}>{label}</span>}
    </a>
  );
};

Icon.propTypes = {
  d: PropTypes.string,
  size: PropTypes.number,
  label: PropTypes.string,
  style: PropTypes.object,
  redirectLink: PropTypes.string.isRequired,
};

export default Icon;
