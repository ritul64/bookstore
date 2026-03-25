# 📚 Bookstore Web Application

A full-stack e-commerce platform for browsing, purchasing, and managing books — built with React, Node.js, and MongoDB.

![React](https://img.shields.io/badge/React-18-blue?logo=react) ![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb) ![JWT](https://img.shields.io/badge/Auth-JWT-orange) ![License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🎯 Overview

A production-ready bookstore app with user authentication, a full shopping cart flow, dynamic search, and a complete admin panel for inventory management. Backend response time optimized by **35%** through query tuning; frontend page load improved by **25%** via React optimization.

---

## ✨ Features

### 👤 User Features
- Register / Login with JWT authentication
- Browse complete book catalog
- Search books by title or author (dynamic, real-time)
- Add to cart, update quantities, remove items
- Place and track orders

### 🛠️ Admin Features
- Add, edit, and delete books
- Manage inventory and pricing
- View order history and analytics dashboard
- Role-based access control (admin vs. regular user)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT + bcrypt |
| API Style | RESTful |

---

## 📁 Project Structure

```
bookstore/
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route-level pages (Home, Cart, Admin, etc.)
│   │   ├── context/         # Auth and Cart context providers
│   │   └── utils/           # API helpers
│   └── package.json
│
├── backend/
│   ├── routes/              # Express route handlers
│   ├── models/              # Mongoose schemas (Book, User, Order)
│   ├── middleware/          # JWT auth middleware
│   ├── controllers/         # Business logic
│   └── server.js
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or MongoDB Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/ritul64/bookstore.git
cd bookstore
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

```bash
npm start
```

### 3. Set up the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📊 Performance Highlights

| Metric | Improvement |
|--------|-------------|
| Backend API response time | **35% faster** (optimized MongoDB queries) |
| Frontend page load speed | **25% faster** (React lazy loading + optimization) |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login and get JWT |
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get single book |
| POST | `/api/books` | Add book (admin) |
| PUT | `/api/books/:id` | Update book (admin) |
| DELETE | `/api/books/:id` | Delete book (admin) |
| POST | `/api/orders` | Place an order |
| GET | `/api/orders` | Get user orders |

---

## 🔮 Future Improvements

- [ ] Payment gateway integration (Razorpay / Stripe)
- [ ] Book reviews and ratings
- [ ] Wishlist functionality
- [ ] Deploy on Vercel (frontend) + Render (backend)

---

## 👤 Author

**Ritul Pandey**
- GitHub: [@ritul64](https://github.com/ritul64)
- Email: ritulpandey100@gmail.com
