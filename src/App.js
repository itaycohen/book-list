import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import qwest from 'qwest';
import BookItem from './components/bookItem/BookItem';
import { Item } from 'semantic-ui-react'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      hasMoreItems: true,
    };
  }

  loadItems(page) {
    var self = this;

    var url = "https://thebooksofmedium-api.herokuapp.com/books/sub-page?limit=50&&page=" + page;

    qwest.get(url, {
      cache: true
    })
      .then(function (xhr, resp) {
        if (resp) {
          var books = self.state.books;
          resp.docs.map((book) => {
            books.push(book);
          });
          self.setState({
            books: books,
          });
        }
      })
      .catch(function (e, xhr, response) {
        self.setState({
          hasMoreItems: false
        });
        console.error("no more")
      });
  }

  render() {
    const loader = <div className="loader">Loading ...</div>;

    var items = [];
    this.state.books.map((bookObject, i) => {
      items.push(

        <BookItem
          key={i}
          id={bookObject.id}
          bookName={bookObject.bookName}
          bookAuthor={bookObject.bookAuthor}
          amazonLink={bookObject.amazonLink}
          bookCoverImg={bookObject.bookCoverImg}
          totalMentionsClaps={bookObject.totalMentionsClaps}
          numberOfMentions={bookObject.numberOfMentions}
          score={bookObject.score}
          index={i}
        />
      );
    });

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadItems.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={loader}>

        <div className="books">
          <Item.Group divided>
            {items}
          </Item.Group>
        </div>
      </InfiniteScroll>
    );
  }
};



export default App;

