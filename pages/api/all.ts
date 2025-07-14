import type { Product } from './lib/product'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getDB } from './lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const db = await getDB();
  const response = await db.all<Product[]>("select * from product");
  res.status(200).json(response);
  db.close();
}
