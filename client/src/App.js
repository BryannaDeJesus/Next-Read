
import React from "react";
import { hot } from 'react-hot-loader/root';
import Login from './Login';

function App(props) {
  return (
      <div>
            <h1>
             Next Read
            </h1>
            <h2>
              Welcome to Next Read. Please login to GoogleBooks to have your next read randomly chosen from your 'To Read' list.
            </h2>
        <Login />
      </div>
   );
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

export default App;
