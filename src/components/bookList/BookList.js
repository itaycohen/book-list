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


const initialPage = 1;

class BookList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            hasMoreItems: true,
            sorter: "score",
            page: initialPage,
            tag: "All Tags"
        };
    }


    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    onSorterChange = (event, data) => {
        const newSorter = data.value;
        if (this.state.sorter !== newSorter) {
            this.setState({
                sorter: data.value,
                books: [],
                page: initialPage,
            })
        }
    }


    onTagChange = (event, data) => {
        const newTag = data.value;
        if (this.state.tag !== newTag) {
            this.setState({
                books: [],
                page: initialPage,
                tag: data.value
            })
        }
    }


    loadItems(page) {

        const self = this;
        // const tag = this.state.tag.toLowerCase()
        // const sorter = this.state.sorter.toLowerCase()
        const tag = this.state.tag
        const sorter = this.state.sorter
        const url = "https://thebooksofmedium-api.herokuapp.com/books/" + tag + "/" + sorter + "/sub-page?limit=50&&page=" + self.state.page;
        // const url = "localhost:3001/books/" + this.state.tag + "/" + this.state.sorter + "/sub-page?limit=50&&page=" + self.state.page;
        // const url = "books/" + this.state.tag + "/" + this.state.sorter + "/sub-page?limit=50&&page=" + self.state.page;



        qwest.get(url, {
            cache: true
        })
            .then(function (xhr, resp) {
                if (resp) {
                    const books = self.state.books;
                    const newPage = self.state.page + 1;
                    resp.docs.map((book) => {
                        books.push(book);
                    });
                    self.setState({
                        books: books,
                        page: newPage
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

        const { hasMoreItems, fixed, sorter } = this.state


        let items = [];
        this.state.books.map((bookObject, i) => {

            let totalMentionsClaps = nFormatter(bookObject.totalMentionsClaps, 1);
            items.push(

                <BookItem
                    key={i}
                    id={bookObject.id}
                    bookName={bookObject.bookName}
                    bookAuthor={bookObject.bookAuthor}
                    amazonLink={bookObject.amazonLink}
                    bookCoverImg={bookObject.bookCoverImg}
                    totalMentionsClaps={totalMentionsClaps}
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

                            <FiltersArea fixed={fixed} sorter={sorter} onSorterChange={this.onSorterChange} onTagChange={this.onTagChange} />

                        </Visibility>

                        <Container text className="bookListContainer">


                            <InfiniteScroll
                                pageStart={0}
                                loadMore={this.loadItems.bind(this)}
                                hasMore={hasMoreItems}
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
                            <FiltersArea fixed={fixed} sorter={sorter} onSorterChange={this.onSorterChange} onTagChange={this.onTagChange} />
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



const nFormatter = (num, digits) => {
    const si = [
        { value: 1, symbol: "" },
        { value: 1E3, symbol: "k" },
        { value: 1E6, symbol: "M" },
        { value: 1E9, symbol: "G" },
        { value: 1E12, symbol: "T" },
        { value: 1E15, symbol: "P" },
        { value: 1E18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}


export default BookList;

