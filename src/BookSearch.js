import React from 'react';
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'
import BookItem from './BookItem'
import { Link } from 'react-router-dom';

class BookSearch extends React.Component {
    search=(queryInput)=>{
        this.setState(()=>({
            query:queryInput.trim()
        }));
        BooksAPI.search(queryInput.trim()).then((result) => {
            if(result != undefined)
            {
            this.setState(()=>({
                booksResult:[...result],
            }))
        }
        })
    }
    state={
        query:"",
        booksResult:[]
    }
    render(){
        const {shelfChange} = this.props;
       const books = this.state.booksResult;
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
                      {(books != undefined && books.length>0) &&(
                      books.map((book)=>(
                       <BookItem key={book.id} book={book} shelfChange={shelfChange}/>
                     )))}
                    </ol>
            </div>
          </div>
        )
    }
}
export default BookSearch