import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import BuildIcon from '@mui/icons-material/Build';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import Person2Icon from '@mui/icons-material/Person2';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link'
import Fab from '@mui/material/Fab';



function ListDetails() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <>

            <Divider variant="middle" />

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <Link href="/">
                    <ListItemButton>
                        <ListItemIcon >
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                <DashboardIcon />
                            </Avatar>

                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </Link>
                <Link href="/table">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                < AssessmentIcon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Tables" />

                    </ListItemButton>
                </Link>

                <Link href="/billing">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                <CreditCardIcon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Billing" />
                    </ListItemButton>
                </Link>
                <Link href="/rtl">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                <BuildIcon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Rtl" />
                    </ListItemButton>
                </Link>


            </List>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        ACCOUNTPAGES
                    </ListSubheader>
                }>
                <Link href="/profile">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                <Person2Icon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </Link>
                <Link href="/signin">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                <LoginIcon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Sign In" />
                    </ListItemButton>
                </Link>
                <Link href="/signup">
                    <ListItemButton>
                        <ListItemIcon>
                            <Avatar sx={{ bgcolor: "blue" }} variant="rounded">
                                <LogoutIcon />
                            </Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                    </ListItemButton>
                </Link>

            </List >



        </>
    )
}

export default ListDetails