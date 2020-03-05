import React from "react";
import { Album } from "../interfaces";

interface Modal {
    album: Album;
    handleOnClick: Function;
}

export default (props: Modal) => {
    const handleKeyPress = (e: KeyboardEvent, callback: Function) => {
        console.log(e.charCode);
        callback();
    };

    const { album, handleOnClick } = props;
    const { id, artist, title, songs, year, img, description } = album;
    if (id === undefined) {
        return "";
    }
    // const imagePath = `assets/covers/${img}`;
    const song = songs.join(", ");
    return (
        <div
            className="selected-album"
            tabIndex={0}
            onClick={() => handleOnClick()}
            onKeyPress={e => handleKeyPress(e, handleOnClick)}
        >
            <div className="selected-album__inner">
                <span className="selected-album__summary">
                    #{id + 1}: {artist} - {song}, från "{title}" ({year})
                    <br />
                </span>
                <div className="selected-album__description">
                    {description.split("\n\n").map(text => (
                        <p key={text}>{text}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
