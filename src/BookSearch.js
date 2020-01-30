import React from 'react';
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'
import BookItem from './BookItem'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

class BookSearch extends React.Component {
    static propTypes = {
        shelfChange: PropTypes.func.isRequired,
        handleSearch: PropTypes.func.isRequired,
        searchedBooks:PropTypes.array.isRequired,
        mybooks:PropTypes.array.isRequired
      }
    state={
        query:""
    }
    search = (queryParam)=>{
        this.setState(()=>({
            query:queryParam
        }));
        this.props.handleSearch(queryParam);
    }

    render(){
        const {shelfChange,handleSearch,searchedBooks,mybooks,emptyResultCheck} = this.props;
        var books = [];
        if(!emptyResultCheck)
        {
            books = searchedBooks.map(book => {
                mybooks.map(b => {
                if (b.id === book.id) {
                    book.shelf = b.shelf;
                }
                return b;
                });
                return book;
            });
        }
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
                     {!emptyResultCheck ? (
                    books.map(book =>(
                       <BookItem key={book.id} book={book} shelfChange={shelfChange}/>
                     ))
                    ):(<div>No data Items</div>)}
                    </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch