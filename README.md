# Ved Tech Assignment

A full-stack monorepo containing a business website, an admin panel, and a backend API.

## Project Structure

```
ved-tech-assignment/
├── backend/                    # Node.js + Express REST API
├── frontend/                   # React admin panel
└── ved-tech-services-website/  # React business website
```

---

## Backend

Node.js + Express API with MongoDB, JWT authentication, and Nodemailer.

### Stack
- Express.js
- MongoDB + Mongoose
- JWT (cookie-based auth)
- Nodemailer (Gmail)
- CORS

### Setup

```bash
cd backend
npm install
npm run dev       # development
npm start         # production
```

### Environment Variables

Create a `.env` file in `backend/`:

```env
PORT=8000
DB_URL=your_mongodb_connection_string
ADMIN_EMAIL=your_gmail@gmail.com
ADMIN_PASSWORD=your_admin_password
JWT_SECRET=your_strong_jwt_secret
NODE_ENV=development
CONTACT_EMAIL=recipient@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password
```

### API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/login` | No | Admin login |
| POST | `/api/auth/logout` | No | Admin logout |
| GET | `/api/auth/checkAuth` | Yes | Verify token |
| POST | `/api/submission` | No | Create submission |
| GET | `/api/submission` | Yes | Get all submissions |

---

## Frontend (Admin Panel)

React admin panel for managing contact form submissions.

### Stack
- React 18
- Zustand (state management)
- Axios
- Tailwind CSS
- react-hot-toast

### Setup

```bash
cd frontend
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in `frontend/`:

```env
VITE_API_URL=http://localhost:8000/api
```

### Features
- JWT-based authentication with cookie persistence
- Auth check on load with full-page loader
- Submissions table with fixed header and scrollable body
- View individual submission details
- Session restore on page refresh
- Toast notifications for all actions

---

## Business Website

React marketing website with contact form integration.

### Stack
- React 18
- Framer Motion
- Lenis (smooth scrolling)
- Tailwind CSS
- Axios
- react-hot-toast

### Setup

```bash
cd ved-tech-services-website
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in `ved-tech-services-website/`:

```env
VITE_API_URL=http://localhost:8000/api
```

### Features
- Smooth scrolling with Lenis
- Framer Motion animations
- Contact form with validation and API integration
- Fully responsive (mobile-first)

---

## Deployment

| Part | Platform | Root Directory |
|------|----------|----------------|
| Backend | Render | `backend` |
| Admin Panel | Vercel | `frontend` |
| Business Website | Vercel | `ved-tech-services-website` |

After deploying the backend, update `VITE_API_URL` in `.env.production` for both frontend projects and add the Vercel URLs to the backend CORS config.
