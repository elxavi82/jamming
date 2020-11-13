import './App.css';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchResults = [{
        name: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        album: 'Nevermind',
        id: 75 
      },
    {
      name: 'Come As You Are',
      artist: 'Nirvana',
      album: 'Nevermind',
      id: 76
    }]
    }


  }

  render() {
    return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    {/*<!-- Add a SearchBar component -->*/}
    <div className="App-playlist">
      {<SearchResults searchResults={this.state.searchResults} />}
      {/*<!-- Add a Playlist component -->*/}
    </div>
  </div>
</div>
    );
  }
}


export default App;
