import {useState} from 'react';
import AboutMe from "./AboutMe.jsx"
import GitHubActivity from './GitHubActivity.jsx';
import {
    Container,
} from "@mui/material";
import Journey from './Journey.jsx';





function Home(){
    return(
        <Container>
            <AboutMe/>
            <GitHubActivity/>
            <Journey/>
        </Container>
        
    );
};

export default Home;