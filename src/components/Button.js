import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ value, color, wide }) => {
  const css = color;
  if (wide) css.flex = '0 0 50%';
  return (
    <div className="button" style={css}>
      { value }
    </div>
  );
};

Button.defaultProps = {
  value: 'NaN',
  color: { flex: '1', backgroundColor: '#f5913e' },
  wide: false,
};

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.shape({
    backgroundColor: PropTypes.string,
    flex: PropTypes.string,
  }),
  wide: PropTypes.bool,
};

export default Button;
