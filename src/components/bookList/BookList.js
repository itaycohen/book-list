import React from 'react'
import { bookList } from '../../bookList';
import BookItem from '../bookItem/BookItem';
import { Item } from 'semantic-ui-react'

// 235254477
// 2033377.0899999999

class BookList extends React.Component {

  render() {

    const sortedByScoreBookList = bookList.sort((bookObjA, bookObjB) => bookObjB.score - bookObjA.score)

    return (
        <Item.Group divided>
            {
                sortedByScoreBookList.map((bookObject, index) => {
                    return (
                        <BookItem 
                            id = {bookObject.id}
                            bookName={bookObject.bookName}  
                            bookAuthor = {bookObject.bookAuthor}  
                            amazonLink={bookObject.amazonLink}  
                            bookCoverImg={bookObject.bookCoverImg}  
                            totalMentionsClaps={bookObject.totalMentionsClaps}  
                            numberOfMentions={bookObject.numberOfMentions}  
                            score={bookObject.score}
                            index= {index}
                        />
                    );
                })
            }
        </Item.Group>
    )

  }
}

export default BookList;

