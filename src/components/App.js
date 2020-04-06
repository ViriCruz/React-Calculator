import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

// stateful parent
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    const state = calculate(this.state, name);
    this.setState(state);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div id="app">
        <Display result={total || next} />
        <ButtonPanel onClick={this.handleClick} />
      </div>
    );
  }
}


export default App;
