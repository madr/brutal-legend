export interface Album {
    id: number;
    artist: string;
    title: string;
    songs: Array<string>;
    year: number;
    img: string;
    purchased_on: string;
    description: string;
}

export interface State {
    albums: Array<Album>;
    selectedAlbum: Album;
    visibilityFilter: string;
    sortKey: string;
}
