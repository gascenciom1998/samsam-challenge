# Shop.com

This is a toy shop project for technical interviews. Currently it includes a simple main page that lists fake products, prices, and local product images. Through the course of the interview, we'll add features to this project.

## The Stack

This project is written in TypeScript using Next.js. Next.js is a React framework that has a friendly developer experience (live reloads, etc).

For styling, we're just using traditional CSS. You likely do not have to worry about CSS throughout the challenge.

Product data is served from a small local TypeScript seed file. Product images live in `public/product-images`. That keeps the challenge focused on the Next.js app instead of requiring a local database or hosted image setup.

## Developing

1. Clone the repository
2. Check out a new branch
3. Run `npm install`
4. Run `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

Useful commands:

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm start` runs the production build after `npm run build`.
- `npm run lint` checks the project with Next.js linting.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/all](http://localhost:3000/api/all). This endpoint can be edited in `pages/api/all.ts`, and the seed product data lives in `pages/api/lib/products.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Styles are imported in a similar way to TypeScript imports. See the import at the top of `index.tsx` and how it's used in the corresponding React components.

## Possibly Relevant Documentation

[TypeScript](https://www.typescriptlang.org/docs/)

[React](https://reactjs.org/docs/getting-started.html#learn-react)

Hooks:

[Intro I](https://reactjs.org/docs/hooks-intro.html)
[Intro II](https://reactjs.org/docs/hooks-overview.html)
[State Hook](https://reactjs.org/docs/hooks-state.html)
[Effect Hook](https://reactjs.org/docs/hooks-effect.html)

NextJS:

[Intro](https://nextjs.org/docs/getting-started)
[Pages](https://nextjs.org/docs/basic-features/pages)
[Images](https://nextjs.org/docs/basic-features/image-optimization)
[Image Properties](https://nextjs.org/docs/api-reference/next/image)
