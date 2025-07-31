import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/ProductPage.module.css'
import type { Product } from '../api/lib/product'
import {useState, useEffect} from 'react'

interface ProductPageProps {
  params: any
}

const ProductPage: NextPage<ProductPageProps> = ({ params }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [product, setProduct] = useState<Product>({} as Product);
console.log("params is", params);

  useEffect(() => {
    (async () => {
      const prods = await (await fetch('/api/all')).json() as Product[];
      console.log("prods is", prods);
      setProduct(prods.filter(x => x.name == name)[0]);
      console.log("prod is", product, prods.filter(x => x.name == name)[0]);
    })();
  }, []);


  const router = useRouter()

  const { name } = router.query; // Access the dynamic segment (e.g., 'my-first-post')
console.log("slug is", name);

  const handleBack = () => {
    router.back()
  }


  const handleBuy = () => {
    // Add your buy logic here
    console.log('Buying product:', product?.name)
  }

  console.log("product is", product);

  return (
    <div className={styles.container}>
      <Head>
        <title>{product?.name} - Centrito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={handleBack} className={styles.backButton}>
          ← Back to Products
        </button>
        
        <div className={styles.productDetail}>
          <div className={styles.imageContainer}>
            <Image
              src={product?.photo || '/placeholder-image.jpg'}
              alt={product?.name}
              width={400}
              height={400}
              className={styles.productImage}
            />
          </div>
          
          <div className={styles.productInfo}>
            <h1 className={styles.productName}>{product?.name}</h1>
            <p className={styles.productCategory}>{product?.category}</p>
            <p className={styles.productPrice}>${product?.price}</p>
            
            <button onClick={handleBuy} className={styles.buyButton}>
              Buy Now
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage