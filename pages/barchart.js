import React from 'react'
import Barchart from '../Components/Chart/Barchart'
import Header from '../Components/Header'

function barchart() {
    return (
        <>
            <Header title="Bar Chart" subtitle={"Bar Chart information"}></Header>
            <Barchart />
        </>
    )
}

export default barchart