import React, { useEffect, useState } from "react"
import axios from "axios";

function Container() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyDzE5gl0IrxmLYJuC_Dwf26Om2skuCG1us")

  function handleInput(event) {
    const book = event.target.value;
    
    setBook(book);

  }

  function handleClick(event) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
    .then(data => {
      const res = data.data.items;
      const random = res[Math.floor(Math.random()*res.length)]
      console.log(random)
      setResult(random);
      
    })
    .catch(error => console.log('Error in fetch')
    // fetch("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"maxResults=50")
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    )
  }
    return (
      <>
      <div className="Input">
         <input type="text" onChange={handleInput} placeholder="Search for Books"/>
      </div>
    <div className="Buttons">
      <button className="Button" onClick={handleClick}>Search</button>
    </div>
    <div>
      {JSON.stringify(result)}
    </div>
    </>
    )
}

export default Container;