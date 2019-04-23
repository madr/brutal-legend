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
            <div className="selected-album" tabIndex="0" onClick={handleOnClick}>
                <div className="selected-album__inner">
                    <figure className="selected-album__cover">
                        <img src={imagePath} alt="cover" className="selected-album__cover__media" />
                    </figure>
                    <span className="selected-album__summary">
                        #{id+1}: {artist} - {song}, från "{title}" ({year})<br />
                    </span>
                    <p className="selected-album__description">
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
        );
    }
}
