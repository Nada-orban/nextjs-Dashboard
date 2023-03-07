import React from 'react'
import { Box, Typography, Avatar, TextField, Grid, Switch, Card, CardContent, CardMedia, CardActions, Tab, Tabs } from '@mui/material/'
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Header from '../../Components/Header'
import { blue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import home1 from '../../public/home-decor-1.05e218fd495ccc65c99d.jpg'
import home2 from '../../public/home-decor-2.webp'
import AddIcon from '@mui/icons-material/Add';
import styles from '../../styles/Home.module.css'
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
// const label = { inputProps: { 'aria-label': 'Switch demo' } };

function profile() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ display: { xs: 'grid', md: 'flex' } }} justifyContent="space-between" alignItems="center" borderRadius="10px" p="10px 20px" color="white" className={styles.profilenav}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Avatar sx={{ bgcolor: "gray", mx: 2 }} variant="rounded">
                    </Avatar>
                    <Box>
                        <Typography variant='h4'>Alex Thompson</Typography>
                        <Typography variant='h6'>ACEO / Co-Founder</Typography>
                    </Box>

                </Box>
                <Box >
                    <Tabs value={value} onChange={handleChange} centered textColor="white" indicatorColor="secondary" >
                        <Tab icon={<AppsIcon />} label="APP" />
                        <Tab icon={<MessageIcon />} label="Message" />
                        <Tab icon={<SettingsIcon />} label="Settings" />
                    </Tabs>
                </Box>
            </Box>


            {/* Platform */}
            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item md="4" xs="12">
                    <Card sx={{ height: "100%", borderRadius: "10px", bgcolor: "primary.main" }}>
                        <CardContent>
                            <Typography variant='h5' sx={{ mb: 4 }}>Platform Settings</Typography>
                            <Typography>ACCOUNT</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="Email me when someone follows me" />
                                <FormControlLabel disabled control={<Switch />} label="Email me when someone answers on my post" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Email me when someone mentions me" />
                            </FormGroup>


                            <Typography>APPLICATION</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Switch defaultChecked />} label="New launches and projects" />
                                <FormControlLabel control={<Switch defaultChecked />} label="Monthly product updates" />
                                <FormControlLabel disabled control={<Switch />} label="Subscribe to newsletter" />
                            </FormGroup>
                        </CardContent>
                    </Card>


                </Grid>
                <Grid item md="4" xs="12">
                    <Card sx={{ height: "100%", borderRadius: "10px", bgcolor: "primary.main" }}>
                        <CardContent>
                            <Typography variant='h5' sx={{ mb: 4 }}>Profile Information</Typography>
                            <Typography sx={{ mb: 4 }}>Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</Typography>
                            <Typography>
                                <span className={styles.font}>Full Name:</span>
                                Alec M. Thompson</Typography>
                            <Typography>
                                <span className={styles.font}>Mobile: </span>
                                (44) 123 1234 123</Typography>
                            <Typography>
                                <span className={styles.font}>Email:</span>

                                alecthompson@mail.com</Typography>
                            <Typography>
                                <span className={styles.font}>Location: </span>


                                USA</Typography>
                        </CardContent>
                    </Card>

                </Grid>
                <Grid item md="4" xs="12" >
                    <Card sx={{ height: "100%", borderRadius: "10px", bgcolor: "primary.main" }}>
                        <CardContent>
                            <Typography variant='h5' sx={{ mb: 4 }}>Conversations</Typography>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" justifyContent="space-between" gap="10px">
                                    <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                                    </Avatar>
                                    <Box >
                                        <Typography variant='h6'>Sophie B.</Typography>
                                        <Typography>Hi! I need more information..</Typography>
                                    </Box>

                                </Box>
                                <button>REPLY</button>
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" justifyContent="space-between" gap="10px">
                                    <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                                    </Avatar>
                                    <Box >
                                        <Typography variant='h6'>Sophie B.</Typography>
                                        <Typography>Hi! I need more information..</Typography>
                                    </Box>

                                </Box>
                                <button>REPLY</button>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" justifyContent="space-between" gap="10px">
                                    <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                                    </Avatar>
                                    <Box >
                                        <Typography variant='h6'>Sophie B.</Typography>
                                        <Typography>Hi! I need more information..</Typography>
                                    </Box>

                                </Box>
                                <button>REPLY</button>
                            </Box>

                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" justifyContent="space-between" gap="10px">
                                    <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                                    </Avatar>
                                    <Box >
                                        <Typography variant='h6'>Sophie B.</Typography>
                                        <Typography>Hi! I need more information..</Typography>
                                    </Box>

                                </Box>
                                <button>REPLY</button>
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" justifyContent="space-between" gap="10px">
                                    <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                                    </Avatar>
                                    <Box >
                                        <Typography variant='h6'>Sophie B.</Typography>
                                        <Typography>Hi! I need more information..</Typography>
                                    </Box>

                                </Box>
                                <button>REPLY</button>
                            </Box>




                        </CardContent>
                    </Card>

                </Grid>
            </Grid>




            {/* projects section */}
            <Paper sx={{ width: "100%", p: 2, borderRadius: "10px", bgcolor: "primary.main" }}>
                <Typography variant='h5' sx={{ mb: 4 }}>Projects</Typography>
                <Typography>Architects design houses</Typography>
                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item md="4" xs="12">
                        <Card sx={{ borderRadius: "10px", height: "100%", backgroundColor: "background.main" }} variant="outlined">
                            <Image

                                src={home1}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Modern
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    As Uber works through a huge amount of internal management turmoil.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button size="small">VIEW PROJECT</button>

                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item md="4" xs="12">
                        <Card sx={{ borderRadius: "10px", height: "100%", backgroundColor: "background.main" }} variant="outlined">
                            <Image

                                src={home1}
                                alt="Picture of the author"
                                width={500}
                                height={500}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Scandinavian
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <button size="small">VIEW PROJECT</button>

                            </CardActions>
                        </Card>

                    </Grid>
                    <Grid item md="4" xs="12">
                        <Card sx={{ borderRadius: "10px", textAlign: "center", p: 21, height: "100%", backgroundColor: "background.main" }} variant="outlined" >
                            <Box display="flex" justifycontent="center" sx={{ flexDirection: 'column' }} >
                                <AddIcon sx={{ border: "1px solid black", cursor: "pointer" }} />
                                <Typography variant='h4'>New project</Typography>
                            </Box>


                        </Card>

                    </Grid>
                </Grid>

            </Paper>

        </>
    )
}

export default profile