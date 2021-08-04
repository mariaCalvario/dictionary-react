import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <span className="text">{props.phonetic.text}</span>
      <br />
      <audio controls src={props.phonetic.audio}>
        Listen
      </audio>
    </div>
  );
}
