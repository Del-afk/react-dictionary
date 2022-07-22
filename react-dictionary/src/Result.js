import React from "react";
import "./Result.css";

export default function Result(){
    return (
        <div className="result">
        <div className="main-result">
            <h3 className="main-word">Magic</h3>
            <h5 className="phonetic">/ˈmadʒɪk/</h5>
        </div>
        <div className="noun"></div>
        <div className="abjective"></div>
    </div>
    );
}