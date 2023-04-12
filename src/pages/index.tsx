import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import GettingStarted from '@/components/GettingStarted'
import AboutFileCoin from '@/components/AboutFileCoin'
import AboutIzari from '@/components/AboutIzari'
import AboutUs from '@/components/AboutUs'
import Footer from '@/components/Footer'

function Home() {
  return (
    <>
      <Head>
        <title>Izari Filecoin</title>
        <meta name="description" content="Zondax - Izari Filecoin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <AboutIzari />
        <AboutFileCoin />
        <GettingStarted />
        <AboutUs />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Home
