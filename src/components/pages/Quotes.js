import React, { Component } from 'react';

export default class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    const apiUrl = 'https://random-math-quote-api.herokuapp.com/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ quotes: data }));
  }

  render() {
    const quoteDisplay = this.state;
    return (
      <div className="quoteContent">
        <p>
          {quoteDisplay.quotes.quote}
          ~
          <span><i>{quoteDisplay.quotes.author}</i></span>
        </p>
      </div>
    );
  }
}
