import { useState } from 'react';
// import './App.css'
//Importing all the pages here
import Home from "./home/Home.jsx"

function App() {
  const [page, setPage] = useState("homepage");
  const [pullPage, setPullPage] = useState(page);
  
  

  return (
    <Home/>
  )
}

export default App;
