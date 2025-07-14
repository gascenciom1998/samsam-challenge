import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import type { Product } from './api/lib/product'
import styles from '../styles/Checkout.module.css'

const Checkout: NextPage = () => {
    const { bag, updateBagQuantity, clearBag, getBagTotal } = useAppContext()
    const [products, setProducts] = useState<Product[]>([])
    const [isCheckedOut, setIsCheckedOut] = useState(false)

    useEffect(() => {
        (async () => {
            setProducts(await (await fetch('/api/all')).json() as Product[]);
        })();
    }, []);

    const bagItems = Object.entries(bag).map(([productName, quantity]) => {
        const product = products.find(p => p.name === productName);
        return product ? { ...product, quantity } : null;
    }).filter(Boolean) as (Product & { quantity: number })[];

    const total = getBagTotal(products);

    const handleCheckout = () => {
        setIsCheckedOut(true);
        setTimeout(() => {
            clearBag();
            setIsCheckedOut(false);
        }, 2000);
    };

    if (isCheckedOut) {
        return (
            <div className={styles.container}>
                <Head>
                    <title>Checkout - Centrito</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <div className={styles.successMessage}>
                        <h1>Thank you for your purchase!</h1>
                        <p>Your order has been processed successfully.</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Checkout - Centrito</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Your Bag</h1>
                    <Link href="/">
                        <a className={styles.backLink}>← Continue Shopping</a>
                    </Link>
                </div>

                {bagItems.length === 0 ? (
                    <div className={styles.emptyBag}>
                        <h2>Your bag is empty</h2>
                        <p>Add some products to your bag to continue shopping.</p>
                        <Link href="/">
                            <a className={styles.shopButton}>Shop Now</a>
                        </Link>
                    </div>
                ) : (
                    <div className={styles.checkoutContent}>
                        <div className={styles.bagItems}>
                            {bagItems.map((item) => (
                                <div key={item.name} className={styles.bagItem}>
                                    <img src={item.photo} alt={item.name} className={styles.itemImage} />
                                    <div className={styles.itemDetails}>
                                        <h3 className={styles.itemName}>{item.name}</h3>
                                        <div className={styles.itemCategory}>{item.category}</div>
                                        <div className={styles.itemPrice}>${item.price}</div>
                                    </div>
                                    <div className={styles.quantityControls}>
                                        <button
                                            className={styles.quantityBtn}
                                            onClick={() => updateBagQuantity(item.name, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className={styles.quantity}>{item.quantity}</span>
                                        <button
                                            className={styles.quantityBtn}
                                            onClick={() => updateBagQuantity(item.name, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className={styles.itemTotal}>
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.checkoutSummary}>
                            <div className={styles.totalSection}>
                                <div className={styles.totalRow}>
                                    <span>Subtotal:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className={styles.totalRow}>
                                    <span>Shipping:</span>
                                    <span>Free</span>
                                </div>
                                <div className={styles.totalRow + ' ' + styles.totalFinal}>
                                    <span>Total:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button className={styles.checkoutButton} onClick={handleCheckout}>
                                Complete Purchase
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default Checkout 