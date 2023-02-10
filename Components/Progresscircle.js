import React from 'react'
import { Box, Card, CardContent } from '@mui/material'
import { styled, useTheme, alpha } from '@mui/material/styles';


function Progresscircle({ progress = "0.75", size = "220" }) {
    const theme = useTheme();
    const angle = progress * 360;

    return (
        <Box
            sx={{
                background: `radial-gradient(${theme.palette.mode === 'dark' ? "#3949ab " : "white"} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, #38bcb2 ${angle}deg 360deg),
            #eed312`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
                position: "absolute",
                right: "40%",
                top: "50px",
            }}
        />
        // <Box sx={{
        //     position: "relative",
        //     height: "150px",
        //     width: "150px",
        //     borderRadius: "50%",
        //     backgroundColor: "red",
        //     justifycontent: "center",
        //     mt: 10,

        // }}>
        //     <Box sx={{
        //         position: " absolute",
        //         top: "50%",
        //         left: "50%",
        //         height: "100%", width: " 100%",
        //         backgroundColor: "green", borderRadius: "50%", transform: "translate(-50%, -50%) scale(0.8)"
        //     }}></Box>


        // </Box >
    )
}

export default Progresscircle