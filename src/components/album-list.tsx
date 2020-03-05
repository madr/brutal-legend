import React from "react";
import Album from "./album";
import * as interfaces from "../interfaces";

export default (props: AlbumList) => {
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

interface AlbumList {
    albums: Array<interfaces.Album>;
    handleOnClick: Function;
    blurred: boolean;
}
