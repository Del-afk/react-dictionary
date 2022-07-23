import React from "react";
import "./Result.css";
import Meaning from "./Meaning";


export default function Result(props) {
  if (props.result) {
    return (
      <div className="result">
        <div className="main-result">
          <h3 className="main-word">{props.result.word}</h3>
          <h5 className="phonetic">{props.result.phonetic}</h5>
        </div>
        {props.result.meanings.map(function(meaning, index){
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
              </div>
          )
        })}
      </div>
    );
  } else {
    return null;
  }
}
