import React, { Component } from 'react';

class Search extends Component {

    cityInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getData(this.cityInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return(
            <form className="search" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter a City"
                    ref={this.cityInput}
                />
                <input 
                    type="submit" 
                    value="Get Weather"
                />
            </form>
        )
    }
}

export default Search;