import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import FavoriteIcon from '@mui/icons-material/Favorite';



function Footer() {
    return (

        <Grid container spacing={5} sx={{ display: "flex", mt: 1, alignItems: "center", color: "gray" }} >
            <Grid item xs={8} md={9}>

                <Typography variant="h6" >
                    @ 2021, Made with < FavoriteIcon sx={{ color: "red" }} />  by Simmmple&Creative Timfor a better web
                </Typography>

            </Grid>
            <Grid item xs={8} md={3} sx={{ justifyContent: "end", }}>
                <List sx={{ display: "flex", }}>
                    <ListItem >
                        <ListItemText primary="Creative Tim" />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary="About Us" />
                    </ListItem>
                    <ListItem >
                        <ListItemText primary="Blog" />
                    </ListItem>
                </List>

            </Grid>


        </Grid >

    )
}

export default Footer