import React from 'react';
import { connect } from 'react-redux';
import AlbumList from '../components/album-list';
import { selectAlbum } from '../actions'

const getAlbums = (albums, filter) => {
    const atos = o => [o.artist, o.title, o.songs.join(' '), o.year].join(' ').toLowerCase();
    if (filter) {
        const term = filter.toLowerCase();
        return albums.filter(album => atos(album).match(term));
    }
    return albums;
};

const mapStateToProps = state => ({
    albums: getAlbums(state.albums, state.visibilityFilter),
    blurred: "id" in state.selectedAlbum,
});

const mapDispatchToProps = dispatch => ({
    handleOnClick: album => dispatch(selectAlbum(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
