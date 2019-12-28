import React, { Component } from 'react';

export default class Modal extends Component {
    handleKeyPress(e, callback) {
        alert("sdsdsd")
        console.log(e.charCode)
        callback();
    }

    render() {
        const {
            id,
            artist,
            title,
            songs,
            year,
            img,
            description,
            handleOnClick,
        } = this.props;
        if (id === undefined) {
            return '';
        }
        const imagePath = `assets/covers/${img}`;
        const song = songs.join(', ');
        return (
            <div className="selected-album"
            tabIndex="0"
            onClick={handleOnClick}
            onKeyPress={e => this.handleKeyPress(e, handleOnClick)}>
                <div className="selected-album__inner">
                    <span className="selected-album__summary">
                        #{id+1}: {artist} - {song}, från "{title}" ({year})<br />
                    </span>
                    <div className="selected-album__description">
                        {description.split('\n\n').map(text => (
                            <p key={text}>
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
