import React from 'react'
import { Box, Card, CardContent } from '@mui/material'

function Progresscircle() {

    return (
        <Box sx={{
            position: "relative",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundColor: "red",
            justifycontent: "center",
            mt: 10,

        }}>
            <Box sx={{
                position: " absolute",
                top: "50%",
                left: "50%",
                height: "100%", width: " 100%",
                backgroundColor: "green", borderRadius: "50%", transform: "translate(-50%, -50%) scale(0.8)"
            }}></Box>


        </Box >
    )
}

export default Progresscircle