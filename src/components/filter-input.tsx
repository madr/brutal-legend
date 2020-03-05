import React from "react";

export default (props: Props) => {
    const { value, handleOnChange } = props;
    return (
        <div>
            <input
                type="text"
                value={value}
                className="field"
                onChange={(evt: { target: HTMLInputElement }) =>
                    handleOnChange(evt.target.value)
                }
                placeholder="Filtrera på år, artist, låt, skivtitel ..."
            />
        </div>
    );
};

type Props = {
    value: string;
    handleOnChange(filterValue: string): void;
};
