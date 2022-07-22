import React from "react";
import "./Result.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Result() {
  return (
    <div className="result">
      <div className="main-result">
        <h3 className="main-word">Magic</h3>
        <h5 className="phonetic">/ˈmadʒɪk/</h5>
      </div>
      <div className="noun">
        <div className="subject-border">
          <FontAwesomeIcon className="heartAwsome" icon={faHeart} />
          <h3 className="subject">NOUN</h3>
        </div>
        <div className="textbox">
          <p>
            the power of apparently influencing events by using mysterious or
            supernatural forces. "suddenly, as if by magic, the doors start to
            open"
          </p>
        </div>
      </div>
      <div className="abjective">
        <div className="subject-border">
          <FontAwesomeIcon className="heartAwsome" icon={faHeart} />
          <h3 className="subject">ADJECTIVE</h3>
        </div>
        <div className="textbox">
          <p>having or apparently having supernatural powers. "a magic wand"</p>
        </div>
      </div>
    </div>
  );
}
