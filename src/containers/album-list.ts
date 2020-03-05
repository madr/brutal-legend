import { connect } from "react-redux";
import AlbumList from "../components/album-list";
import { selectAlbum } from "../actions";
import { Album, State } from "../interfaces";

const atos = (o: Album) =>
    [o.artist, o.title, o.songs.join(" "), o.year].join(" ").toLowerCase();

const getAlbums = (albums: Array<Object>, filter: string, sortKey: string) => {
    if (filter) {
        const term = filter.toLowerCase();
        albums = albums.filter((album: Album) => atos(album).match(term));
    }
    return [...albums].sort((a: Album, b: Album) =>
        a[sortKey] > b[sortKey] ? 1 : -1
    );
};

const mapStateToProps = (state: State) => ({
    albums: getAlbums(state.albums, state.visibilityFilter, state.sortKey),
    blurred: "id" in state.selectedAlbum,
    sortKey: state.sortKey
});

const mapDispatchToProps = (dispatch: Function) => ({
    handleOnClick: (album: Album) => dispatch(selectAlbum(album))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
