import React from 'react'
import { bookList } from '../../bookList2';
import BookItem from '../bookItem/BookItem';
import { Item } from 'semantic-ui-react'



class BookList extends React.Component {

  render() {
    return (
        <Item.Group divided>
            {
                bookList.map((bookObject) => {
                    return (
                        <BookItem 
                            id = {bookObject.id}
                            bookName={bookObject.bookName}  
                            bookAuthor = {bookObject.bookAuthor}  
                            amazonLink={bookObject.amazonLink}  
                            bookCoverImg={bookObject.bookCoverImg}  
                            totalMentionsClaps={bookObject.totalMentionsClaps}  
                            numberOfMentions={bookObject.numberOfMentions}  
                        />
                    );
                })
            }
        </Item.Group>
    )

  }
}

export default BookList;

