import React, { Component } from 'react';

export default class Album extends Component {
    render() {
        const { album, handleOnClick } = this.props
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
            <article onClick={() => handleOnClick(album)}>
                <figure>
                    <img src={imagePath} alt="cover" />
                </figure>
                <span>
                    #{id+1}: {artist} - {song}, från "{title}" ({year})<br />
                    <small>✔️ {purchased_on}</small>
                </span>
            </article>
        )
    }
}
