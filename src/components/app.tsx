import React from "react";
import AlbumList from "../containers/album-list";
import FilterInput from "../containers/filter-input";
import Modal from "../containers/modal";

export default () => (
    <React.Fragment>
        <header>
            <h1>Brütal Legend</h1>
            <FilterInput />
        </header>
        <AlbumList />
        <Modal />
    </React.Fragment>
);
