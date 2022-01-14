/* eslint-disable */
import React, { Component } from 'react'

export default class Quotes extends Component {
    state = {
      quotes: [],
    };
    
     componentDidMount() {
    const apiUrl = 'https://random-math-quote-api.herokuapp.com/';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.setState({ quotes: data }));
  }
  
    render() {
        return (
        <div className="quote__content">
      <p>{this.state.quotes.quote}</p>
      <p>{this.state.quotes.author}</p>
    </div>
        )
    }
}


