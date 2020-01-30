import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookSearch from './BookSearch';
import { Link } from 'react-router-dom';
import ShelfComponent from './shelfComponent';

class BooksApp extends React.Component {
 CategoryEnum = {
    currentlyReading:'currentlyReading',
    wantToRead:   'wantToRead',
    read: 'read',
};
  state = {
    books:[],
    booksSearchResult:[],
    emptyResult:true
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          booksSearchResult:[]
        }))
      })
    }
    handleShelfChange = (book,shelf)=>
    {
      book.shelf = shelf;
      BooksAPI.update(book, shelf);
      if (shelf === 'none') {
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id)
        }));
      } else {
        this.setState(prevState => ({
          books: prevState.books.filter(b => b.id !== book.id).concat(book)
        }));
    }
    }
    search=(queryInput)=>{
      BooksAPI.search(queryInput.trim()).then((result) => {
          if(result != undefined && result.error == undefined)
          {
          this.setState(()=>({
              booksSearchResult:[...result],
              emptyResult:false
          }))
      }
      else 
      {
        this.setState(()=>({
          booksSearchResult:[],
          emptyResult:true
      }))
      }
      })
  }
  render() {
    return (
      <div>
         <Route exact path='/'>
         <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <ShelfComponent books={this.state.books.filter(s=>s.shelf ===  this.CategoryEnum.currentlyReading)} shelfChange={this.handleShelfChange} title="Currently Reading" />
              <ShelfComponent books={this.state.books.filter(s=>s.shelf ===  this.CategoryEnum.wantToRead)} shelfChange={this.handleShelfChange} title="Want To Read" />
              <ShelfComponent books={this.state.books.filter(s=>s.shelf ===  this.CategoryEnum.read)} shelfChange={this.handleShelfChange} title="Read" />
              </div>
            </div>
           <div className="open-search">
            <Link
            to='/search'>
          </Link>
         </div>
          </div>
        )}
      </div>
         </Route>
         <Route path='/search' render={() => (
         <BookSearch shelfChange={this.handleShelfChange} handleSearch={this.search} searchedBooks={this.state.booksSearchResult} mybooks={this.state.books} emptyResultCheck={this.state.emptyResult}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
