import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import type { Product } from "./api/lib/product";

const formatPrice = (price: number) => `$${price.toLocaleString("en-US")}`;

const Home: NextPage = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch("/api/all");
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
				<ul className={styles["product-list"]}>
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
									<div className={styles.category}>{product.category}</div>
								</div>
								<div className={styles.price}>{formatPrice(product.price)}</div>
							</div>
						</li>
					))}
				</ul>
			</main>
		</div>
	);
};

export default Home;
