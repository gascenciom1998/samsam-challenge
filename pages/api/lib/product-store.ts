import type { Product } from "./product";
import { PRODUCT_SEEDS } from "./products";

const getProductEntry = (product: Product): [number, Product] => [
	product.id,
	product,
];

const productsById = new Map<number, Product>(
	PRODUCT_SEEDS.map(getProductEntry),
);

export const getProducts = (): Product[] => Array.from(productsById.values());

export const getProduct = (productId: number): Product | undefined =>
	productsById.get(productId);
