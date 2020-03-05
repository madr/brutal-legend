import React from "react";
import Album from "./album";
import * as interfaces from "../interfaces";

export default (props: Props) => {
    const { albums, handleOnClick, blurred } = props;
    const classNames = blurred ? "blur" : "";
    return (
        <div className={"albums " + classNames}>
            {albums.map((album: interfaces.Album) => (
                <Album
                    key={album.id}
                    album={album}
                    handleOnClick={handleOnClick}
                />
            ))}
        </div>
    );
};

type Props = {
    albums: Array<interfaces.Album>;
    handleOnClick(album: interfaces.Album): void;
    blurred: boolean;
};
