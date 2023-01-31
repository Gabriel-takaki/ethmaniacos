import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './components/navbar'
import Hero from './components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
      <Head>
        <title>Ethmaniacos</title>
        <meta name="description" content="Ethmaniacos, uma pagina sobre o mundo etherium por Daniel Duarte" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    

        <NavBar/>

        <Hero/>

        
    </>
  )
}
