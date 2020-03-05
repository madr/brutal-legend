import React from "react";

export default (props: Props) => {
    const { value, handleOnChange } = props;
    return (
        <div hidden>
            <label htmlFor="sortBy">Sortera efter</label>
            <select
                id="sortBy"
                value={value}
                onChange={evt => handleOnChange(evt.target.value)}
            >
                <option value="id">Inköpsdatum</option>
                <option value="artist">Artist</option>
                <option value="year">År</option>
            </select>
        </div>
    );
};

type Props = {
    value: string;
    handleOnChange: Function;
};
