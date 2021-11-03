import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion de proyectos | home</title> //SEO
      </Head>
      Hola Mundo
      <Link href='/Admin/usuarios'>
        <a>Página de usuarios</a>
      </Link>
      <div>
        <i className="fas fa-water"></i>
      </div>
    </div>
  )
}

export default Home
