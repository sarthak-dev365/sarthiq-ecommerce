# Sarthiq — Beginner E-commerce Project

**Brand line:** Shop Smart. Live Better.  
**Built with:** React + Vite + JSX, Node.js + Express, MongoDB + Mongoose, and normal CSS.

This is a small learning project. It has a product listing, category filters, search, cart, and a basic Cash on Delivery order form. It does not include an admin panel, online payment, login system, or advanced security features.

## 1. Install the required software

Install these on your computer:
- Node.js (LTS version)
- Visual Studio Code
- MongoDB Community Server (local database) OR create a free MongoDB Atlas database

## 2. Open the project

1. Extract `Sarthiq-Beginner.zip`.
2. Open the extracted `Sarthiq-Beginner` folder in VS Code.
3. Open Terminal → New Terminal.

## 3. Set up the backend

In the VS Code terminal:

```bash
cd backend
npm install
```

Create your environment file:

**Windows CMD:**
```bat
copy .env.example .env
```

Open `backend/.env`. For MongoDB running on your computer, use:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/sarthiq
```

If you use MongoDB Atlas, replace the value of `MONGODB_URI` with your Atlas connection string. In Atlas, create a database user, allow your computer's IP address in Network Access, and copy the connection string. Replace the password placeholder in that string with your database user's password. Do not share your real connection string publicly.

Make sure the local MongoDB service is running if you selected the local database.

## 4. Add sample products

Keep the terminal inside the `backend` folder and run:

```bash
npm run seed
```

You should see: `Sample products added successfully`.

## 5. Start the backend server

In the same backend terminal:

```bash
npm run dev
```

Open this address in your browser to test the backend:

`http://localhost:5000/api/health`

You should see a message saying the Sarthiq API is running. Keep this terminal open.

## 6. Start the frontend website

Open a **second terminal** in VS Code and run:

```bash
cd frontend
npm install
npm run dev
```

Open the local address Vite displays, usually:

`http://localhost:5173`

Keep both terminals open while using the website.

## 7. Basic API list

| Method | API URL | Work |
|---|---|---|
| GET | `/api/health` | Check server |
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get one product |
| POST | `/api/products` | Add a product |
| POST | `/api/orders` | Place a COD order |

Example JSON to add a product using Postman:

```json
{
  "name": "Water Bottle",
  "category": "Home",
  "price": 399,
  "image": "https://example.com/bottle.jpg",
  "description": "A simple reusable water bottle."
}
```

Send it as a POST request to `http://localhost:5000/api/products` with `Content-Type: application/json`.

## 8. Important beginner notes

- `frontend/src/App.jsx` contains the website UI and basic React functions.
- `frontend/src/style.css` contains the design and responsive CSS.
- `backend/server.js` contains the Express server and API routes.
- `backend/models.js` defines the MongoDB data structure (schemas).
- `backend/seed.js` adds sample products to the database.
- `fetch()` is used by the frontend to talk to the backend APIs.
- `useState()` stores changing page data such as products and cart items.
- `useEffect()` loads products when the website first opens.

This is a beginner practice project, not a production-ready online store. COD orders are saved in MongoDB, but no real payment is collected. Product images are loaded from external image links and need an internet connection.
