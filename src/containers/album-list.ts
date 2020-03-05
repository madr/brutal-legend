import { connect } from "react-redux";
import AlbumList from "../components/album-list";
import { selectAlbum } from "../actions";
import { Album, State } from "../interfaces";

const atos = (o: Album) =>
    [o.artist, o.title, o.songs.join(" "), o.year].join(" ").toLowerCase();

const getAlbums = (albums: Array<Object>, filter: string) => {
    if (filter) {
        const term = filter.toLowerCase();
        return albums.filter((album: Album) => atos(album).match(term));
    }
    return albums;
};

const mapStateToProps = (state: State) => ({
    albums: getAlbums(state.albums, state.visibilityFilter),
    blurred: "id" in state.selectedAlbum
});

const mapDispatchToProps = (dispatch: Function) => ({
    handleOnClick: (album: Album) => dispatch(selectAlbum(album))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
