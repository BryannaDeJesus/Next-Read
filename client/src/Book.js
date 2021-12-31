import React, { useEffect, useState } from "react"
import axios from "axios";
import "./styles.css"

function Book() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyDzE5gl0IrxmLYJuC_Dwf26Om2skuCG1us");

  const [titleHeader, setTitleHeader] = useState("");
  const [authorHeader, setAuthorHeader] = useState("");
  const [descriptionHeader, setDescriptionHeader] = useState("");

  function handleInput(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleClick(event) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
    .then(data => {

      const res = data.data.items;
      const randomBook = res[Math.floor(Math.random()*res.length)]
      const bookInfo = randomBook.volumeInfo;
      const { title } = bookInfo;
      const { authors } = bookInfo;
      const { thumbnail } = bookInfo.imageLinks;
      const { description } = bookInfo;
      const { previewLink } = bookInfo;
      
      
      setResult([title, authors, thumbnail, description, previewLink, "Click the book image to be redirected to E-Book preview and purchase options."]);
      
      setTitleHeader("Title: ");
      setAuthorHeader("Author: ");
      setDescriptionHeader("Description: ")
    })
    .catch(error => console.log('Error in fetch request.'))
  }
  function buttonClear(){
    window.location.reload();
  }

    return (
      <>
      <article className="book"> <div>
         <input size="25" type="text" onChange={handleInput} placeholder="Search here..."/>
      </div>
    <div className="button">
      <button id="searchButton" onClick={handleClick}>Search</button><button type="reset" onClick={buttonClear}>Clear</button>
    </div>
    <div className="title">
      {titleHeader}{result[0]}
    </div>
    <div className="author">
      {authorHeader}{result[1]}
    </div>
    <div className="image">  
      <a target="_blank" href={result[4]}><img src= {result[2]} alt={result}/></a>
    </div>
    <div className="bookLine">
      <h4>{result[5]}</h4>
    </div>
    <div className="description">
      {descriptionHeader}{result[3]}
    </div>
    </article> 

    </>
    )
}

export default Book;