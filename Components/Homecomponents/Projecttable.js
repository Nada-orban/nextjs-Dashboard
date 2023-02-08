import * as React from 'react';
import styles from '../../styles/Home.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Linechart from '../Chart/Linechart'
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SellIcon from '@mui/icons-material/Sell';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';









function Projecttable
    () {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Grid container spacing={1} sx={{ width: "100%", mt: 3, height: "100%" }}>
            <Grid item xs={12} md={9}>
                <Card xs={{ position: "relative" }} className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary", height: "100%", height: "50vh" }}>
                    <CardContent >
                        <Typography variant='h5' component="h5">Sales Quantity</Typography>
                        <Box height="40vh" width="100%">
                            <Linechart />
                        </Box>

                    </CardContent>
                </Card>

            </Grid>
            <Grid item xs={12} md={3} >
                <Card className={styles.card} sx={{ bgcolor: "primary.main", color: "text.primary", height: "50vh" }}>

                    <CardContent >
                        <Typography variant='h5' component="h5" >Order Overview</Typography>
                        <Typography sx={{ color: "gray", mt: 1 }} component="h6"><ArrowUpwardIcon sx={{ color: "green" }} /><span>24%</span>this month</Typography>
                        <List
                            sx={{ width: '100%', maxWidth: 360 }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        // subheader={
                        //     <ListSubheader component="h6" id="nested-list-subheader">
                        //         Nested List Items
                        //     </ListSubheader>
                        // }
                        >
                            <ListItemButton>
                                <ListItemIcon>
                                    <NotificationsIcon sx={{ color: "green" }} />
                                </ListItemIcon>
                                <ListItemText primary="$2400,Design changes" secondary="Jan 9, 2014" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SellIcon sx={{ color: "red" }} />
                                </ListItemIcon>
                                <ListItemText primary="New order #1832412" secondary="Jan 9, 2014" />
                            </ListItemButton>

                            <ListItemButton>
                                <ListItemIcon>
                                    <ShoppingCartIcon sx={{ color: "blue" }} />
                                </ListItemIcon>
                                <ListItemText primary="Server Payments for April" secondary="Jan 9, 2014" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <CreditCardIcon sx={{ color: "orange" }} />
                                </ListItemIcon>
                                <ListItemText primary="New card added for order #4395133" secondary="Jan 9, 2014" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AttachMoneyIcon sx={{ color: "green" }} />
                                </ListItemIcon>
                                <ListItemText primary="New order#4657890" secondary="Jan 9, 2014" />
                            </ListItemButton>

                        </List>
                    </CardContent>

                </Card>
            </Grid>



        </Grid>
    )
}

export default Projecttable
