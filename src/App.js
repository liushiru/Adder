import React from 'react';

import './App.css';

class AdderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: 0,
      secondNum: 0,
      sum: 0
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    var a = Number(this.state.firstNum);
    var b = Number(this.state.secondNum);
    var c = a + b;
    this.setState({ sum: c });
  }

  handleFirstNumChange = (event) => {
    this.setState({firstNum: event.target.value});
  }


  handleSecondNumChange = (event) => {
    this.setState({secondNum: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Two Numbers Adder</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Number:
<input type="number" onChange={this.handleFirstNumChange} />
          </label>
          <br></br>
          <label>
            Second Number:
<input  type="number" onChange={this.handleSecondNumChange} />
          </label>
        </form>
        <button onClick={this.handleSubmit}>Add</button>
        <h1 id="answer">Answer: {this.state.sum} </h1>
      </div>
    );
  }
}

export default AdderForm;
