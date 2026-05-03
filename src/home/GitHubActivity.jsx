import { useState } from 'react';
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

function GitHubActivity() {
    return (

        <Card>
            <Typography variant='h2'>
                GitHub Activity
            </Typography>
            <CardActionArea
                component="a"
                href='https://github.com/samj296'
                target='_blank'
                rel='noopener noreferrer'>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <CardMedia className="git-component"
                                    component="img"
                                    
                                    src='https://github-readme-streak-stats.herokuapp.com/?user=samj296'
                                    title="GitHub contributions graph for Sam Joseph"/>
                        </Grid>
                        <Grid size={4}>
                            <CardMedia className="git-component"
                                    
                                    component="img"
                                    src='https://github-readme-activity-graph.vercel.app/graph?username=samj296&theme=react-dark'
                                    title="GitHub contributions graph for Sam Joseph"/>
                        </Grid>
                        <Grid size={4}>
                            <CardMedia className="git-component"
                                
                                    component="img"
                                    src='https://ghchart.rshah.org/000000/samj296'
                                    title="GitHub contributions graph for Sam Joseph"/>
                        </Grid>
                    </Grid>
                </Box>

                {/* <Grid container spacing={2}>
                            <Grid item xs={4} sm={3} md={2}>
                                <CardMedia className="git-component"
                                    component="img"
                                    
                                    src='https://github-readme-streak-stats.herokuapp.com/?user=samj296'
                                    title="GitHub contributions graph for Sam Joseph"/>
                            </Grid>
                            
                            <Grid item xs={4} sm={3} md={2}>
                                <CardMedia className="git-component"
                                    
                                    component="img"
                                    src='https://github-readme-activity-graph.vercel.app/graph?username=samj296&theme=react-dark'
                                    title="GitHub contributions graph for Sam Joseph"/>
                            </Grid>

                            <Grid item xs={4} sm={3} md={2}>
                                <CardMedia className="git-component"
                                
                                    component="img"
                                    src='https://ghchart.rshah.org/000000/samj296'
                                    title="GitHub contributions graph for Sam Joseph"/>
                            </Grid>                                

                            
                        </Grid> */}



            </CardActionArea>



        </Card>

    );
};

export default GitHubActivity;