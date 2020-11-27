import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    removeTrack(){
        const track = this.props.track;
        const onRemove = this.props.onRemove;
        onRemove(track);
    }

    addTrack(){
        const track = this.props.track;
        const onAdd = this.props.onAdd;
        onAdd(track);
    }

    renderAction(){
        let isRemoval = this.props.isRemoval;
        let buttonComponent;

        if(isRemoval){
            buttonComponent = <div className='Track-action' onClick={this.removeTrack}>-</div>;
        }else {
            buttonComponent = <div className='Track-action' onClick={this.addTrack}>+</div>;
        }

        return buttonComponent;
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div>
        );
    }
}

export default Track;