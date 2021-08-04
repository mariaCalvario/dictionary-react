import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div className="definition">
              <span className="definition-text">Definition</span>
              <br />
              {definition.definition}
            </div>
            {definition.example && (
              <div className="example">
                <span className="example-text">Example</span>
                <br />
                {definition.example}
              </div>
            )}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
