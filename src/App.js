// import React, { Component } from 'react';
// import { compose } from 'recompose';
// import BookItem from './components/bookItem/BookItem';
// import { Item } from 'semantic-ui-react'


// import BookList from './components/bookList/BookList';
// // import logo from './logo.svg';
// import './App.css';
// // import { Button } from 'semantic-ui-react'
// // import { Image as ImageComponent, Item } from 'semantic-ui-react'

// // const paragraph = <ImageComponent src={require('/Users/itaycohen/Documents/GitHub/the-books-of-medium/src/images/short-paragraph.png')} />


// const applyUpdateResult = (result) => (prevState) => ({
//   docs: [...prevState.docs, ...result.docs],
//   page: result.page,
//   isLoading: false,
// });

// const applySetResult = (result) => (prevState) => ({
//   docs: result.docs,
//   page: result.page,
//   isLoading: false,
// });


// const getBooks = (page) => `https://thebooksofmedium-api.herokuapp.com/books/sub-page"?limit=20&&page=${page + 1}`;





// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       docs: [],
//       page: null,
//       isLoading: false,
//     };
//     console.log("constructor")
//     this.fetchStories("a", 0);

//   }


//   onInitialSearch = (e) => {
//     // e.preventDefault();

//     // const { value } = this.input;

//     // if (value === '') {
//     //   return;
//     // }

//     // this.fetchStories(value, 0);

//     this.fetchStories(0);
//   }


//   onPaginatedSearch = (e) => this.fetchStories(this.state.page + 1);

//   fetchStories = (page) => {
//     this.setState({ isLoading: true });
//     fetch(getBooks(page))
//       .then(response => response.json())
//       .then(result => {
//         this.onSetResult(result, page)
//         console.log("docs:", result.docs)
//       }
//       );

//   }

//   onSetResult = (result, page) =>
//     page === 0
//       ? this.setState(applySetResult(result))
//       : this.setState(applyUpdateResult(result));

//   render() {
//     return (
//       <div className="App">
//         {/* <BookList /> */}


//         <ListWithLoadingWithInfinite
//           list={this.state.docs}
//           isLoading={this.state.isLoading}
//           page={this.state.page}
//           onPaginatedSearch={this.onPaginatedSearch}
//         />
//       </div>


//     );
//   }
// }

// const withLoading = (Component) => (props) =>
//   <div>
//     <Component {...props} />

//     <div className="interactions">
//       {props.isLoading && <span>Loading...</span>}
//     </div>
//   </div>



// const withInfiniteScroll = (Component) =>
//   class WithInfiniteScroll extends React.Component {
//     componentDidMount() {
//       window.addEventListener('scroll', this.onScroll, false);
//     }

//     componentWillUnmount() {
//       window.removeEventListener('scroll', this.onScroll, false);
//     }

//     onScroll = () => {
//       if (
//         (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
//         this.props.list.length &&
//         !this.props.isLoading
//       ) {
//         this.props.onPaginatedSearch();
//       }
//     }

//     render() {
//       return <Component {...this.props} />;
//     }
//   }



// // const List = ({ list }) =>
// // <div className="list">
// //   {list.map(item => <div className="list-row" key={item._id}>
// //     <a href={item.amazonLink}>{item.bookName}</a>
// //   </div>)}
// // </div>


// const List = ({ list }) =>
//   <Item.Group divided>
//     {
//       list.map((bookObject, index) => {
//         return (
//           <BookItem
//             id={bookObject.id}
//             bookName={bookObject.bookName}
//             bookAuthor={bookObject.bookAuthor}
//             amazonLink={bookObject.amazonLink}
//             // bookCoverImg={bookObject.bookCoverImg}
//             totalMentionsClaps={bookObject.totalMentionsClaps}
//             numberOfMentions={bookObject.numberOfMentions}
//             score={bookObject.score}
//             index={index}
//           />
//         );
//       })
//     }
//   </Item.Group>



// https://thebooksofmedium-api.herokuapp.com/books/sub-page?limit=20&&page=${page + 1}`



// const ListWithLoadingWithInfinite = compose(
//   withInfiniteScroll,
//   withLoading,
// )(List);

// export default App;

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

    // var url = api.baseUrl + '/users/8665091/favorites';
    var url = "https://thebooksofmedium-api.herokuapp.com/books/sub-page?limit=50&&page=" + page;
    // var url = "https://thebooksofmedium-api.herokuapp.com/books/sub-page?limit=20&&page=100";


    // qwest.get(url, {
    //         cache: true
    //     })

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
        // <div className="book" key={i}>
        //   <a href={book.bookName} target="_blank">
        //     <img src={book.bookCoverImg} width="150" height="200" />
        //     <p className="title">{book.bookName}</p>
        //   </a>
        // </div>


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

{/* <Item.Group divided>
  {
    list.map((bookObject, index) => {
      return (
        <BookItem
          id={bookObject.id}
          bookName={bookObject.bookName}
          bookAuthor={bookObject.bookAuthor}
          amazonLink={bookObject.amazonLink}
          // bookCoverImg={bookObject.bookCoverImg}
          totalMentionsClaps={bookObject.totalMentionsClaps}
          numberOfMentions={bookObject.numberOfMentions}
          score={bookObject.score}
          index={index}
        />
      );
    })
  }
</Item.Group> */}


export default App;


// ReactDOM.render(
//     <App />
// , document.getElementById('root'));