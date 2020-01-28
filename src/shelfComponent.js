import React from 'react';
import ShelfChanger from './ShelfChanger'
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
                         <li key={book.id}>
                         <div className="book">
                           <div className="book-top">
                             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                             <ShelfChanger book={book} shelfChange={shelfChange}/>
                           </div>
                         <div className="book-title">{book.title}</div>
                           {book.authors.map((auth)=>(  <div className="book-authors">{auth}</div>))}
                         </div>
                       </li>
                     )
                     )}
                    </ol>
                  </div>
                </div>
        )
    }
}
export default ShelfComponent