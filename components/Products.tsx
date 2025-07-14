import React from 'react';
import { Product } from '../pages/api/lib/product';
import { useAppContext } from '../context/AppContext';
import styles from '../styles/Products.module.css';
import Image from 'next/image';

interface ProductsProps {
    products: Product[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
    const { addToBag, toggleFavorite, favorites } = useAppContext();

    return (
        <div className={styles.productsGrid}>
            {products.map((product) => (
                <div key={product.name} className={styles.productCard}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={product.photo}
                            alt={product.name}
                            width={200}
                            height={200}
                            className={styles.productImage}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h3 className={styles.productName}>{product.name}</h3>
                        <div className={styles.categoryChip}>
                            {product.category}
                        </div>
                        <div className={styles.productPrice}>${product.price}</div>
                        <div className={styles.productActions}>
                            <button
                                className={styles.addToBagBtn}
                                onClick={() => addToBag(product.name)}
                            >
                                Add to Bag
                            </button>
                            <button
                                className={`${styles.favoriteBtn} ${favorites.includes(product.name) ? styles.favorited : ''
                                    }`}
                                onClick={() => toggleFavorite(product.name)}
                            >
                                {favorites.includes(product.name) ? '❤️' : '🤍'}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products; 