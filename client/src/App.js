
import React from "react";
import { hot } from 'react-hot-loader/root';
import Book from './Book';
import "./styles.css"

function App() {

  return (
    <>
    <article className="header">
    <div className="headers">
            <h1>
             Next Read App
            </h1>
            <h3>
              Find your next read by author, genre, or keyword of interest.
            </h3>
      </div>
      <div><img src="https://i.postimg.cc/9f0w5q3V/books.png" alt="bookshelf"/><img src="https://i.postimg.cc/9f0w5q3V/books.png" alt="bookshelf"/></div>
    </article>
      <div>
        <Book />
      </div>
  
   
      </>
  )
}


export default hot(App);
