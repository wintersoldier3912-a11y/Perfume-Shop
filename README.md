# Lumière Parfumerie

An elegant, responsive perfume shop web application featuring a curated product catalog, detailed product views with reviews, and a functional shopping cart.

## Tech Stack

**Frontend:**
- **React 19**: Core framework for UI components.
- **TypeScript**: For type safety and better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsiveness.
- **React Router DOM**: For client-side routing.
- **Lucide React**: For consistent and beautiful iconography.
- **Vite/CRA**: Build tool and development server.

**Data/Backend Simulation:**
- **Mock Service**: The application currently uses a robust mock service (`services/api.ts` and `services/mockData.ts`) to simulate REST API endpoints, network latency, and database operations. This allows the frontend to be fully functional and demo-ready without a local MongoDB setup.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Steps

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd perfume-shop
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Application:**
    ```bash
    npm start
    # OR if using Vite
    npm run dev
    ```

    The application will launch in your default browser at `http://localhost:3000` (or the port specified by your bundler).

## Features & Usage

1.  **Home Page**:
    - Browse the "Scent of Elegance" hero section.
    - View featured products in the grid.
    - **Sorting**: Use the dropdown to sort products by Price (Low/High) or Name (A-Z).

2.  **Collections**:
    - Navigate to the Collections page.
    - Filter products by categories (Floral, Woody, Fresh, etc.).

3.  **Product Details**:
    - Click any product to view details.
    - **Gallery**: Interact with the image gallery (thumbnails update main image).
    - **Add to Cart**: Select a size and quantity, then add to cart.
    - **Reviews**: Read existing reviews and submit a new one using the form.

4.  **Cart**:
    - View added items with their specific sizes and calculated prices.
    - Adjust quantities or remove items.
    - "Checkout" button triggers a placeholder alert.
    - Persistent state: Cart items are saved to `localStorage`.

## Testing

Currently, the application relies on manual testing.
- **Responsiveness**: Resize the browser window to test Mobile (< 768px), Tablet, and Desktop layouts.
- **Cart Logic**: Add items, refresh the page, and verify items remain (persistence check).

## Generating Screenshots & Packaging

To prepare the project for submission:

1.  **Screenshots**:
    - Open the app in your browser.
    - Use DevTools (F12) to toggle device toolbar.
    - Capture screenshots for:
        - `screenshots/home-desktop.png`
        - `screenshots/home-mobile.png`
        - `screenshots/product-desktop.png`
        - `screenshots/product-mobile.png`

2.  **Create Zip**:
    Run the following command in the project root to create the submission archive (excluding `node_modules`):
    ```bash
    zip -r perfume-shop.zip . -x "node_modules/*" ".git/*" "dist/*"
    ```

## Design Decisions

- **Aesthetics**: A minimalist, luxury aesthetic was chosen, utilizing a color palette of `brand-primary` (Terracotta), `brand-dark` (Charcoal), and `brand-light` (Off-white/Cream) to evoke a sense of warmth and sophistication. Fonts include 'Playfair Display' for serif headings and 'Lato' for sans-serif body text.
- **Component Architecture**: The app is broken down into reusable components (`ProductCard`, `Navbar`, `ReviewList`) to ensure maintainability.
- **Mock API Pattern**: To ensure the UI could be built and tested rapidly independent of backend development, a `services/api.ts` layer was implemented. This mimics async `fetch` calls with delays, allowing for easy swap-out with a real Express backend in the future.
- **Accessibility**: Semantic HTML tags (`<nav>`, `<main>`, `<footer>`) and ARIA labels on icon-only buttons are used to improve accessibility.
- **Performance**: Images are loaded from Unsplash with specific query parameters (`?fit=crop&w=800`) to ensure they are optimized for web display without being unnecessarily large.

## Future Improvements

- **Backend Integration**: Replace `services/api.ts` with real `axios` calls to a Node/Express/MongoDB backend.
- **User Auth**: Implement JWT-based login/signup to save cart data to a user profile database.
- **Payment Gateway**: Integrate Stripe for actual payment processing.
- **Search**: Implement a debounced search bar in the navbar for real-time product filtering.
