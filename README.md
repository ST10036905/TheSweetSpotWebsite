# The Sweet Spot 
A modern, responsive bakery website for **The Sweet Spot**, designed to showcase the bakery's products, menu, occasions, and ordering options.

The website is being developed using **React** with **Vite**, with a focus on a clean, elegant, modern aesthetic that reflects The Sweet Spot's brand identity.

## Project Status

**Phase:** Initial Development / Foundation

The initial phase focuses on establishing the website's:

* React application structure
* Navigation
* Page layouts
* Brand styling
* Responsive design
* Cake menu
* Ordering page foundation
* Contact page foundation
* Footer
* Reusable components

The website is currently a frontend project. Ordering functionality will be expanded in later phases.

---

## 🛠️ Technologies Used

### Frontend

* **React** – Component-based user interface
* **Vite** – Development server and build tool
* **React Router** – Client-side page navigation
* **CSS3** – Custom responsive styling
* **Lucide React** – Icons

### Development Tools

* **Node.js**
* **npm**
* **Visual Studio Code**
* **Git / GitHub**


##  Design & Branding

The website follows The Sweet Spot's existing brand identity.

### Main Colours

| Colour    | Purpose              |
| --------- | -------------------- |
| `#356575` | Primary teal         |
| `#294F5D` | Dark teal            |
| `#C9797D` | Primary rose         |
| `#F8E7E5` | Light rose           |
| `#FFFFFF` | Main background      |
| `#334F5B` | Main text            |
| `#71828A` | Secondary/muted text |
| `#EADED9` | Borders              |

The design uses:

* White backgrounds
* Teal headings and branding
* Rose/pink accent colours
* Rounded cards and buttons
* Soft borders
* Subtle shadows
* Clean spacing
* Responsive layouts
* Modern typography for menu and product information

The overall visual direction is intended to be **modern, minimal, elegant and bakery-focused**.

# Project Structure

The project follows a component-based React structure.

the-sweet-spot/
│
├── public/
│   └── assets/
│       └── images/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Order.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
> The exact folder structure may change as development continues.

#  Main Components

## Navbar

The navigation bar appears consistently across the website.

It provides access to the main sections of the website and includes:

* The Sweet Spot branding
* Navigation links
* Order button
* Responsive behaviour for smaller screens

The navbar is designed to remain visually consistent across all pages.

## Footer

The footer is shared across the website.

It contains:

* The Sweet Spot branding
* Supporting business information
* Navigation/contact links
* Copyright information

Using a reusable footer component ensures that all pages maintain the same structure.

# Home Page

The home page acts as the main introduction to The Sweet Spot.

Current sections include:

### Hero Section

Introduces the bakery with:

* Brand messaging
* Location/business information
* Call-to-action buttons
* Main visual/logo

### Occasions

Highlights the types of events The Sweet Spot caters for, including:

* Birthdays
* Weddings
* Baby Showers
* Anniversaries
* Bridal Showers
* Corporate Events
* Just Because

### How It Works

Provides customers with a simple overview of the ordering process and bakery experience.

# Menu Page

The menu page allows customers to view the available cake options.

Current categories include:

### Cake Bases

* Vanilla Bean
* Chocolate Fudge
* Red Velvet
* Marble Cake

### Fillings & Frostings

* Cream Cheese Frosting
* Peppermint Crisp
* Biscoff Lotus
* Milk Truffle
* Dark Chocolate Truffle

### Special Fillings

* Chocolate Ganache
* Strawberry Compote
* Salted Caramel

The menu also contains an **Occasions** section and a call-to-action directing customers to the ordering page.

The menu uses a clean card-based layout with modern typography and black/dark text for flavour names to improve readability.

# Order Page

The order page provides the foundation for customers to submit cake requirements.

The page is structured around:

* Customer information
* Cake requirements
* Cake base selection
* Filling selection
* Event information
* Additional requests
* Order summary

A WhatsApp-based ordering process is being incorporated so that customers can easily send their requirements directly to the bakery.

Further validation, pricing logic and order functionality can be developed in later phases.

# Contact Page

The contact page provides customers with ways to get in touch with The Sweet Spot.

The layout is designed to support contact information such as:

* WhatsApp
* Instagram
* Email
* General enquiries

A call-to-action is also provided to encourage customers to place an order.
# Responsive Design

The website is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

CSS media queries are used to adapt layouts at different screen sizes.

Examples include:

* Collapsing navigation links
* Single-column layouts on mobile
* Responsive buttons
* Smaller typography
* Responsive cards
* Mobile-friendly forms

The goal is to ensure that customers can browse the website comfortably from their phones, which is particularly important for a bakery ordering website.

#  Reusable Components

The project uses reusable React components wherever possible.

For example:

```jsx
<Navbar />
```

and

```jsx
<Footer />
```

This avoids duplicating the same navigation and footer code across individual pages.

Other sections, such as menu cards, are also designed to be reusable.

Example:

```jsx
<MenuCard
  title="Cake Bases"
  items={cakeBases}
  pink
/>
```

This makes it easier to add or modify menu categories without rewriting the entire layout.

# Routing

React Router is used to navigate between pages.

The intended structure is:

```text
/              → Home
/menu          → Cake Menu
/order         → Order
/contact       → Contact
```

The navigation and buttons use React Router links so that users can move between pages without requiring a full browser refresh.

---

#  Running the Project Locally

## 1. Clone the repository

```bash
git clone <repository-url>
```

## 2. Open the project

```bash
cd the-sweet-spot
```

## 3. Install dependencies

```bash
npm install
```

## 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173/
```

---

# Important Dependencies

The project currently uses packages such as:

```bash
npm install react-router-dom
npm install lucide-react
```

Vite and React are included as part of the project setup.

# Development Workflow

The development process follows a component-based approach:

1. Create the page/component
2. Build the JSX structure
3. Add reusable components where appropriate
4. Apply brand styling using CSS
5. Test desktop layout
6. Test tablet layout
7. Test mobile layout
8. Fix spacing and responsiveness
9. Test navigation
10. Commit changes to Git

#  Future Development

Future phases may include:

### Phase 2 – Product & Pricing

* Detailed cake pricing
* Cake sizes
* Number of layers
* Additional filling prices
* Decoration pricing
* Product images
* More menu categories

### Phase 3 – Ordering

* Improved order form
* Dynamic price calculations
* Order validation
* WhatsApp integration
* Order confirmation

### Phase 4 – Business Integration

* Instagram integration
* Google Maps/location
* Business contact details
* Social media links
* Customer enquiry handling

### Phase 5 – Production

* Final UI/UX refinement
* SEO
* Performance optimisation
* Accessibility improvements
* Production build
* Deployment

---

#  Initial Phase Goal
The main objective of this phase is to create a **strong frontend foundation** for The Sweet Spot.

The website should provide customers with a clear and attractive way to:

**Discover → Explore the Menu → Choose Their Cake → Place an Order → Contact The Sweet Spot**

The project will continue to evolve as additional business requirements, pricing information and ordering functionality are introduced.

---
## Development

**Project:** The Sweet Spot Bakery Website
**Technology:** React + Vite
**Phase:** Initial Frontend Development
**Status:** In Development
