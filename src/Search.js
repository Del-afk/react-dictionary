import React, { useState } from "react";
import axios from "axios";
import Result from './Result';
import Gallery from './Gallery';
import "./Search.css";

export default function Search(){
    let [keyword, setKeyword] = useState("");
    let [result , setResult] = useState(null);
    let [photos, setPhotos] = useState(null);

    function handleKeywordChange(event){
      setKeyword(event.target.value)
    }

  function searching(event){
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pixelsApiKey = "563492ad6f917000010000019ee4468de74b4981bab6dc5c48c3b3f4";
    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=30`;
    let headers = {"Authorization" : `Bearer ${pixelsApiKey}`};
    axios.get(pixelsApiUrl, { headers: headers }).then(handlePixelsResponse)
  }

  function handlePixelsResponse(response){
    setPhotos(response.data.photos)
  }

  function handleResponse(response){
    setResult(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition)
  }

    return (
        <div className="search-wrapper">
      <h1>Dictionary</h1>
      <form className="searchbox" onSubmit={searching}>
        <input type="search" placeholder="Search the word here..." onChange={handleKeywordChange}/>
        <button type="submit" onClick={searching}>&nbsp;</button>
    </form>
    <Result  result={result}/>
    <Gallery photos={photos} />
    </div>
    );
}