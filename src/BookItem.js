import React from 'react';
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'


class BookItem extends React.Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelfChange: PropTypes.func.isRequired,
      }

    render(){
        const {book,shelfChange} =this.props;
        return(
        <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail ? book.imageLinks.thumbnail : 'http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api%22'})` }}></div>
            <ShelfChanger book={book} shelfChange={shelfChange} shelf={book.shelf}/>
          </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
        {book.authors ? book.authors.join(', ') : 'Unknown Author'}
       </div>
        </div>
      </li>
        )
    }
}

export default BookItem