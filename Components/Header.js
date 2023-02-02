import React from 'react'
import { Box, Typography } from '@mui/material/'

function Header({ title, subtitle }) {

    return (
        <Box m="20px">
            <Typography variant="h3" sx={{ fontWeight: "bold" }} >
                {title}
            </Typography>
            <Typography variant="h6" >
                {subtitle}
            </Typography>
        </Box>
    )
}

export default Header