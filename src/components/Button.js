import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  value, color, wide, onClick,
}) => {
  const css = color;

  if (wide) css.flex = '0 0 50%';
  return (
    <div
      role="button"
      tabIndex={0}
      className="button"
      style={css}
      onClick={onClick.bind(this, value)}
      onKeyDown={onClick.bind(this, value)}
    >
      { value }
    </div>
  );
};

Button.defaultProps = {
  value: 'NaN',
  color: { flex: '1', backgroundColor: '#f5913e' },
  wide: false,
  onClick: () => {},
};

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.shape({
    backgroundColor: PropTypes.string,
    flex: PropTypes.string,
  }),
  wide: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
