import React from 'react';
import ShelfChanger from './ShelfChanger'
import BookItem from './BookItem'
class ShelfComponent extends React.Component {
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