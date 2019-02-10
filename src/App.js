import React, { Component } from 'react';
import BookList from './components/bookList/BookList';
import ResponsiveContainer from './components/responsiveContainer/ResponsiveContainer';
import './App.css';


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

