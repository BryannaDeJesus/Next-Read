
import React from "react";
import { hot } from 'react-hot-loader/root';
import Book from './Book';
import "./styles.css"

function App() {

  return (
    <>
    
    <div className="headers">
            <h1>
             Next Read App
            </h1>
            
            <h2>
              Welcome to Next Read - where your next read will be randomly chosen for you based on keyword or genre!
            </h2>
      </div>
      <div>
        <Book />
      </div>
   
      </>
  )
}


export default hot(App);
