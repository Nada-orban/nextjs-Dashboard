import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Shortcutdetails from '../Components/Homecomponents/Shortcutdetails';
import Trakingdetails from '../Components/Homecomponents/Trakingdetails';
import Container from '@mui/material/Container';
import Overview from '../Components/Homecomponents/Overview'
import Projecttable from '../Components/Homecomponents/Projecttable';


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
        <Overview />
        <Projecttable />
      </div>


    </div>



  )
}
