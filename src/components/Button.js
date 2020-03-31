import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value }) => (
  <div>{ value }</div>
);

Button.defaultProps = {
  value: 'NaN',
};

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
