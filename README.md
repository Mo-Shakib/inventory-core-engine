
# 📦 Inventory Core Engine

A headless, robust backend service that manages product catalogs and tracks stock levels, complete with transactional safety and a lightweight, decoupled web dashboard.

## 🚀 Tech Stack
* **Backend:** Node.js, Express.js
* **Database ORM:** Prisma 7
* **Database:** SQLite (Easily swappable to PostgreSQL)
* **Frontend:** Single-page Vanilla HTML/JS and CSS

## ⚙️ Features
* **Normalized Database:** Relational schema separating `Products` and `Orders`.
* **Transactional Safety:** Uses Prisma `$transaction` to ensure stock is only deducted if an order successfully processes, preventing overselling.
* **Headless Architecture:** The backend strictly serves JSON via a RESTful API, allowing any frontend client to consume the data.

## 🛠️ Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mo-Shakib/inventory-core-engine.git
   cd inventory-core-engine
   ```

1. **Install dependencies:**

   ```
   npm install
   ```

2. **Set up the Database:**


   ```
   # Generates the Prisma Client
   npx prisma generate

   # Creates the SQLite database and pushes the schema
   npx prisma migrate dev --name init
   ```

3. **Start the Development Server:**


   ```
   npm run dev
   ```

   *The server will start on `http://localhost:3000`.*

## 📡 API Reference

| **Method** | **Endpoint**    | **Description**                                              |
| ---------- | --------------- | ------------------------------------------------------------ |
| `GET`      | `/api/products` | Fetches all products and current stock levels                |
| `POST`     | `/api/products` | Creates a new product. Requires `sku`, `name`, `price`, `stock_quantity` |
| `POST`     | `/api/orders`   | Places an order and safely deducts stock. Requires `productId`, `quantity_ordered` |

------