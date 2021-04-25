import React from "react";
import { Album } from "../interfaces";

export default (props: Props) => {
    const handleKeyPress = (
        keyPressed: string,
        albumId: number,
        close: Function
        //goto: Function
    ) => {
        if (keyPressed === "Escape") {
            close();
        }
        // } else if (keyPressed === "ArrowRight") {
        //     goto(albumId, 1);
        // } else if (keyPressed === "ArrowLeft") {
        //     goto(albumId, -1);
        // }
    };

    const { album, close /*goto*/ } = props;
    const { id, artist, title, songs, year, img, description } = album;

    if (id === undefined) {
        return "";
    }

    const imagePath = `./covers/${img}`;
    const song = songs.join(", ");

    document.onkeyup = (e: KeyboardEvent) =>
        handleKeyPress(e.key, album.id, close /*goto*/);

    return (
        <div
            className="selected-album blurred"
            tabIndex={0}
            onClick={() => close()}
        >
            <div className="selected-album__inner">
                <figure className="selected-album__cover">
                    <img
                        src={imagePath}
                        alt="cover"
                        className="selected-album__media"
                    />
                </figure>
                <span className="selected-album__summary">
                    #{("00" + id).substr(-2, 2)}: {artist} - {song}, från "{title}" ({year})
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

type Props = {
    album: Album;
    close(): void;
    // goto(albumId: number, direction: number): void;
};
