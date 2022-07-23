import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Meaning(props) {
  return (
    <div className="noun">
      <div className="subject-border">
        <FontAwesomeIcon className="heartAwsome" icon={faHeart} />
        <h3 className="subject">{props.meaning.partOfSpeech.toUpperCase()}</h3>
      </div>
      <div className="textbox">
        {props.meaning.definitions.map((item, index) => {
          return <p>{index+1} : {item.definition}</p>;
        })}
      </div>
    </div>
  );
}
