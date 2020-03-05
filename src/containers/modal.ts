import { connect } from "react-redux";
import Modal from "../components/modal";
import { unselectAlbum } from "../actions";
import { State } from "../interfaces";

const mapStateToProps = (state: State) => ({
    album: state.selectedAlbum
});

const mapDispatchToProps = (dispatch: Function) => ({
    close: () => dispatch(unselectAlbum())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
