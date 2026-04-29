import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from './lib/product';
import { PRODUCTS } from './lib/products';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(PRODUCTS);
}
