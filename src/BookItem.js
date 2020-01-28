import React from 'react';
import ShelfChanger from './ShelfChanger'

class BookItem extends React.Component {
    render(){
        const {book,shelfChange} =this.props;
        return(
        <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
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