import React from "react";

export default (props: Props) => {
    const { value, handleOnChange } = props;
    return (
        <div>
            <label htmlFor="sortBy" className="visuallyhidden">
                Sortera efter
            </label>
            <select
                id="sortBy"
                value={value}
                className="field"
                onChange={(evt: { target: HTMLSelectElement }) =>
                    handleOnChange(evt.target.value)
                }
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
    handleOnChange(sortKey: string): void;
};
