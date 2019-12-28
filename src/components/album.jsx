import React, { Component } from 'react';

export default class Album extends Component {
    handleKeyPress(e, callback) {
        const SPACE_KEY = 32
        const ENTER_KEY = 13
        if (e.charCode === SPACE_KEY || e.charCode === ENTER_KEY) {
            e.preventDefault();
            callback();
        }
    }

    render() {
        const { album, handleOnClick } = this.props;
        const {
            id,
            artist,
            title,
            songs,
            year,
            img,
            purchased_on,
        } = album;
        const imagePath = `assets/covers/${img}`;
        const song = songs.join(', ');
        return (
            <article className="album" tabIndex="0" role="button" onClick={() => handleOnClick(album)}>
                <figure className="album__cover">
                    <img src={imagePath} alt="cover" className="album__cover__media" />
                </figure>
                <span>
                    #{id+1}: {artist} - {song}, från "{title}" ({year})<br />
                    <small>✔️ {purchased_on}</small>
                </span>
            </article>
        );
    }
}
