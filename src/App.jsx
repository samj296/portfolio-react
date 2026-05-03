import { useState } from 'react';
import TemporaryDrawer from './Navigation.jsx';
// import './App.css'
//Importing all the pages here
import Home from "./home/Home.jsx";
import Projects from './projects/Projects.jsx';
import Experience from './experience/Experience.jsx';
import { 
  Container,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Drawer,
 } from '@mui/material';

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    if(page === "home") return <Home/>;
    if(page === "projects") return <Projects/>;
    if(page === "experience") return <Experience/>;
  };
  

  return (
    <div>
      <TemporaryDrawer setPage={setPage}/>
      {renderPage()};
    </div>
    
  )
}

export default App;
