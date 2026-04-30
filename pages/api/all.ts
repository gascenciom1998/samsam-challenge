import type { NextApiRequest, NextApiResponse } from 'next';
import type { Product } from '../../types/product';
import { getProducts } from './lib/product-store';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  res.status(200).json(getProducts());
}
