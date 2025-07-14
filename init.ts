import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs';

import type {Product} from './pages/api/lib/product'
import { getDB } from './pages/api/lib/db';

const DUMMY_PRODUCTS: Product[] = [
    {
        id: 0,
        name: 'Conjunto Niños',
        price: 50000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/3a01b72a-c470-49c4-ae22-94b336597cf6.png',
        category: 'NIÑOS',
        // description: 'Conjunto de niño de 3 piezas, compuesto por camisa, pantalón y corbata',
    },
    {
        id: 1,
        name: 'Jeans',
        price: 15000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/54bec7dc-ad37-4305-888e-d76776b5585c.png',
        category: 'HOMBRES|JEANS',
        // description: 'Jeans de hombre',
    },
    {
        id: 2,
        name: 'Pantalon',
        price: 30000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/6ec800e0-f4f1-40cf-9faf-27582326bc60.png',
        category: 'HOMBRES|PANTALONES',
        // description: 'Pantalon formal de hombre',
    },
    {
        id: 3,
        name: 'Pantalon',
        price: 25000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/471cd4e5-e31f-4e60-b431-72eeaf924c4c.png',
        category: 'HOMBRES|PANTALONES',
        // description: 'Pantalon de hombre',
    },
    {
        id: 4,
        name: 'Vestido Mujer',
        price: 30000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/6f9a21fc-4145-4bfe-bfa0-8f2900e0ea02.png',
        category: 'MUJERES|VESTIDOS',
        // description: 'Vestido de mujer',
    },
    {
        id: 5,
        name: 'Pantalon',
        price: 10000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/6592213a-353f-4d28-8c32-4667b0b342bf.png',
        category: 'HOMBRES|PANTALONES',
        // description: 'Pantalon verde de hombre',
    },
    {
        id: 6,
        name: 'Pantalon Cafe',
        price: 20000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/b0378743-5eba-4f06-acdb-b5e7c8a807d6.png',
        category: 'HOMBRES|PANTALONES',
        // description: 'Pantalon cafe de hombre',
    },
    {
        id: 7,
        name: 'Top Mujer',
        price: 15000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/a43384e2-f4ed-4d0a-ad80-6b57e78820e1.png',
        category: 'MUJERES|TOPS',
        // description: 'Top de mujer',
    },
    {
        id: 8,
        name: 'Conjunto Niña',
        price: 25000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/c81e2e34-f5d7-4dbc-8d12-a414b57a6de2.png',
        category: 'NIÑOS',
        // description: 'Conjunto de niña de 3 piezas, compuesto por camisa, pantalón y corbata',
    },
    {
        id: 9,
        name: 'Sudadera',
        price: 30000,
        photo: 'https://odcmbzocropvzmbsarer.supabase.co/storage/v1/object/public/product-images/d0ebcdb7-9f40-4756-b99a-a6c0b4a56422.png',
        category: 'HOMBRES|SUDADERAS',
        // description: 'Sudadera de hombre',
    }
];

(async () => {
    // Wipe and reset the DB
    try {
        fs.unlinkSync('database.db');
    } catch (e) {
        // Probably didn't exist yet
    }
    const db = await getDB();
    await db.exec(`
        create table product (
            id integer primary key,
            name text,
            price number,
            photo text,
            category text
        );
    `)
    //
    for (const product of DUMMY_PRODUCTS) {
        console.log(product);
        await db.run('insert into product (id, name, price, photo, category) values (?, ?, ?, ?)',
            product.id,
            product.name,
            product.price, product.photo, product.category);
    }
})()