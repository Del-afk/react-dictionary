import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function Search(){
    return (
        <div className="search-wrapper">
      <h1>Dictionary</h1>
      <form action="">
        <input type="search" placeholder="search..."/>
        <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
    </div>
    );
}