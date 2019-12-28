import React, { Component } from 'react';
import Album from './album';

export default class AlbumList extends Component {
    render() {
        const {
            albums,
            handleOnClick,
            blurred,
        } = this.props;
        const classNames = blurred ? 'blur' : ''
        return (
            <div className={"albums " + classNames}>
                {albums.map(album => (
                    <Album
                        key={album.id}
                        album={album}
                        handleOnClick={handleOnClick}
                    />
                ))}
            </div>
        );
    }
}
