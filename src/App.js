import React, { Component } from 'react';
import BookList from './components/bookList/BookList';
import ResponsiveContainer from './components/responsiveContainer/ResponsiveContainer';
import './App.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-132865899-1');
ReactGA.pageview(window.location.pathname + window.location.search);


class App extends Component {

  render() {
    return (
      <ResponsiveContainer>
        <BookList />
      </ResponsiveContainer>
    );
  }
};




export default App;

