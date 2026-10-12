# Lesotho-Hub-

## Visit Lesotho: Interactive Tourism Web Application

Individual Assignment 2b for Web Design II (DIWP3110), Limkokwing University.

An interactive tourism website built with React.js that helps local and international visitors discover attractions, activities and cultural experiences in Lesotho.

## Features

- **Home page:** hero banner, introduction to Lesotho, featured destinations, popular activities and a navigation bar.
- **Attractions:** 8 destinations stored in an array of objects (`src/data/attractions.js`) and rendered dynamically.
- **Search and filter:** search attractions by name and filter by category, with results updating as you type.
- **Attraction details:** click any attraction for a popup with its activities, cost and location.
- **Visitor enquiry form:** full name, email, phone number, destination, number of visitors, preferred date and message, with validation, error messages and a confirmation message.
- **Responsive design:** works on desktop, tablet and mobile, including a collapsing mobile menu.

## Built with

- React 18 (components, JSX, props, `useState`, `useEffect`)
- Create React App (react-scripts)
- Plain CSS

## How to run

You need Node.js 18 or newer.

```bash
npm install
npm start
```

Then open http://localhost:3000 (it usually opens by itself).

To create a production build:

```bash
npm run build
```

## Folder structure

```
visit-lesotho/
  public/
    images/            attraction and hero photos
  screenshots/         project screenshots
  src/
    components/        Navbar, Hero, About, FeaturedDestinations, PopularActivities,
                       SearchFilter, AttractionList, AttractionCard,
                       AttractionDetails, EnquiryForm
    data/
      attractions.js   attraction data (array of objects)
    js/
      filters.js       search and category filter logic (plain JavaScript)
      validation.js    enquiry form validation logic (plain JavaScript)
      index.js         exports the helpers above
    App.jsx            main component, holds state for search, filter and details
    index.js           React entry point
    attractions.css    styles for cards, search, popup and form
    home.css           styles for navbar, hero, sections and responsive rules
  public/index.html
  package.json
```

## Screenshots

Add your screenshots to the `screenshots/` folder and list them here:

- Home page (desktop)
- Attractions with search and filter
- Attraction details popup
- Enquiry form with validation errors
- Enquiry confirmation message
- Tablet view
- Mobile view

## Notes

- Visiting costs are estimates in Maloti (M) and may change.
- Photo credits: add the source of each photo here.

## Author

Your Name, Student number
