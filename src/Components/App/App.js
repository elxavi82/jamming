import './App.css';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';

class App extends React.Component{

  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
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

  updatePlaylistName(name){
    this.setState({
      playListName: name
    });
  }

  removeTrack(track){
    const foundTrack = this.state.playListTracks.find(savedTrack => savedTrack.id === track.id);
    let newPlayList = [];
    if(foundTrack){
      newPlayList = this.state.playListTracks.filter(track => track.id != foundTrack.id);

      this.setState(
        {
          playListTracks: newPlayList
        }
      );

    }
  }

  addTrack(track){
    if (this.state.playListTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else {

      let newList = this.state.playListTracks;
      newList.push(track);
      this.setState({
        playListTracks: newList
      });
    }
  }

  render() {
    return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    {/*<!-- Add a SearchBar component -->*/}
    <div className="App-playlist">
      {<SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>}
      {<PlayList playlistName={this.state.playListName} playlistTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName}/>}
    </div>
  </div>
</div>
    );
  }
}


export default App;
