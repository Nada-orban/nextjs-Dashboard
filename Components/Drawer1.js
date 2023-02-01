import React from 'react';
import Head from 'next/head';
import styles from '../styles/Drawer1.module.css';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import AppBar from '@mui/material/AppBar';
import InputBase from '@mui/material/InputBase';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import ListDetails from './ListDetails';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Footer from './Footer'
import Breadcrumb1 from './Breadcrumb1';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { blue } from '@mui/material/colors';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
import { ColorModeContext } from '../public/theme'
import { useState } from 'react';


// const ColorModeContext = React.createContext({ toggleColorMode: () => { } });





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
        justifyContent: 'end'
    }}>
        <Toolbar />
        <IconButton >
            <SentimentSatisfiedAltRoundedIcon />UI Dashboard
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

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];
export default function Drawer1({ children }) {
    // const { window } = props;
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    // const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <Container maxWidth="xlg">
            <Head>
                <title>Sooka Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* only in box i can write css directly */}
            <Box display='flex' >
                <CssBaseline />

                <AppBar position="fixed" className={styles.card} variant="permanent"


                    sx={{
                        width: { sm: `calc(98% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` },
                        bgcolor: 'secondary.main',
                        color: "rgba(0, 0, 0, 0.87)"

                    }}>
                    <Toolbar>
                        <Grid container maxWidth="xlg" spacing={3} direction="row"
                            justifyContent="space-between"
                            alignItems="center">
                            <Grid item xs={12} md={8} >
                                <Breadcrumb1 />
                                <p>Table</p>
                            </Grid>
                            <Grid item xs={12} md={4} >
                                <Box sx={{ flexGrow: 1 }} />
                                <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: "end" }} >
                                    <Search sx={{ height: "100%", mt: "10px" }} variant="outlined" >
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

                                    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                        {theme.palette.mode === 'dark' ? <LightModeIcon /> : <NightlightRoundIcon />}
                                    </IconButton>
                                    {/* <IconButton>
                                        {dark ? }
                                    </IconButton> */}

                                    {/* <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton> */}
                                    <IconButton >
                                        <Avatar alt="Nada" src="/static/images/avatar/1.jpg" />
                                    </IconButton>
                                </Box>
                            </Grid>

                        </Grid>



                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, m: "10px", borderRadius: "10px", height: "98vh" },
                        }}
                    >
                        {drawer}
                    </Drawer>

                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box', width: drawerWidth, m: "10px", borderRadius: "10px", height: "98vh",
                                p: "10px", borderRight: "none",
                            },
                        }}
                        open  >{drawer}
                    </Drawer>
                </Box>


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
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <main >{children}</main>
                    <Footer />
                </Box>





            </Box>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, position: "fixed", bottom: 16, right: 16 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>




        </Container >
    )
};

// Drawer1.propTypes = {
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

