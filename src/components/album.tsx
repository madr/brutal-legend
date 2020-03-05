import React from "react";
import { Album } from "../interfaces";

export default (props: Props) => {
    const handleKeyPress = (e: KeyboardEvent, callback: Function) => {
        const SPACE_KEY = 32;
        const ENTER_KEY = 13;
        if (e.charCode === SPACE_KEY || e.charCode === ENTER_KEY) {
            e.preventDefault();
            callback();
        }
    };

    const { album, handleOnClick } = props;
    const { id, artist, title, songs, year, img, purchased_on } = album;
    const imagePath = `./covers/${img}`;
    const song = songs.join(", ");
    return (
        <article
            className="album"
            tabIndex={0}
            role="button"
            onClick={() => handleOnClick(album)}
        >
            <figure className="album__cover">
                <img
                    src={imagePath}
                    alt="cover"
                    className="album__cover__media"
                />
            </figure>
            <span>
                #{id + 1}: {artist} - {song}, från "{title}" ({year})<br />
                <small>✔️ {purchased_on}</small>
            </span>
        </article>
    );
};

type Props = {
    key: number;
    album: Album;
    handleOnClick(album: Album): void;
};
