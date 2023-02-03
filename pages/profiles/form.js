import React from 'react'
import { Box, Typography, Avatar, Button, TextField } from '@mui/material/'
import Header from '../../Components/Header'
import { Formik } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as yup from 'yup';


const initialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",

}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().required("required").email("invalid"),
    contact: yup.string().required("required").matches(phoneRegExp, 'Phone number is not valid'),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
})

function form() {
    const isNonMobile = useMediaQuery('(min-width:600px)');

    const handleFormSubmit = (values) => {
        console.log(values)
    }
    return (
        <Box width="100%">
            <Header title="CREATE USER" subtitle="Create a new user profile"></Header>
            <Formik onSubmit={handleFormSubmit} initialValues={initialvalues} validationSchema={userSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColums="repeat(4,minmax(0,1fr))" sx={{ "& >div": { gridColumn: isNonMobile ? undefined : "span4" }, }}>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                name='firstName'
                                label="FirstName"
                                onBlur={handleBlur}
                                value={values.firstName}
                                onChange={handleChange}
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                name='lastName'
                                label="LastName"
                                onBlur={handleBlur}
                                value={values.lastName}
                                onChange={handleChange}
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                name='email'
                                label="Email"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                name='contact'
                                label="Contact"
                                onBlur={handleBlur}
                                value={values.contact}
                                onChange={handleChange}
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                name='address1'
                                label="Address1"
                                onBlur={handleBlur}
                                value={values.address1}
                                onChange={handleChange}
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                name='address2'
                                label="Address2"
                                onBlur={handleBlur}
                                value={values.address2}
                                onChange={handleChange}
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{ gridColumn: "span 2" }}
                            />
                        </Box>
                    </form>

                }}

            </Formik>
        </Box >
    )
}

export default form