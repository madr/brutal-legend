import React from "react";

export default (props: Props) => {
    const { value, handleOnChange } = props;
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={evt => handleOnChange(evt.target.value)}
                placeholder="Filtrera på år, artist, låt, skivtitel ..."
            />
        </div>
    );
};

type Props = {
    value: string;
    handleOnChange: Function;
};
