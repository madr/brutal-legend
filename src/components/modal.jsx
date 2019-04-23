import React, { Component } from 'react';

export default class Modal extends Component {
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
            <div id="selected-album" tabIndex="0" onClick={handleOnClick}>
                <div>
                    <figure>
                        <img src={imagePath} alt="cover" />
                    </figure>
                    <span>
                        #{id+1}: {artist} - {song}, från "{title}" ({year})<br />
                    </span>
                    <p>
                        {description.split('\n\n').map(text => (
                            <React.Fragment>
                                {text}
                                <br />
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>
        )
    }
}
