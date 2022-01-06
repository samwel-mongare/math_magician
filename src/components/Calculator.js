import React, { Component } from 'react';
import '../index.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calc-grid">
        <div className="output">
          {next || total || 0}
        </div>
        <button type="button" onClick={this.handleClick}>AC</button>
        <button type="button" onClick={this.handleClick}>+/-</button>
        <button type="button" onClick={this.handleClick}>%</button>
        <button type="button" onClick={this.handleClick} className="math-sign">÷</button>
        <button type="button" onClick={this.handleClick}>7</button>
        <button type="button" onClick={this.handleClick}>8</button>
        <button type="button" onClick={this.handleClick}>9</button>
        <button type="button" onClick={this.handleClick} className="math-sign">x</button>
        <button type="button" onClick={this.handleClick}>4</button>
        <button type="button" onClick={this.handleClick}>5</button>
        <button type="button" onClick={this.handleClick}>6</button>
        <button type="button" onClick={this.handleClick} className="math-sign">-</button>
        <button type="button" onClick={this.handleClick}>1</button>
        <button type="button" onClick={this.handleClick}>2</button>
        <button type="button" onClick={this.handleClick}>3</button>
        <button type="button" onClick={this.handleClick} className="math-sign">+</button>
        <button type="button" onClick={this.handleClick} className="span-two">0</button>
        <button type="button" onClick={this.handleClick}>.</button>
        <button type="button" onClick={this.handleClick} className="math-sign">= </button>
      </div>
    );
  }
}
