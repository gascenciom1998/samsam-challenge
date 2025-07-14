This is a e-commerce site. Right now it only shows a table of product names on one column and product prices in the other column. We have access to:

```
        id integer primary key,
        name text,
        price number,
        photo text,
        category text
```

per element.

1. Let’s render these as cards with the image, price, and name. Show category as a chip. key={key}
2. Let’s add a search bar at the top that allows us to filter by string matching (lowercase includes).
3. Add a menu for:
   1. Slider with TWO drag points: one for minimum price and one for maximum price. Let’s have the bounds on this slider be the min and max from the displayed cards, so we need to programmatically get this beforehand.
   2. Dropdown filter for category.

---

**NOTE: assume name is the unique key, the id field doesn’t actually work.**

1. Create a <Products /> component that renders a bunch of Product.
   1. Let’s render these as cards with the image, price, and name. Show category as a chip. key={key}
   2. Use it on homepage first to replace.
2. Add to bag functionality
   1. Set up a global context that has the user’s bag as a dictionary of id: quantity.
   2. Set up a simple dummy checkout page that shows the checked out items, shows a total price, and a fake checkout button.
   3. Use <Products />
3. Favorites list
   1. Similar to #1, just no quantity so keep a list of IDs (string names).
   2. Show a favorites page.
   3. Use <Products /> to show
4. Ratings and reviews
   1. UI:
      1. Each product leads to a product page.
      2. {slug} → show product page (with its info, maybe product name as a header}
      3. Review and rating section below. we don’t have user auth or login right now, so let’s show a form with:
         1. Name (”username”) so the user can input their own name
         2. Number of stars (5 radio buttons for now)
         3. Comment/review
         4. Simple form validation—”username” is not empty before submission.
         5. For the sake of this demo, we’ll set up a endpoint in /api for /review → add entry to reviews table
      4. Before you do the above, we need to set up the Reviews table!
         1. Create new SQL table with the above columns.
5. Recommender system
   1. Have a display for “recommending” products. For our sake, let’s do a <Recommended /> component (and we can display this on the top of the homage page AS well as product pages themselves).
   2. For the recommendation system:
      1. SQL table for “events”:
         1. types: “search” | “click” | “view” (duration)
         2. metadata: JSON / object
            1. Includes: “search term” / “link clicked”
      2. Global running “recommended” list.
         1. To begin with: 3 random products.
         2. Button for update recommended (in the future this can happen in the background, per page change, etc.). CALLS /api/update-recommended
         3. That endpoint will:
            1. Query our SQL table
            2. “algorithm here”: find what the user has clicked on most in the last 10 clicks.
               1. +1 for every item viewed
               2. Decay items that were viewed a while ago
            3. Find that category and pick the first 5 items to recommend.
   3. Testing sake: show a debug component called <Events /> (show the latest tracked events)
