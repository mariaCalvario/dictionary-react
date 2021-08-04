import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        <span className="synonyms-text">Synonyms</span>
        <br />
        {props.synonyms.map((synonym, index) => {
          return (
            <span key={index} className="synonym">
              {synonym}
            </span>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
