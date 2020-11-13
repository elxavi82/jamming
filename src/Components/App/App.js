import './App.css';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      searchResults: [{
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
    },
    {
      name: 'The Man Who Sold The World',
      artist: 'Nirvana',
      album: 'Unplugged in New York',
      id: 77
    }],

    playListName: 'Grunge',
    playListTracks: [
      {
        name: 'Come As You Are',
        artist: 'Nirvana',
        album: 'Nevermind',
        id: 76
    },
    {
      name: 'Evenflow',
      artist: 'PearlJam',
      album: 'Ten',
      id: 88
    }
    ]

    }


  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else {
      
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
      {<PlayList playlistName={this.state.playListName} playlistTracks={this.state.playListTracks}/>}
    </div>
  </div>
</div>
    );
  }
}


export default App;
