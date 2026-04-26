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

function Home(){
    return(
        <Box sx={{width:"100%"}}
        display="block">
            <Grid  
            container spacing={2} 
            alignItems='stretch'
            sx={{width:"100%", padding: 2}}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{
                        marginTop: 3, 
                        padding: 1,
                        height:'100%',
                        display:'flex',
                        flexDirection:"column"}}>
                        <CardActionArea>
                                <CardMedia
                                component="img"
                                height="150"
                                image={samImage}
                                alt='Sam Joseph'
                                sx={{objectFit:"contain"}}
                                />
                                <Typography variant='h4'>
                                    Sam Joseph
                                </Typography>
                            
                        </CardActionArea>
                        
                    </Card>
                    
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{
                        marginTop: 3, 
                        padding: 1,
                        height:'100%',
                        display:'flex',
                        flexDirection:'column'}}>
                        <CardContent>
                                <Typography variant='subtitle1'>
                                        Junior Full Stack Developer with strong foundations in JavaScript, Node.js, Express, 
                                        HTML, CSS, and backend application development. Transitioning into software engineering 
                                        after 13+ years of leadership, operations, and data driven problem solving roles. 
                                        Experienced in building full stack applications, designing REST APIs, managing data 
                                        workflows, and debugging backend logic.
                                </Typography>
                            </CardContent>
                    </Card>
                </Grid>
            
                <Grid item xs={12} sm={4}>
                    <Card sx={{
                        marginTop: 3, 
                        padding: 1,
                        height:'100%',
                        display:'flex',
                        flexDirection:'column'}}>
                        <CardContent>
                            <Typography variant='subtitle1'>
                                Bringing a unique combination of technical fundamentals, analytical thinking, and high
                                ownership execution — with a proven ability to learn fast, adapt quickly, and deliver 
                                reliable solutions in fast moving environments.

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            
        </Box>   
        
    )
};

export default Home;