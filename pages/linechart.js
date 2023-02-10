import React from 'react'
import Linechart from '../Components/Chart/Linechart'
import Header from '../Components/Header'
import { Box } from "@mui/material"

function line() {
    return (
        <Box width="100%" >
            <Header title="Line Chart" subtitle={"Line Chart information"}></Header>
            <Box height="50vh" backgroundColor='primary.main' color="text.primary" borderRadius="10px">
                <Linechart />
            </Box>
        </Box >
    )
}

export default line