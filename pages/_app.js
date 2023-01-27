import React from "react";
import Drawer1 from "../Components/Drawer1";


export default function MyApp({ Component, pageProps }) {
    return (
        <Drawer1>
            < Component {...pageProps} />
        </Drawer1>



    )
}
