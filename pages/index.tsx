import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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

  const handleBuy = (e: React.MouseEvent, productId: string) => {
    e.preventDefault() // Prevent the link from triggering
    e.stopPropagation() // Stop event bubbling
    // Add your buy logic here
    alert(`Quick buy for product ${productId}!`)
  }

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
          {products.map(product => (
              <Link href={`/product/${encodeURIComponent(product.name)}`}>
            <li className={styles.product} key={product.name}>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.price}>${product.price}</div>
              <button 
                onClick={(e) => handleBuy(e, product.name)}
                className={styles.buyButton}
              >
                Buy
              </button>
            </li>
              </Link>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home