
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
import { blue } from '@mui/material/colors';
import PublicIcon from '@mui/icons-material/Public';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { height } from '@mui/system';




function Shortcutdetails() {
    return (
        <Grid container sx={{ width: "100%", mt: 3 }}>
            <Grid item xs={12} md={3}>
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary" }}>
                    <CardContent className={styles.buttondetails}>
                        <div>
                            <p>Today's Money</p>
                            <h1>$<span>53,000</span></h1>
                        </div>
                        <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                            <PaidIcon />
                        </Avatar>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary" }}>
                    <CardContent className={styles.buttondetails}>
                        <div>
                            <p>Today's Money</p>
                            <h1>$<span>53,000</span></h1>
                        </div>
                        <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                            <PublicIcon />
                        </Avatar>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary" }}>
                    <CardContent className={styles.buttondetails}>
                        <div>
                            <p>Today's Money</p>
                            <h1>$<span>53,000</span></h1>
                        </div>
                        <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                            <InsertDriveFileIcon />
                        </Avatar>

                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary" }}>
                    <CardContent className={styles.buttondetails}>
                        <div>
                            <p>Today's Money</p>
                            <h1>$<span>53,000</span></h1>
                        </div>
                        <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                            <LocalGroceryStoreIcon />
                        </Avatar>

                    </CardContent>
                </Card>
            </Grid>

        </Grid >
    )
}

export default Shortcutdetails