import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.clickSearch = this.clickSearch.bind(this);
    }

    search(term){
        const onSearch = this.props.onSearch;
        onSearch(term);
    }

    clickSearch(event){
        const term = this.state.term;
        console.log(term);
        this.search(term);
    }

    handleTermChange(event){
        const newTerm = event.target.value;
        console.log(newTerm);
        this.setState({
            term: newTerm
        })
    }

    render(){
        return(
    <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
        <div className="SearchButton" onClick={this.clickSearch}>SEARCH</div>
    </div>
      );
    }
}

export default SearchBar;