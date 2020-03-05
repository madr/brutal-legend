import { connect } from "react-redux";
import SortSelect from "../components/sort-select";
import { setSortKey } from "../actions";
import { State } from "../interfaces";

const mapStateToProps = (state: State) => ({
    value: state.sortKey
});

const mapDispatchToProps = (dispatch: Function) => ({
    handleOnChange: (key: string) => dispatch(setSortKey(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortSelect);
