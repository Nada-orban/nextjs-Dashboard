import { Box } from '@mui/material'
import React from 'react'
import Piechart from '../Components/Chart/Piechart'
import Header from '../Components/Header'

function piechart() {
    return (
        <Box width="100%">
            <Header title="Pie Chart" subtitle={"Pie Chart information"}></Header>
            <Box height="70vh" justifyContent="center" backgroundColor='primary.main' color="text.primary" borderRadius="10px">
                <Piechart />
            </Box>
        </Box>
    )
}

export default piechart