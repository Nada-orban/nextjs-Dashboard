import { Box } from '@mui/material'
import React from 'react'
import Barchart from '../Components/Chart/Barchart'
import Header from '../Components/Header'

function barchart() {
    return (
        <Box width="50%" >
            <Header title="Bar Chart" subtitle={"Bar Chart information"}></Header>
            <Box height="50vh" backgroundColor='primary.main' color="text.primary" borderRadius="10px">
                <Barchart />
            </Box>
        </Box>
    )
}

export default barchart