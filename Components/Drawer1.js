import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AppBar from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Footer from './Footer'
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import ListDetails from './ListDetails';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';


const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,

}));


const drawer = (<div>
    <DrawerHeader sx={{
        justifyContent: 'center',
    }}>
        <Toolbar />
        <IconButton >
            <SentimentSatisfiedAltRoundedIcon />Sooka UI Dashboard
        </IconButton>
    </DrawerHeader>

    <Divider variant="middle" />

    <ListDetails />
</div>);

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Drawer1({ children }) {
    // const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <div className={styles.container}>
            <Head>
                <title>Sooka Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />

                    <AppBar position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
                            bgcolor: "rgb(248, 249, 250)",
                            color: "rgba(0, 0, 0, 0.87)",

                        }}>
                        <Toolbar>



                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                                <Search sx={{ height: "100%", mt: "10px" }} >
                                    <SearchIconWrapper >
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={handleDrawerToggle}
                                    sx={{ mr: 2, display: { sm: 'none' } }}
                                >
                                    <MenuOpenIcon />
                                </IconButton>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>

                                {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton> */}
                                <IconButton >
                                    <Avatar alt="Nada" src="/static/images/avatar/1.jpg" />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        // container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open  >{drawer}</Drawer>


                    {/* <DrawerHeader sx={{
                            justifyContent: 'center',
                        }}>
                            {!open ? (<IconButton onClick={handleDrawerOpen}>
                                <ChevronRightIcon />
                            </IconButton>) :
                                (<IconButton onClick={handleDrawerClose}>
                                    <ChevronLeftIcon />
                                </IconButton>)}

                        </DrawerHeader> */}

                    <main>{children}</main>

                </Box>
            </main>
            <Footer />


        </div >
    )
};

// Drawer1.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

