import { connect } from "react-redux";
import FilterInput from "../components/filter-input";
import { setVisibilityFilter } from "../actions";
import { State } from "../interfaces";

const mapStateToProps = (state: State) => ({
    value: state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Function) => ({
    handleOnChange: (filter: string) => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);
