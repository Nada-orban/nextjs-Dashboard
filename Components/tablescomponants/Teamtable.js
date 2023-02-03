import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, Typography } from '@mui/material/'
import { mockDataTeam } from '../../Data/mockData'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import Header from '../Header'

function teamtable() {
    const theme = useTheme();


    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'NAME', flex: 1 },
        { field: 'email', headerName: 'EMAIL', flex: 1 },
        { field: 'age', headerName: 'AGE', flex: 1 },
        { field: 'phone', headerName: 'PHONE', flex: 1 },
        {
            field: 'access', headerName: 'ACCESS', flex: 1, renderCell: ({ row: { access } }) => {
                return (
                    <Box width="60%" p="5px" display="flex" justifyContent="center"
                        backgroundColor={access === "admin" ? "neutral.greenlight" : "neutral.greendark"} borderRadius="10px">
                        {access === "admin" && <AdminPanelSettingsIcon />}
                        {access === "manager" && <SecurityIcon />}
                        {access === "user" && <LockIcon />}
                        <Typography color="GrayText.secondary">
                            {access}
                        </Typography>
                    </Box>
                )
            }
        },
    ];
    return (
        <Box >
            <Header title="Team" subtitle={"Managing the team members"} />

            <Box width="100%" height={500} backgroundColor="primary.main" color="text.primary" sx={{
                "& .MuiDataGrid-root": {
                    borderStyle: "none",
                    borderRadius: "10px",
                    padding: "10px",

                }, "& .MuiDataGrid-footerContainer": {
                    display: "none",

                },
            }}>
                <DataGrid rows={mockDataTeam} columns={columns} />
            </Box>

        </Box>
    )
}

export default teamtable