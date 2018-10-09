import React, { Component } from 'react';

class Search extends Component {

    cityInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getWeatherData(this.cityInput.current.value);
        e.currentTarget.reset();
    }

    render() {
        return(
            <form className="search" onSubmit={this.handleSubmit}>
            <i className="fas fa-search"></i>
                <input 
                    className="searchInput"
                    type="text"
                    placeholder="Enter a City"
                    ref={this.cityInput}
                />
                <input 
                    className="searchButton"
                    type="submit" 
                    value="Get Weather"
                />
            </form>
        )
    }
}

export default Search;