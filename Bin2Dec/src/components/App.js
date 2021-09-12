import React from 'react';
import '../styles/App.scss';

const App = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { binary: '', decimal: '' };
    this.handleBinary = this.handleBinary.bind(this);
  }
  handleBinary(event) {
    const value = event.target.value;
    if (this.state.binary.length > value.length) {
      this.setState({
        binary: value,
        decimal: parseInt(value, 2) || '',
      });
    } else {
      const lastNumber = value[value.length - 1];
      if (this.state.binary.length >= 8) return;
      if (lastNumber === '0' || lastNumber === '1') {
        this.setState({
          binary: value,
          decimal: parseInt(value, 2),
        });
      } else return alert('Please enter 0 or 1');
    }
  }
  render() {
    return (
      <div id="container">
        <h1>Binary to Decimal Converter</h1>
        <div>
          <label htmlFor="binary">Binary</label>
          <input
            id="binary"
            type="text"
            value={this.state.binary}
            onChange={this.handleBinary}
            placeholder="Enter binary number"
          />
        </div>
        <div>
          <label htmlFor="decimal">Decimal</label>
          <input type="text" disabled value={this.state.decimal} />
        </div>
      </div>
    );
  }
};

export default App;
