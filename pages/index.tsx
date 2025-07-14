import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import type { Product } from './api/lib/product'
import Products from '../components/Products'
import { useAppContext } from '../context/AppContext'

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const { bag, favorites } = useAppContext()

  useEffect(() => {
    (async () => {
      setProducts(await (await fetch('/api/all')).json() as Product[]);
    })();
  }, []);

  const bagItemsCount = Object.values(bag).reduce((total, quantity) => total + quantity, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Centrito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Centrito Challenge
          </h1>
          <nav className={styles.nav}>
            <Link href="/checkout">
              <a className={styles.navLink}>Bag ({bagItemsCount})</a>
            </Link>
            <Link href="/favorites">
              <a className={styles.navLink}>Favorites ({favorites.length})</a>
            </Link>
          </nav>
        </div>
        <Products products={products} />
      </main>
    </div>
  )
}

export default Home
