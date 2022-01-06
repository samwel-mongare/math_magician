import React, { Component } from 'react';
import '../index.css';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clickMe = this.clickMe.bind(this);
  }

  clickMe(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="calc-grid">
        <div className="output">
          {next || total || 0}
        </div>
        <button type="button" onClick={this.clickMe}>AC</button>
        <button type="button" onClick={this.clickMe}>+/-</button>
        <button type="button" onClick={this.clickMe}>%</button>
        <button type="button" onClick={this.clickMe} className="math-sign">÷</button>
        <button type="button" onClick={this.clickMe}>7</button>
        <button type="button" onClick={this.clickMe}>8</button>
        <button type="button" onClick={this.clickMe}>9</button>
        <button type="button" onClick={this.clickMe} className="math-sign">x</button>
        <button type="button" onClick={this.clickMe}>4</button>
        <button type="button" onClick={this.clickMe}>5</button>
        <button type="button" onClick={this.clickMe}>6</button>
        <button type="button" onClick={this.clickMe} className="math-sign">-</button>
        <button type="button" onClick={this.clickMe}>1</button>
        <button type="button" onClick={this.clickMe}>2</button>
        <button type="button" onClick={this.clickMe}>3</button>
        <button type="button" onClick={this.clickMe} className="math-sign">+</button>
        <button type="button" onClick={this.clickMe} className="span-two">0</button>
        <button type="button" onClick={this.clickMe}>.</button>
        <button type="button" onClick={this.clickMe} className="math-sign">= </button>
      </div>
    );
  }
}
