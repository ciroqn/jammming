import React from "react";
import styles from "./Playlist.module.css";
import Tracklist from '../Tracklist/Tracklist';

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <input value={"New Playlist"} />
       <Tracklist />
      <button className={styles.playlistSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;
