import React, { Component } from 'react';

export default class SortSelect extends Component {
    render() {
        const { value, handleOnChange } = this.props;
        return (
            <div hidden>
                <label htmlFor="sortBy">Sortera efter</label>
                <select
                    id="sortBy"
                    value={value}
                    onChange={evt => handleOnChange(evt.target.value)}>
                    <option value="id">Inköpsdatum</option>
                    <option value="artist">Artist</option>
                    <option value="year">År</option>
                </select>
            </div>
        );
    }
}