import React from 'react';
import Select from 'react-select';

class ShelfChanger extends React.Component {
    options = [
    {value:"currentlyReading",label:"Currently Reading"},
    {value:"wantToRead",label:"Want to Read"},
    {value:"read",label:"Read"},
    {value:"none",label:"None"}
    ]
    render(){
        const {book,shelfChange} = this.props;
        const defultValue = this.options.filter(s=>s.value == book.shelf);
        return(
            <div className="book-shelf-changer">
            {/* <Select
                options={this.options}
                value={this.options.map(s=>s.value)}
                onChange={(event)=>shelfChange(book,event.target.value)}
                defaultValue={defultValue}
            /> */}
            <select key={book.id} onChange={(event)=>shelfChange(book,event.target.value)}>
              <option value="move" disabled>Move to...</option>
              {
                  this.options.map((option)=>(
                    book.shelf ===  option.value &&(
                      <option value={option.value} key={option.value} selected>{option.label}</option>
                    )))
            }
               {
                  this.options.map((option)=>(
                    book.shelf !==  option.value &&(
                      <option key={option.value} value={option.value}>{option.label}</option>
                    )
                  ))
              } 
            </select>
          </div>
        )
    }
}
export default ShelfChanger