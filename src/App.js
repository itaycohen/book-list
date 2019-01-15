import React, { Component } from 'react';
import BookList from './components/bookList/BookList';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'semantic-ui-react'
// import { Image as ImageComponent, Item } from 'semantic-ui-react'

// const paragraph = <ImageComponent src={require('/Users/itaycohen/Documents/GitHub/the-books-of-medium/src/images/short-paragraph.png')} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList/>
      </div>

      
    );
  }
}

export default App;
