import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Shortcutdetails from '../Components/Shortcutdetails';
import Trakingdetails from '../Components/Trakingdetails';
import Container from '@mui/material/Container';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Shortcutdetails />
        <Trakingdetails />
      </div>


    </div>



  )
}
