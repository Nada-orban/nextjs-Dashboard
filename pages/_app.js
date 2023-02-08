import React from "react";
import Drawer1 from "../Components/Drawer1";
import { useRouter } from 'next/router';
import '../styles/globals.css'
import 'nextjs-breadcrumbs/dist/index.css'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ColorModeContext, useMode } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';


export default function MyApp({ Component, pageProps }) {

    const [theme, colorMode] = useMode();
    const router = useRouter();
    const { Path } = router;
    const noNav = ['/login', '/logout'];


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Drawer1>
                    <Component {...pageProps} />
                    <style jsx global>{`
                    ${theme.palette.mode === 'dark' ? "body{background:green} " : "body{background:blue} "}`
                    }</style>
                </Drawer1>

            </ThemeProvider>
        </ColorModeContext.Provider>



    )
}
