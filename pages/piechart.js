import { Box } from '@mui/material'
import React from 'react'
import Piechart from '../Components/Chart/Piechart'
import Header from '../Components/Header'

function piechart() {
    return (
        <Box width="50%">
            <Header title="Pie Chart" subtitle={"Pie Chart information"}></Header>
            <Box height="50vh">
                <Piechart />
            </Box>
        </Box>
    )
}

export default piechart