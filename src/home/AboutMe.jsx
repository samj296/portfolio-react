import {useState} from 'react';
import samImage from '../assets/sam-joseph.jpg';
import {
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    Box,
    CardMedia,
    CardActionArea,
    Grid
} from "@mui/material";

function AboutMe(){
    return (
            <Box sx={{width:"100%", display:"block"}}>
                <Grid  
                container spacing={2} 
                alignItems='stretch'
                sx={{width:"100%", 
                padding: 2,
                }}>
                    <Grid 
                    item xs={12} 
                    sm={4}
                    sx={{padding:1,
                    width:"15%"
                    }}>
                        <Card sx={{
                            marginTop: 3, 
                            padding: 1,
                            height:"contained",
                            width: "100%",
                            display:'flex',
                            flexDirection:"column"}}>
                            <CardActionArea
                            component = "a"
                            href='https://www.linkedin.com/in/sam-joseph-bc-canada/'
                            target="_blank"
                            rel="noopener noreferrer">
                                    <CardMedia
                                    component="img"
                                    height="150"
                                    image={samImage}
                                    alt='Sam Joseph'
                                    sx={{objectFit:"contain", backgroundColor:"inherit"}}
                                    />
                                    <Typography variant='h4'>
                                        Sam Joseph
                                    </Typography>

                                    <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#000000",
                                        "&:hover":{backgroundColor: "#797979"}}}>
                                        LinkedIn
                                    </Button>
                            </CardActionArea>
                            
                        </Card>
                        
                    </Grid>
                    
                    <Grid 
                    item 
                    xs={12} 
                    sm={4}
                    sx={{padding:1,
                        height: "100%",
                        width:"75%",
                        
                    }}>
                        <Card sx={{
                            marginTop: 3, 
                            padding: 1,
                            height:'100%',
                            display:'flex',
                            flexDirection:'column'}}>
                            <CardActionArea>
                                    <Typography variant='subtitle1'>
                                            Junior Full Stack Developer with strong foundations in JavaScript, Node.js, Express, 
                                            HTML, CSS, and backend application development. Transitioning into software engineering 
                                            after 13+ years of leadership, operations, and data driven problem solving roles. 
                                            Experienced in building full stack applications, designing REST APIs, managing data 
                                            workflows, and debugging backend logic.<br/>
                                            <br/>Bringing a unique combination of technical fundamentals, analytical thinking, and high
                                            ownership execution — with a proven ability to learn fast, adapt quickly, and deliver 
                                            reliable solutions in fast moving environments.
                                    </Typography>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    
                    
                </Grid>
                
            </Box> 
    );
}

export default AboutMe;