import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  function renderAction() {
    return <button className="Track-action">{props.isRemoval ? '-' :  '+'}</button>
  }

  return (
    <div className={styles.Track}>
      <div className={styles.Track-information}>
        <h3>track name will go here</h3>
        <p>track artist will go here | track album will go here</p>
      </div>
      renderAction();
    </div>
  );
}

export default Track;
