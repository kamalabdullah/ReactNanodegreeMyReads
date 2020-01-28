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
        const {book,shelfChange,shelf} = this.props;
        return(
            <div className="book-shelf-changer">
                <select value={shelf === undefined?"none" : shelf} onChange={(event)=>shelfChange(book,event.target.value)}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default ShelfChanger