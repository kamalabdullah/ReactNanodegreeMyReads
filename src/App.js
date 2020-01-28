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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    currentlyReadingList:[],
    wantToReadList:[],
    readList:[],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books,
          currentlyReadingList:books.filter(s=>s.shelf === this.CategoryEnum.currentlyReading ),
          wantToReadList:books.filter(s=>s.shelf === this.CategoryEnum.wantToRead ),
          readList:books.filter(s=>s.shelf === this.CategoryEnum.read )
        }))
      })
    }
    handleShelfChange = (book,shelf)=>
    {
     BooksAPI.update(book,shelf).then((result)=>{
      this.setState((currentState) => ({
        currentlyReadingList:currentState.books.filter(s=>(result.currentlyReading.includes(s.id))),
        wantToReadList:currentState.books.filter(s=>(result.wantToRead.includes(s.id))),
        readList:currentState.books.filter(s=>(result.read.includes(s.id)))
      }))
       console.log(result);
     });
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
              <ShelfComponent books={this.state.currentlyReadingList} shelfChange={this.handleShelfChange} title="Currently Reading" />
              <ShelfComponent books={this.state.wantToReadList} shelfChange={this.handleShelfChange} title="Want To Read" />
              <ShelfComponent books={this.state.readList} shelfChange={this.handleShelfChange} title="Read" />
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
         <Route path='/search' render={({ history }) => (
         <BookSearch shelfChange={this.handleShelfChange}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
