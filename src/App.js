// import logo from './logo.svg';
// import './App.css';
// import Component from './component.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           leaming
//         </p>
//         <div>
//           <Component />
//         </div>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           m exited
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// create a custom component in src folder
// an ordered list of my top 5 favorite random things

























import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);
  function handleClick(){
    console.log('clicked!');
    setValue('X');
  }
  return(
     <button 
      className="square" 
      onClick={handleClick}
     >
      {value}
    </button>
  );
}

export default function Board(){
  return(
    <>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      {/* <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button> */}
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      {/* <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button> */}
    </div>
    <div className="board-row">
      <Square />
      <Square />
      <Square />
      {/* <button className="square">X</button>
      <button className="square">X</button>
      <button className="square">X</button> */}
    </div>
    </>
  );
}