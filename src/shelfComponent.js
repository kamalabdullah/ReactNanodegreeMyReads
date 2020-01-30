import React from 'react';
import BookItem from './BookItem'
import PropTypes from 'prop-types'

class ShelfComponent extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfChange: PropTypes.func.isRequired,
    title:PropTypes.string.isRequired,
  }
    render(){
        const {books,shelfChange,title} = this.props;
        const Read = books;
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {Read.map((book)=>(
                      <BookItem key={book.id} book={book} shelfChange={shelfChange}/>
                     )
                     )}
                    </ol>
                  </div>
                </div>
        )
    }
}
export default ShelfComponent