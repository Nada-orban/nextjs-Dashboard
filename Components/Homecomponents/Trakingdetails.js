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

const myLoader = ({ src, width, quality }) => {
    return "https://www.freepik.com/free-vector/flying-rocket-background_1130797.htm#query=rocket&position=4&from_view=search&track=sph"
}



function Trakingdetails() {
    return (
        <Grid container sx={{ width: "100%", mt: 1 }}>
            <Grid item xs={12} md={5}>
                <Card className={styles.card} >
                    <CardContent className={styles.buttondetails}>
                        <div sx={{ display: "flex" }}>
                            <h6>welcome back,</h6>
                            <h2>Nada Orban</h2>
                            <p>Glad to see you again!
                                Ask me anything.</p>
                            <p>Tap to record</p>

                        </div>
                        <Image
                            loader={myLoader}
                            src="me.png"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card xs={{ position: "relative" }} className={styles.card}>
                    <CardContent >
                        <h3>Statisfaction</h3>
                        <p>From all projects</p>
                        <div>
                            <CircularProgress variant="determinate" value={75} xs={{ position: "absolute" }} />
                            <Card className={styles.mini_card}>
                                <CardContent>
                                    <div>
                                        <p>Today's Money</p>
                                        <h1>$<span>53,000</span></h1>
                                    </div>

                                </CardContent>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} md={4}  >
                <Card className={styles.card}>
                    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Box>
                            <h3>Referral Tracking</h3>
                            <Paper sx={{ mb: 2, width: "200px", p: 2 }} className={styles.mini_card}>

                                <p>Today's Money</p>
                                <h1>$<span>53,000</span></h1>

                            </Paper>
                            <Card className={styles.mini_card}>
                                <CardContent>
                                    <div>
                                        <p>Today's Money</p>
                                        <h1>$<span>53,000</span></h1>
                                    </div>

                                </CardContent>
                            </Card>
                        </Box>



                        <Box >
                            <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                                < MoreHorizIcon />
                            </Avatar>
                            <CircularProgress variant="determinate" value={75} />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

        </Grid >
    )
}

export default Trakingdetails