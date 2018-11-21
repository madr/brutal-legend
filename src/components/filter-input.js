import React, { Component } from 'react';

export default class FilterInput extends Component {
    render() {
        const {
            value,
            handleOnChange
        } = this.props;
        return (
            <div>
                <input
                    type='text'
                    value={value}
                    onChange={evt => handleOnChange(evt.target.value)}
                    placeholder='Filtrera på år, artist, låt, skivtitel ...'
                />
            </div>
        );
    }
}