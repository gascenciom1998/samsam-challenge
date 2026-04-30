import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import type { Product } from '../types/product';

const formatPrice = (price: number) => `$${price.toLocaleString('en-US')}`;

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/all');
      const products: Product[] = await response.json();
      setProducts(products);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Shop.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shop.com</h1>
        <div className={styles.layout}>
          <section className={styles.products}>
            <div className={styles.controls}>
              <label className={styles.field}>
                Search
                <input
                  placeholder="Search products"
                  type="search"
                />
              </label>
              <label className={styles.field}>
                Category
                <select defaultValue="">
                  <option value="">All categories</option>
                </select>
              </label>
            </div>

            <ul className={styles['product-list']}>
              {products.map((product) => (
                <li className={styles.product} key={product.id}>
                  <Image
                    alt={product.name}
                    className={styles.photo}
                    height={80}
                    src={product.photo}
                    width={80}
                  />
                  <div className={styles.details}>
                    <div>
                      <div className={styles.name}>{product.name}</div>
                      <div className={styles.description}>
                        {product.description}
                      </div>
                      <div className={styles.category}>
                        {product.category.join(' / ')}
                      </div>
                    </div>
                    <div className={styles.summary}>
                      <div className={styles.price}>
                        {formatPrice(product.price)}
                      </div>
                      <div className={styles.stock}>
                        {product.stock > 0
                          ? `${product.stock} in stock`
                          : 'Out of stock'}
                      </div>
                      <button
                        className={styles.button}
                        disabled={product.stock === 0}
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <aside className={styles.cart}>
            <div className={styles.cartHeader}>
              <h2>Cart</h2>
              <span>0 items</span>
            </div>
            <p className={styles.emptyCart}>
              Cart API not implemented. Add an endpoint and wire this panel to
              backend state.
            </p>
            <div className={styles.cartTotal}>
              <span>Total</span>
              <strong>{formatPrice(0)}</strong>
            </div>
            <p className={styles.stubNote}>
              These controls are intentionally non-functional. Implement the
              backend APIs, then replace these stub handlers with real calls.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
