import React from "react";
import "./Playlist.css";
import TrackList from './Tracklist/Tracklist';

function Playlist() {
  return (
    <div className="Playlist">
      <input value={"New Playlist"} />
       <Tracklist />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
