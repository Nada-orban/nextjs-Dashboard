import React from "react";
import Drawer1 from "../Components/Drawer1";
import '../styles/globals.css'
import 'nextjs-breadcrumbs/dist/index.css'


export default function MyApp({ Component, pageProps }) {
    return (
        <Drawer1>
            < Component {...pageProps} />
        </Drawer1>



    )
}
