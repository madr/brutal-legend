import React, { Component } from 'react';
import AlbumListContainer from '../containers/album-list';
import FilterInputContainer from '../containers/filter-input';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Brütal Legend</h1>
                    <FilterInputContainer />
                </header>
                <AlbumListContainer />
            </div>
        );
    }
}
