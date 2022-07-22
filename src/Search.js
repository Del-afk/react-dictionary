import React from "react";
import "./Search.css";


export default function Search(){
    return (
        <div className="search-wrapper">
      <h1>Dictionary</h1>
      <form action="">
        <input type="search" placeholder="search..."/>
        <button type="submit"><img className="search-icon" src="/search-icon.svg" alt=""/></button>
    </form>
    </div>
    );
}