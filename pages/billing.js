import React from 'react'
import {
    Grid, Box, Container, Card, CardActionArea, CardContent, Typography, Divider, List, ListItem, ListItemText, Avatar
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { BsPaypal } from 'react-icons/bs'
import { styled, useTheme, alpha } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { blue } from '@mui/material/colors';
import Image from 'next/image'
import cardimage from '../public/bbe52743d56c2bdeedcb-a0c6c01fb7391865ea9b-Card_Mockup-MMC-Navy_Blue_1.avif'
import Tooltip from '@mui/material/Tooltip';

function billing() {
    const theme = useTheme();

    return (
        <>
            {/* firstpart */}
            <Grid container spacing={2} >
                <Grid item xs={12} md={8} className='firstpart'>
                    <Grid container spacing={2} className='cardholder'>
                        <Grid item xs={12} md={7} sx={{ mt: 1 }} >

                            <Image

                                src={cardimage}
                                alt="image"
                                width={600}

                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Card sx={{ textAlign: "center", borderRadius: "10px", mb: 3, bgcolor: "primary.main" }}>
                                <CardContent>
                                    <Avatar sx={{ bgcolor: blue[700], }} variant="rounded">
                                        <AccountBalanceIcon /></Avatar>
                                    <Typography variant='h6'>Salary</Typography>
                                    <Typography variant='subtitle1' sx={{ mb: 1 }}>Belong Interactive</Typography>
                                    <Divider />
                                    <Typography variant='h4' sx={{ mt: 1 }}>+$2000</Typography>
                                </CardContent>
                            </Card>
                            <Card sx={{ textAlign: "center", borderRadius: "10px", bgcolor: "primary.main" }}>
                                <CardContent>
                                    <Avatar sx={{ bgcolor: blue[700] }} variant="rounded"><BsPaypal /></Avatar>

                                    <Typography variant='h6'>Paypal</Typography>
                                    <Typography variant='subtitle1' sx={{ mb: 1 }}>Freelance Payment</Typography>
                                    <Divider />
                                    <Typography variant='h4' sx={{ mt: 1 }}>$455.00</Typography>
                                </CardContent>

                            </Card>

                        </Grid>


                    </Grid>
                    {/* Payment Method */}
                    <Card sx={{ borderRadius: "10px", mt: 2, bgcolor: "primary.main" }}>
                        <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography>Payment Method</Typography>
                                <button>+ ADD NEW CARD</button>
                            </Box>
                            <Box display="flex" justifyContent="space-between" gap="10px" mt="10px">
                                <Box border="1px solid black" borderRadius="10px" padding=" 10px" display="flex" justifyContent="space-between" width="100%">
                                    <Typography>**** **** **** 7852</Typography>
                                    <Tooltip title="edit" placement="top"><EditIcon /></Tooltip>
                                </Box>
                                <Box border="1px solid black" borderRadius="10px" padding="10px" display="flex" justifyContent="space-between" width="100%">
                                    <Typography>**** **** **** 7852</Typography>
                                    <Tooltip title="edit" placement="top"><EditIcon /></Tooltip>

                                </Box>


                            </Box>

                        </CardContent>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4} className='firstpart' >
                    <Card sx={{ borderRadius: "10px", bgcolor: "primary.main" }}>
                        <CardContent>
                            <List>
                                <ListItem sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>

                                    <Typography variant='h6'>Invoices</Typography>
                                    <button>VIEW ALL</button>
                                </ListItem>

                                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItemText primary="March, 01, 2020" secondary="#MS-415646" />
                                    <Typography>$180 </Typography>
                                </ListItem>

                                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItemText primary="March, 01, 2020" secondary="#MS-415646" />
                                    <Typography>$180 </Typography>
                                </ListItem>

                                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItemText primary="March, 01, 2020" secondary="#MS-415646" />
                                    <Typography>$180 </Typography>
                                </ListItem>
                                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItemText primary="March, 01, 2020" secondary="#MS-415646" />
                                    <Typography>$180 </Typography>
                                </ListItem>
                                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItemText primary="March, 01, 2020" secondary="#MS-415646" />
                                    <Typography>$180 </Typography>
                                </ListItem>
                                <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <ListItemText primary="March, 01, 2020" secondary="#MS-415646" />
                                    <Typography>$180 </Typography>
                                </ListItem>



                            </List>

                        </CardContent>
                    </Card>

                </Grid>

            </Grid>



            {/* secoundpart */}

            <Card sx={{ borderRadius: "10px", mt: 3, bgcolor: "primary.main" }}>
                <CardContent>
                    <Typography variant='h6'>Billing Information</Typography>
                    <Card sx={{
                        p: 3, backgroundColor: "background.main", mt: 3
                    }}>

                        <Box sx={{
                            display: { xs: 'grid', md: 'flex' }, justifyContent: "space-between"
                        }}>
                            <Typography variant='h5'>oliver Lim </Typography>
                            <Box mb="10px">
                                <button>DELETE</button>
                                <button >EDIT</button>

                            </Box>

                        </Box>
                        <Box>
                            <Typography>Company Name:<span> Viking Burrito</span></Typography>
                            <Typography>Email Address<span>oliver@burrito.com</span></Typography>
                            <Typography>VAT Number:<span>   FRB1235476</span></Typography>

                        </Box>
                    </Card>
                    <Card sx={{
                        p: 3, backgroundColor: "background.main", mt: 3
                    }}>

                        <Box sx={{
                            display: { xs: 'grid', md: 'flex' }, justifyContent: "space-between"
                        }}>
                            <Typography variant='h5'>oliver Lim </Typography>
                            <Box mb="10px">
                                <button>DELETE</button>
                                <button >EDIT</button>

                            </Box>

                        </Box>
                        <Box>
                            <Typography>Company Name:<span> Viking Burrito</span></Typography>
                            <Typography>Email Address<span>oliver@burrito.com</span></Typography>
                            <Typography>VAT Number:<span>   FRB1235476</span></Typography>

                        </Box>
                    </Card>
                    <Card sx={{
                        p: 3, backgroundColor: "background.main", mt: 3
                    }}>

                        <Box sx={{
                            display: { xs: 'grid', md: 'flex' }, justifyContent: "space-between"
                        }}>
                            <Typography variant='h5'>oliver Lim </Typography>
                            <Box mb="10px">
                                <button>DELETE</button>
                                <button >EDIT</button>

                            </Box>

                        </Box>
                        <Box>
                            <Typography>Company Name:<span> Viking Burrito</span></Typography>
                            <Typography>Email Address<span>oliver@burrito.com</span></Typography>
                            <Typography>VAT Number:<span>   FRB1235476</span></Typography>

                        </Box>
                    </Card>

                </CardContent>

            </Card >




        </>
    )
}

export default billing