import Head from 'next/head'
import styles from '../../styles/Nested.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  const res = await fetch("http://localhost:5000/test")
  const data = await res.json();

  return {
    props: {fakedata: data}
  }

}

const Nested = ({ fakedata }) => {
  // console.log(fakedata.movies);
  return (
    <>
    <Head>
      <title>Snickarbältet | Nested</title>
      <meta name="keywords" content="nested" />
    </Head>
    <div>
      <h1>Nested</h1>
      { fakedata.movies.map(fakeitem => (
        <Link href={'/nested/' + fakeitem.id} key={fakeitem.id}>
          <a className={styles.single}>
            <h3>{ fakeitem.title } </h3>
          </a>
        </Link>
      ))}
    </div>
    </>
   );
}
 
export default Nested;