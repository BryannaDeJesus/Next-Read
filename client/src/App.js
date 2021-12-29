
import React from "react";
import { hot } from 'react-hot-loader/root';
import Container from './Container';

function App() {

  // const [book, setBook] = useState("");
  // const [result, setResult] = useState([]);
  // const [apiKey, setApiKey] = useState("AIzaSyDzE5gl0IrxmLYJuC_Dwf26Om2skuCG1us")

  // function handleInput(event) {
  //   const book = event.target.value;

  //   setBook(book);

  // }

  // function handleClick(event) {
  //   fetch("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"maxResults=50")
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  return (
    <>
      <div className="headers">
            <h1>
             Next Read
            </h1>
            <h2>
              Welcome to Next Read. Please login to GoogleBooks to have your next read randomly chosen from your 'To Read' list.
            </h2>
      </div>
      <div>
        <Container />
      </div>
      {/* <div className="button">
      <button type="button" onClick={handleClick}>Submit</button>
      </div> */}
      </>
  )
}
// class App extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <>
//         <h1>
//           Hello {name}
//         </h1>
//       </>
//     );
//   }
// }

export default hot(App);
