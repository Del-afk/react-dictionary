import React from "react";

export default function Synonim(props){
    if (props.synonim.length){
        return (
            <div>
            <br/>
            <strong>Synonym :</strong> {props.synonim.join(', ')}
            </div>
        );
    }
    return null;
}