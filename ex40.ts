interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional property for tracks
}

function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating album objects using make_album function
let album1 = make_album('Artist 1', 'Album 1');
let album2 = make_album('Artist 2', 'Album 2', 12);
let album3 = make_album('Artist 3', 'Album 3', 8);

// Printing each album object
console.log(album1);
console.log(album2);
console.log(album3);
