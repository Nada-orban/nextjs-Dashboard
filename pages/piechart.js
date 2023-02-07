import React from 'react'
import Piechart from '../Components/Chart/Piechart'
import Header from '../Components/Header'

function piechart() {
    return (
        <>
            <Header title="pie Chart" subtitle={"pie Chart information"}></Header>
            <Piechart />
        </>
    )
}

export default piechart