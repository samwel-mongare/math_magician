/* eslint-disable */
import { useState } from 'react';
import '../index.css';
import calculate from '../logic/calculate';

const Calculator = (() => {
  const [state, setState] = useState({});

  function clickMe(e) {
    setState((state) => calculate(state, e.target.textContent));
  }
  const { next, total } = state;

  return (
    <div className="calc-grid">
      <div className="output">
        {next || total || 0}
      </div>
      <button type="button" onClick={clickMe}>AC</button>
      <button type="button" onClick={clickMe}>+/-</button>
      <button type="button" onClick={clickMe}>%</button>
      <button type="button" onClick={clickMe} className="math-sign">÷</button>
      <button type="button" onClick={clickMe}>7</button>
      <button type="button" onClick={clickMe}>8</button>
      <button type="button" onClick={clickMe}>9</button>
      <button type="button" onClick={clickMe} className="math-sign">x</button>
      <button type="button" onClick={clickMe}>4</button>
      <button type="button" onClick={clickMe}>5</button>
      <button type="button" onClick={clickMe}>6</button>
      <button type="button" onClick={clickMe} className="math-sign">-</button>
      <button type="button" onClick={clickMe}>1</button>
      <button type="button" onClick={clickMe}>2</button>
      <button type="button" onClick={clickMe}>3</button>
      <button type="button" onClick={clickMe} className="math-sign">+</button>
      <button type="button" onClick={clickMe} className="span-two">0</button>
      <button type="button" onClick={clickMe}>.</button>
      <button type="button" onClick={clickMe} className="math-sign">= </button>
    </div>
  );
});

export default Calculator;
