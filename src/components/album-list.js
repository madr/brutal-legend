import React, { Component } from 'react';
import Album from "./album";

export default class AlbumList extends Component {
    componentWillMount() {
        this.props.loadAlbumData();
    }
    render() {
        const {
            albums,
        } = this.props;
        return (
            <div id="albums">
                {albums.map(album => (
                    <Album key={album.id} {...album} />
                ))}
            </div>
        );
    }
}
