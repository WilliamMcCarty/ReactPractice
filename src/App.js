import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header"
import Profile from "./Components/Profile/Profile"
import Projects from "./Components/Projects/Projects"
import Footer from './Components/Footer'

export default function App() {
  const [showContent, setShowContent] = useState("Home");
  return (
    <div className="site-container">
      <Header setShowContent={setShowContent} />
      {showContent === "Profile" && <Profile />}
      {showContent === "Practice" && <Projects />}
      <Footer />
    </div>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
