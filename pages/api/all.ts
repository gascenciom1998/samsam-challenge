import type { Product } from "./lib/product";
import type { NextApiRequest, NextApiResponse } from "next";
import { getDB } from "./lib/db";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  const db = getDB();
  const response = db.prepare("select * from product").all() as Product[];
  res.status(200).json(response);
  db.close();
}
