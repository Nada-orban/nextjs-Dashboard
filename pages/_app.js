import React from "react";
import Drawer1 from "../Components/Drawer1";
import '../styles/globals.css'
import 'nextjs-breadcrumbs/dist/index.css'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../public/theme'


export default function MyApp({ Component, pageProps }) {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Drawer1>
                    <Component {...pageProps} />
                </Drawer1>

            </ThemeProvider>
        </ColorModeContext.Provider>



    )
}
