import React from "react";
import AlbumList from "../containers/album-list";
import FilterInput from "../containers/filter-input";
import SortSelect from "../containers/sort-select";
import Modal from "../containers/modal";

export default () => (
    <React.Fragment>
        <header>
            <h1>Brütal Legend</h1>
            <SortSelect />
            <FilterInput />
        </header>
        <AlbumList />
        <Modal />
    </React.Fragment>
);
