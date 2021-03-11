import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Snickarbältet | Hem</title>
        <meta name="keywords" content="snickeri" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <Link href="/nested/">
            <a className={styles.btn}>See nested</a>
        </Link>
      </div>
    </>
  )
}
