# ResumeIQ — AI-Powered Resume Analysis & ATS Optimization Platform

> **Analyze, score, roast, and improve your resume with AI-powered insights, ATS optimization, intelligent rewrites, and version tracking.**

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [API Overview](#-api-overview)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🧠 Overview

**ResuméIQ** is a full-stack, AI-powered resume intelligence platform built for job seekers who want an edge in today's competitive market. It leverages **Google Gemini AI** to analyze resumes, generate ATS compatibility scores, provide actionable feedback, and produce rewritten versions — while keeping a full version history so you can track your improvement over time.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI Resume Analysis** | Deep analysis of resume content using Google Gemini 2.5 Flash |
| 📊 **ATS Scoring** | Applicant Tracking System compatibility scoring with detailed breakdowns |
| ✍️ **AI-Powered Rewrites** | Intelligent suggestions and full resume rewrites optimized for the job market |
| 🕓 **Version History** | Full diff-based version tracking for every resume edit |
| 📈 **Insights Dashboard** | Visual analytics and performance trends across all your resumes |
| 📤 **PDF Export** | Export polished, formatted resumes as downloadable PDF files |
| 🔐 **Auth & Sessions** | Secure JWT-based authentication with HTTP-only cookies |
| ⚙️ **User Settings** | Profile management and application preferences |

---

## 🛠 Tech Stack

### Backend
| Technology | Role |
|---|---|
| **Node.js + Express 5** | REST API server |
| **MongoDB + Mongoose** | Database & ODM |
| **Google Gemini AI (`@google/genai`)** | AI analysis & rewrite engine |
| **Multer + pdf-parse** | PDF file uploads & text extraction |
| **JWT + bcrypt** | Authentication & password hashing |
| **Zod** | Request schema validation |
| **express-rate-limit** | API rate limiting |
| **diff** | Resume version diffing |

### Frontend
| Technology | Role |
|---|---|
| **React 19 + Vite** | UI framework & build tool |
| **React Router v7** | Client-side routing |
| **TanStack Query (React Query)** | Server state management & caching |
| **Framer Motion** | Animations & transitions |
| **Recharts** | Analytics charts & graphs |
| **@react-pdf/renderer** | Client-side PDF generation |
| **Tailwind CSS v4** | Utility-first styling |
| **Axios** | HTTP client |
| **Lucide React** | Icon library |
| **react-dropzone** | Drag-and-drop file uploads |

---

## 📁 Project Structure

```
AI-RESUMECHECKER/
├── backend/
│   ├── src/
│   │   ├── config/          # Database & app configuration
│   │   ├── middleware/       # Auth, error handling, rate limiting
│   │   ├── models/          # Mongoose data models
│   │   ├── routes/          # Express API routes
│   │   ├── services/        # Business logic & Gemini AI integration
│   │   └── utils/           # Helper utilities
│   ├── .env                 # Environment variables (not committed)
│   └── package.json
│
└── frontend/
    └── AiResumeChecker/
        ├── src/
        │   ├── api/         # Axios API layer
        │   ├── components/  # Reusable UI components
        │   ├── context/     # React context providers (Auth, etc.)
        │   ├── hooks/       # Custom React hooks
        │   ├── lib/         # Utility functions
        │   ├── mock/        # Mock data for development
        │   ├── pages/       # Application pages/views
        │   │   ├── Landing.jsx
        │   │   ├── Login.jsx
        │   │   ├── Register.jsx
        │   │   ├── Dashboard.jsx
        │   │   ├── Resumes.jsx
        │   │   ├── ResumeDetail.jsx
        │   │   ├── Insights.jsx
        │   │   ├── Versions.jsx
        │   │   ├── History.jsx
        │   │   ├── Export.jsx
        │   │   └── Settings.jsx
        │   ├── routes.jsx   # App router definition
        │   └── main.jsx     # App entry point
        └── package.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18+
- **npm** v9+
- **MongoDB** (local or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A **Google Gemini API key** (get one at [Google AI Studio](https://aistudio.google.com/))

---

### Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create your environment file
cp .env.example .env
# Fill in the required values in .env (see Environment Variables below)

# 4. Start the development server
npm run dev
```

The backend server will start on **`http://localhost:5000`** by default.

---

### Frontend Setup

```bash
# 1. Navigate to the frontend directory
cd frontend/AiResumeChecker

# 2. Install dependencies
npm install

# 3. Start the Vite development server
npm run dev
```

The frontend will be available at **`http://localhost:5173`** by default.

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory with the following variables:

```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_strong_jwt_secret_key
JWT_EXPIRES_IN=7d
COOKIE_NAME=resumeiq_token

# CORS
CLIENT_ORIGIN=http://localhost:5173

# AI
GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-2.5-flash
```

> ⚠️ **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## 📜 Available Scripts

### Backend (`/backend`)

| Script | Command | Description |
|---|---|---|
| Start (production) | `npm start` | Run server with Node |
| Start (development) | `npm run dev` | Run server with Nodemon (hot-reload) |
| Seed database | `npm run seed` | Populate database with seed data |

### Frontend (`/frontend/AiResumeChecker`)

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Vite dev server |
| Build | `npm run build` | Build for production |
| Preview | `npm run preview` | Preview production build |
| Lint | `npm run lint` | Run ESLint |

---

## 🌐 API Overview

All API endpoints are prefixed with `/api`. Authentication is handled via HTTP-only JWT cookies.

| Module | Base Path | Description |
|---|---|---|
| **Auth** | `/api/auth` | Register, login, logout, current user |
| **Resumes** | `/api/resumes` | Upload, list, fetch, delete resumes |
| **Analysis** | `/api/resumes/:id/analyze` | Trigger AI analysis & ATS scoring |
| **Rewrites** | `/api/resumes/:id/rewrite` | Generate AI-powered resume rewrites |
| **Versions** | `/api/resumes/:id/versions` | Fetch version history with diffs |
| **Insights** | `/api/insights` | Aggregated analytics & trends |
| **Settings** | `/api/settings` | User preferences management |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a **Pull Request**

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 👤 Author

**Somsubhra Misra**

---

<!-- ## 📄 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details. -->

---

<div align="center">
  <sub>Built with ❤️ and powered by Google Gemini AI</sub>
</div>
