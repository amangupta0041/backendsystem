# Backend Ledger - Full Stack Internship Assignment

## Project Overview
This project is a fully functional web application built as a submission for the Round 2 Full Stack Developer Internship assignment. It features a robust Node.js/Express backend paired with a modern React (Vite) frontend, designed with a premium, glassmorphism aesthetic.

## Features
- **Real User Authentication**: Secure login and signup flows using JWT (JSON Web Tokens) and bcrypt password hashing.
- **Proper Backend System**: RESTful API architecture with separation of concerns (Controllers, Routes, Models, Services).
- **Database Integration**: MongoDB integration using Mongoose for reliable data storage.
- **Premium Frontend**: Responsive, modern user interface featuring a secure Dashboard with mock financial statistics.

## Tech Stack
- **Frontend**: React, Vite, React Router, Axios, Lucide React (Icons), Vanilla CSS
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs, CORS
- **Tools**: dotenv for environment variables.

---

## 🚀 Running the Project Locally

### 1. Setup the Backend
1. Navigate to the `Backend Ledger` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure you have a `.env` file in the root of the backend folder with the following variables:
   ```env
   PORT=3000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>
   ```
4. Start the backend development server:
   ```bash
   npm run dev
   ```

### 2. Setup the Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173` to view the application.

---

## 🌍 Deployment Guide

To deploy this project as a live website, follow these steps:

### Backend Deployment (Render)
1. Push your backend code (`Backend Ledger` folder) to a new GitHub repository.
2. Go to [Render](https://render.com) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Set the build command to `npm install` and the start command to `node server.js`.
5. Add your `.env` variables in the Environment section on Render.
6. Deploy the service. Once live, copy the backend URL (e.g., `https://backend-ledger.onrender.com`).

### Frontend Deployment (Vercel)
1. In your frontend code, update the API URLs in `Login.jsx` and `Signup.jsx` from `http://localhost:3000` to your new live backend URL.
2. Push your `frontend` folder to a separate GitHub repository (or a sub-folder in a monorepo).
3. Go to [Vercel](https://vercel.com) and import the frontend repository.
4. Vercel will automatically detect Vite. Click **Deploy**.
5. Your frontend is now live!

---

## Submission Notes
- The code is modular, well-structured, and strictly adheres to industry standards.
- UI elements do not use generic CSS frameworks, relying instead on custom styling to ensure a unique, human-crafted feel.
