import './PlayList.css';
import React from 'react';
import TrackList from '../TrackList/TrackList';
class PlayList extends React.Component{

    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event){
        const onNameChange = this.props.onNameChange;
        const name = event.target.value;
        onNameChange(name);
    }

    render(){
        return(
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                {<TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>}
                <div className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</div>
            </div>
        );
    }
}

export default PlayList;