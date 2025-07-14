import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import type { Product } from './api/lib/product'

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    (async () => {
      setProducts(await (await fetch('/api/all')).json() as Product[]);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Centrito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Centrito Challenge
        </h1>
        <ul className={styles['product-list']}>
          {products.map(a => <li className={styles.product} key={a.name}>
            <div className={styles.name}>{a.name}</div>
            <div className={styles.phone}>{a.price}</div>
          </li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default Home
