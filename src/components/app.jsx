import React, { Component } from 'react';
import AlbumListContainer from '../containers/album-list';
import FilterInputContainer from '../containers/filter-input';
import SortSelectContainer from '../containers/sort-select';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Brütal Legend</h1>
                    <SortSelectContainer />
                    <FilterInputContainer />
                </header>
                <AlbumListContainer />
            </div>
        );
    }
}
