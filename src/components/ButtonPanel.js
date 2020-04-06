import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonPanel extends React.Component {
  get groups() {
    this.names = {
      1: ['AC', '+/-', '%', '÷'],
      2: ['7', '8', '9', 'x'],
      3: ['4', '5', '6', '-'],
      4: ['1', '2', '3', '+'],
      5: ['0', '.', '='],
    };
    return this.names;
  }


  renderButton = (value, index, group) => {
    const style = { backgroundColor: '#e0e0e0', flex: '1' };
    const { length } = group;
    const wide = value === '0';
    const { onClick } = this.props;
    this.button = index < length - 1
      ? <Button value={value} color={style} wide={wide} onClick={onClick} key={value} />
      : <Button value={value} color={{ flex: '1' }} wide={wide} onClick={onClick} key={value} />;
    return this.button;
  }

  render() {
    return (
      <div className="container">
        <div className="row groups">
          { this.groups['1'].map(this.renderButton) }
        </div>
        <div className="row groups">
          { this.groups['2'].map(this.renderButton) }
        </div>
        <div className="row groups">
          { this.groups['3'].map(this.renderButton) }
        </div>
        <div className="row groups">
          { this.groups['4'].map(this.renderButton) }
        </div>
        <div className="row groups">
          { this.groups['5'].map(this.renderButton) }
        </div>
      </div>
    );
  }
}

ButtonPanel.defaultProps = {
  onClick: () => {},
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonPanel;
