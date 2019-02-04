import React from 'react'
import InfiniteScroll from 'react-infinite-scroller';
import BookItem from '../bookItem/BookItem';
import FiltersArea from '../filtersArea/FiltersArea';
import qwest from 'qwest';
import './BookList.css';
import {
    Item,
    Container,
    Visibility,
    Responsive
} from 'semantic-ui-react'


const getWidth = () => {
    const isSSR = typeof window === 'undefined'

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}



class BookList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            hasMoreItems: true,
        };
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

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

        const { fixed } = this.state


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

            <div>



            {/* // Desktop layout */}

            <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>

                <div className="bookListWrapperDesktop">

                    <Visibility
                        once={false}
                        onTopPassed={this.showFixedMenu}
                        onTopPassedReverse={this.hideFixedMenu}
                        className="stickyFiltersWarpper">

                        <FiltersArea fixed={fixed} />

                    </Visibility>

                    <Container text className="bookListContainer">


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

                    </Container>


                </div>

            </Responsive>


            {/* // Mobile layout */}


            <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth} >

                <div className="bookListWrapperMobile">

                    <Visibility
                        once={false}
                        onTopPassed={this.showFixedMenu}
                        onTopPassedReverse={this.hideFixedMenu}
                        className="stickyFiltersWarpper">

                        <FiltersArea fixed={fixed} />

                    </Visibility>

                    <Container className="bookListContainerMobile">


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

                    </Container>


                </div>


            </Responsive>


            </div>










        );
    }
}



export default BookList;

