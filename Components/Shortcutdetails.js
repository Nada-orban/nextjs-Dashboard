
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




function Shortcutdetails() {
    return (
        <Grid container spacing={2} sx={{ width: "100%" }}>
            <Grid item xs={12} md={3}>
                <Card  >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <h6>Today's Money</h6>
                                <h1>$<span>53,000</span></h1>

                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                    <PaidIcon />
                                </Avatar>

                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <h6>Today's Money</h6>
                                <h1>$<span>53,000</span></h1>

                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                    <PaidIcon />
                                </Avatar>

                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <h6>Today's Money</h6>
                                <h1>$<span>53,000</span></h1>

                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                    <PaidIcon />
                                </Avatar>

                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card >
                    <CardContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6} md={8}>
                                <h6>Today's Money</h6>
                                <h1>$<span>53,000</span></h1>

                            </Grid>
                            <Grid item xs={6} md={4}>
                                <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                    <PaidIcon />
                                </Avatar>

                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>

        </Grid>
    )
}

export default Shortcutdetails