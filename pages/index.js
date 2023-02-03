import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './components/navbar'
import Hero from './components/hero'
import AboutEthManiacos from './components/aboutethmaniacos'
import Graphics from './components/graphics'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
    

      <Head>
        <title>Ethmaniacos</title>
        <meta name="description" content="Ethmaniacos, uma pagina sobre o mundo etherium por Daniel Duarte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="carousel.css"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

        <NavBar/>

      
      <div id='hero'>
        <Hero/>
      </div>

      <div id='aboutEth'>
        <AboutEthManiacos/>
      </div>

      <div id='graphics'>
        <Graphics/>
      </div>

    </>
  )
}
