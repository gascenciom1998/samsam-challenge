import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import type { Product } from './api/lib/product'
import Products from '../components/Products'
import styles from '../styles/Favorites.module.css'

const Favorites: NextPage = () => {
    const { favorites } = useAppContext()
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        (async () => {
            setProducts(await (await fetch('/api/all')).json() as Product[]);
        })();
    }, []);

    const favoriteProducts = products.filter(product => favorites.includes(product.name));

    return (
        <div className={styles.container}>
            <Head>
                <title>Favorites - Centrito</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Your Favorites</h1>
                    <Link href="/">
                        <a className={styles.backLink}>← Back to Shopping</a>
                    </Link>
                </div>

                {favoriteProducts.length === 0 ? (
                    <div className={styles.emptyFavorites}>
                        <h2>No favorites yet</h2>
                        <p>Start browsing and click the heart icon to add products to your favorites.</p>
                        <Link href="/">
                            <a className={styles.shopButton}>Shop Now</a>
                        </Link>
                    </div>
                ) : (
                    <div className={styles.favoritesContent}>
                        <p className={styles.favoritesCount}>
                            {favoriteProducts.length} {favoriteProducts.length === 1 ? 'item' : 'items'} in your favorites
                        </p>
                        <Products products={favoriteProducts} />
                    </div>
                )}
            </main>
        </div>
    )
}

export default Favorites 