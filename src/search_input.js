 
import React, { Component } from 'react';

class SearchInput extends Component {
    constructor(props) {
        super(props);
    }

    onInputChange(term) {
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div >
                <input className="form-control"
                       type="text"
                       placeholder="Search by title..."
                       onChange={ event => this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default SearchInput;