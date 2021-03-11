import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();
  const [counter, setCounter] = useState(6);

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);


  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 6000)
  }, [])


  return ( 
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <div>You are being redirected to the start page in {counter === 0 ? "Time over" : counter} seconds</div>
      <p>Go back to the <Link href="/"><a>Startpage</a></Link></p>
      <p onClick={() => router.back()}>Go back to the <a className="pointer">previous page</a></p>
    </div>
   );
}
 
export default NotFound;