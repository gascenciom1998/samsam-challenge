# Centrito Challenge

This is a toy project that we use at Centrito for technical interviews. Currently it includes a very simple main page that lists (fake) products and their prices. Through the course of the interview, we'll add features to this project.

## The Stack

This project is written in Typescript using Next.js. Next.js is a React framework that has a friendly developer experience (live reloads, etc).

For styling, we're just using traditional CSS. You likely do not have to worry about CSS throughout the challenge.

As a database, we're using sqlite. Sqlite is a simple SQL database that is stored in a local file. By using it here, we can avoid common challenges and pitfalls in configuring a more traditional SQL database.

## Developing

1. Clone the repository
2. Check out a new branch
3. Run `yarn install`
4. Run `yarn dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/all](http://localhost:3000/api/all). This endpoint can be edited in `pages/api/all.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

Styles are imported in a similar way to typescript imports, see the import at the top of `index.tsx` and how it's use in the corresponding React components.

## Possibly Relevant Documentation

Typescript: https://www.typescriptlang.org/docs/

React: https://reactjs.org/docs/getting-started.html#learn-react

Hooks:

Intro I: https://reactjs.org/docs/hooks-intro.html
Intro II: https://reactjs.org/docs/hooks-overview.html
State Hook: https://reactjs.org/docs/hooks-state.html
Effect Hook: https://reactjs.org/docs/hooks-effect.html

NextJS:

Intro: https://nextjs.org/docs/getting-started
Pages: https://nextjs.org/docs/basic-features/pages
Images: https://nextjs.org/docs/basic-features/image-optimization
Image Properties: https://nextjs.org/docs/api-reference/next/image
