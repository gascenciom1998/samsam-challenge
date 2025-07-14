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

## The Challenges

0. Explore the codebase and make sure you understand how it works. If you have any questions, ask them!
1. What other properties do products have do we have that are not on display? Which one should we display? Add a column to display it.
2. Using NextJS features, can you improve the image loading experience on the page? You might want to look here [Next.js Image documentation](https://nextjs.org/docs/basic-features/image-optimization) or here [image properties](https://nextjs.org/docs/api-reference/next/image). 
4. We wish to provide users with the ability to add/delete products to their cart. Propose an approach to implementing this feature and after discussing it, implement it.

## Bonus
5. We wish to let users "check out" their cart.
6. The database now has a description. We wish to extend the code to display this description on the product page.
7. Take a moment to read about [routing in NextJS](https://nextjs.org/docs/routing/introduction) and the [next router](https://nextjs.org/docs/api-reference/next/router). In light of that, we wish to have an admin page where internal users can add/delete/edit new products.
8. We wish to provide users the ability to filter products by category.
9. We wish to provide users the ability to search for products by name.
10. Propose further extensions!
