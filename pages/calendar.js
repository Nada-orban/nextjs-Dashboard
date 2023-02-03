import React from 'react'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Box, Typography, Avatar, TextField, List, ListItem, ListItemText } from '@mui/material/'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Header from '../Components/Header'


function Calendar() {
    const theme = useTheme();
    return (
        <Box>
            <Header title="Calendar" subtitle={"Full Calendar Interative Page"} ></Header>
            <Box>
                <Box flex="2 2 20%" ></Box>
                <Box flex="2 2 80%" ></Box>
            </Box>
        </Box>
    )
}

export default Calendar