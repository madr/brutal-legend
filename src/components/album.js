import React, { Component } from 'react';

export default class Album extends Component {
    render() {
        const {
            id,
            artist,
            title,
            songs,
            year,
            img,
            purchased_on,
        } = this.props;
        const imagePath = `/assets/covers/${img}`;
        const song = songs.join(', ');
        return (
            <article>
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
