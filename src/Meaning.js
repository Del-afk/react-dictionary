import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Example from "./Example";
import Synonim from "./Synonim";

export default function Meaning(props) {
  return (
    <div className="noun">
      <div className="subject-border">
        <FontAwesomeIcon className="heartAwsome" icon={faHeart} />
        <h3 className="subject">{props.meaning.partOfSpeech.toUpperCase()}</h3>
      </div>
      <div className="textbox">
        {props.meaning.definitions.map((item, index) => {
          return (
            <p key={index}>
              <strong>Definition {index+1} : </strong>
              {item.definition}
              <Example example={item.example} />
            </p>
          );
        })}
        <Synonim synonim={props.meaning.synonyms} />

      </div>

    </div>
  );
}
