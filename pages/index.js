import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import State from '../Components/Homecomponents/State'
import Chartpart from '../Components/Homecomponents/Chartpart';
import Container from '@mui/material/Container';
import Projecttable from '../Components/Homecomponents/Projecttable';


export default function Home() {
  return (
    <div >
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <State />
        <Projecttable />
        <Chartpart />

      </div>


    </div>



  )
}
