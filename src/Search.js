import React from "react";
import "./Search.css";

export default function Search(){
    return (
        <div className="search-wrapper">
      <h1>Dictionary</h1>
      <form class="searchbox" action="http://thecodeblock.com">
        <input type="search" placeholder="Search the word here..." />
        <button type="submit" value="search">&nbsp;</button>
    </form>
    </div>
    );
}