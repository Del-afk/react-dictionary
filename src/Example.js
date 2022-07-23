import React from "react";

export default function Example(props){
    if (props.example){
        return (
            <div>
            <br/>
            <strong>Example :</strong> {props.example}
            </div>
        );
    }
    return null;
}