import React from 'react';
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'
import BookItem from './BookItem'
import { Link } from 'react-router-dom';

class BookSearch extends React.Component {
   
    state={
        query:""
    }
    search = (queryParam)=>{
        this.setState(()=>({
            query:queryParam.trim()
        }));
        this.props.handleSearch(queryParam);
    }

    render(){
        const {shelfChange,handleSearch,searchedBooks,mybooks} = this.props;
       const books = searchedBooks.map(book => {
        mybooks.map(b => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });
        return(
            <div className="search-books">
            <div className="search-books-bar">
             <Link to='/'  className="close-search">
               Close
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={this.state.query} onChange={(e)=>this.search(e.target.value)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
                    <ol className="books-grid"> 
                    {books.map(book =>(
                       <BookItem key={book.id} book={book} shelfChange={shelfChange}/>
                     ))
                      }
                    </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch