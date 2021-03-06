import './App.css';
import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import SearchBar from '../SearchBar/SearchBar'
import Spotify from '../../util/Spotify';

class App extends React.Component{

  constructor(props){
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [],

    playListName: 'Grunge',
    playListTracks: []

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
      newPlayList = this.state.playListTracks.filter(track => track.id !== foundTrack.id);

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

  savePlaylist(){
    const trackURIs = this.state.playListTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackURIs).then( () => {
      this.setState({
        playListname: 'New Playlist',
        playlistTracks: []
      })
    })

  }

  search(term){
    Spotify.search(term).then(searchResults => {
      this.setState({
        searchResults: searchResults
      });
    })
  }

  render() {
    return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
      <PlayList playlistName={this.state.playListName} playlistTracks={this.state.playListTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
    </div>
  </div>
</div>
    );
  }
}


export default App;
