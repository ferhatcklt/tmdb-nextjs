import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Popular from '../components/popular'

export default function Home({popularmovies}) {
  return <div>
      <Head>
        <title>Popüler Filmler</title>
        <meta name="description" content="Popüler Filmler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Popular popularmovies={popularmovies} />
      </div>
    </div>
}


export async function getServerSideProps(){
  const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=240cbfd8b5b886abf954e81521036a49&language=en-US&page=1`);
  const popularmovies = await request.json();
  return {
    props: {
      popularmovies
    }
  }
} 