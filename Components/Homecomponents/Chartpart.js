import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import PaidIcon from '@mui/icons-material/Paid';
import styles from '../../styles/Home.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { display } from '@mui/system';
import Paper from '@mui/material/Paper';
import { blue } from '@mui/material/colors';
import Image from 'next/image'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Barchart from '../Chart/Barchart';
import Piechart from '../Chart/Piechart';
import Progresscircle from '../Progresscircle';




function Trakingdetails() {
    const theme = useTheme();

    return (
        <Grid container sx={{ width: "100%", mt: 3 }}>
            <Grid item xs={12} md={4} >
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary", height: "100%" }}>
                    <CardContent >
                        <Typography variant='h6' component="h6">Campaing</Typography>
                        <Box>
                            <Progresscircle />
                        </Box>


                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
                <Card xs={{ position: "relative" }} className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary", height: "100%" }}>
                    <CardContent >
                        <Typography variant='h6' component="h6">Sales Quantity</Typography>
                        <Box height="30vh" width="100%">
                            <Barchart />
                        </Box>

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}  >
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary", height: "100%" }}>
                    <CardContent >
                        <Typography variant='h6' component="h6">Pie Chart</Typography>
                        <Box height="30vh" width="100%">
                            <Piechart />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </Grid >
    )
}

export default Trakingdetails


    // < Box >
    //                         <h3>Referral Tracking</h3>
    //                         <Paper sx={{ mb: 2, width: "200px", p: 2 }} className={styles.mini_card}>

    //                             <p>Today's Money</p>
    //                             <h1>$<span>53,000</span></h1>

    //                         </Paper>
    //                         <Card className={styles.mini_card}>
    //                             <CardContent>
    //                                 <div>
    //                                     <p>Today's Money</p>
    //                                     <h1>$<span>53,000</span></h1>
    //                                 </div>

    //                             </CardContent>
    //                         </Card>
    //                     </ >



    // <Box >
    //     <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
    //         < MoreHorizIcon />
    //     </Avatar>
    //     <CircularProgress variant="determinate" value={75} />
    // </Box>