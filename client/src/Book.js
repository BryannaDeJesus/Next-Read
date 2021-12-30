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

  // const btnClear = document.querySelector('button');
  // const input = document.querySelector('input')
  // btnClear = addEventListener('click', () => {
  //   input.value = "";
  // })
    return (
      <>
      <article className="book"> <div>
         <input size="25" type="text" onChange={handleInput} placeholder="Search by keyword or genre"/>
      </div>
    <div className="Buttons">
      <button className="Button" onClick={handleClick}>Search</button>
    </div>
    <div>
      {titleHeader}{result[0]}
    </div>
    <div>
      {authorHeader}{result[1]}
    </div>
    <div> 
      <a target="_blank" href={result[4]}><img src= {result[2]} alt={result}/></a>
    </div>
    <div>
      <h4>{result[5]}</h4>
    </div>
    <div>
      {descriptionHeader}{result[3]}
    </div></article>

    </>
    )
}

export default Book;