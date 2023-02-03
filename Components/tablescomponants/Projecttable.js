import React from 'react'
import { styled, useTheme, alpha } from '@mui/material/styles';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Box, Typography, Avatar } from '@mui/material/'
import Header from '../Header'
import { Projecttabledata } from "../../Data/tableData"
import DeleteIcon from '@mui/icons-material/Delete';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { borderColor } from '@mui/system';


const BorderLinearProgress = styled(LinearProgress)(({ theme, value }) => ({
    width: 200,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: value === 100 ? 'green' : 'blue',
    },
}));

function projecttable() {
    const [rows, setRows] = React.useState(Projecttabledata);
    const theme = useTheme();
    const deleteUser = React.useCallback(
        (id) => () => {
            setTimeout(() => {
                setRows((prevRows) => prevRows.filter((row) => row.id !== id));
            });
        },
        [],
    );
    const columns = [
        {
            field: 'project', headerName: 'PROJECT', flex: 2, renderCell: ({ row: { Image, project } }) => {
                return (
                    <Box display="flex" alignItems="center" gap="2"> <Avatar alt="Remy Sharp" src={Image} />{project}</Box>


                )
            }
        },
        { field: 'budget', headerName: 'BUDGET', flex: 1 },
        { field: 'status', headerName: 'STATUS', flex: 1 },
        {
            field: 'completion', headerName: 'COMPLETION', flex: 2, renderCell: ({ row: { completion } }) => {
                return (
                    <Box>$ {completion} <BorderLinearProgress variant="determinate" value={completion} /></Box>

                )
            }
        },
        {
            field: 'actions',
            type: 'actions',
            width: 80,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={deleteUser(params.id)}
                />,]
        }];








    return (
        <Box >
            <Header title="Projects" subtitle={"Managing the team members"} />

            <Box width="100%" height={450} backgroundColor="primary.main" color="text.primary" sx={{
                "& .MuiDataGrid-root": {
                    borderStyle: "none",
                    borderRadius: "10px",
                    padding: "10px",

                }, "& .MuiDataGrid-footerContainer": {
                    display: "none",

                },
            }}>
                <DataGrid rows={rows} columns={columns} />
            </Box>

        </Box>
    )
}

export default projecttable