# Netflix MERN Project

This project is a full-stack MERN application inspired by Netflix. It features user authentication, profile management, a dynamic home page, detailed movie/series pages, and more. The project uses Material UI (MUI) for a sleek, responsive interface, and integrates with external APIs for movie data and an AI module for personalized recommendations.

---

## Overview

This project replicates core Netflix functionalities:
- **User Authentication:** Registration and login using JWT.
- **Profile Selection:** Supports up to 5 profiles per account.
- **Home Page:** Displays multiple rows of content (recommended, new releases, popular titles, etc.).
- **Details Pages:** Comprehensive movie/series details including gallery, cast information, and review functionality.
- **AI Recommendations:** Uses an external AI module for personalized content suggestions.
- **Review Pages:** displays a form where users can insert a review for a cetrain programn.
- - **Review Pages(admin):** displays all the reviews in the system.
- - **insert programn(admin):** allows the admin to insert new programn to the system.


---

## Features

- **User Registration & Login:** Secure sign-up and authentication with validation (password requirements, unique email/phone).
- **Profile Management:** Allows creation, editing, and deletion of up to five profiles per account.
- **Dynamic Home Page:** Rotating cover photo, multiple content rows based on AI-calculated recommendations, newest titles, and popular picks.
- **Movie Details:** Dedicated page/modal that includes detailed information, cast, and gallery images.
- **Responsive Design:** Fully responsive interface built with React and MUI.
- **RESTful API:** Developed using Node.js, Express, and MongoDB with Mongoose for data management.
- **External Integration:** Consumes external APIs for movie/series data and integrates an AI library for recommendations.

---

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Setup the backend:**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory and add:

   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

3. **Run the backend:**

   ```bash
   npm start
   ```

4. **Setup the frontend:**

   Open a new terminal:

   ```bash
   cd frontend
   npm install
   ```

5. **Run the frontend:**

   ```bash
   npm start
   ```

### Deployment

- **backend:** Deployed on Render.
- **frontend:** Deployed on Netlify.
---

## Technologies Used

- **Frontend:**
  - React, React Router
  - Material UI (MUI)
- **Backend:**
  - Node.js, Express
  - MongoDB, Mongoose
  - JWT for authentication
- **External Services:**
  - Free movies/TV series API (TMDb)
  - AI library for recommendation algorithms
- **Deployment:**
  - Render (backend)
  - Netlify (frontend)

---
