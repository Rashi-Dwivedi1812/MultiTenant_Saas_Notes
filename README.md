# MultiTenant_Saas_Notes

A multi-tenant SaaS Notes application. This project demonstrates how to build a note-taking application that supports multiple tenants, separating their data and providing an isolated experience.

---

## Features

- Multi-tenant support (each tenant has its own set of notes)  
- REST API backend  
- Web frontend for users to login, create, view, edit, delete notes  
- Tenant isolation: data is scoped per tenant  
- Authentication & user management (assuming implemented)  
- Deployment ready (Vercel config included)  

---

## Architecture

This project is divided primarily into two components:

1. **API** (backend) — handles authentication, note CRUD operations, tenant management  
2. **Web** (frontend) — UI for users to interact with the notes application  

They communicate via REST endpoints.  

---

## Tech Stack

| Component       | Technology / Library            |
|------------------|----------------------------------|
| Backend          | Node.js  |
| Frontend         | Next.js  |
| Database         | PostgreSQL, MySQL        |
| Deployment       | Vercel  |
| Others           | Environment variables etc.         |

---

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js installed (version X or higher)  
- npm or yarn package manager  
- Database setup (e.g. MongoDB / PostgreSQL)  
- Environment variables (see *Configuration* section)  

### Setup

```bash
# clone the repository
git clone https://github.com/Rashi-Dwivedi1812/MultiTenant_Saas_Notes.git
cd MultiTenant_Saas_Notes

# install dependencies for backend
cd api
npm install

# install dependencies for frontend
cd ../web
npm install

# run backend
cd api
npm run dev   # or the script for starting the server

# run frontend
cd ../web
npm run dev   # or as per your setup (Next.js / React etc.)

```

## Folder Structure
MultiTenant_Saas_Notes/
├── api/               # backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
├── web/               # frontend code
│   ├── pages/ or components/
│   ├── public/
│   ├── styles/
│   └── utils/
├── .gitignore
├── package.json
├── vercel.json         # for deployment settings
└── README.md


## Configuration
| Name                           | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| `DATABASE_URL`                 | Connection string to your database                    |
| `JWT_SECRET`                   | Secret key for signing JSON Web Tokens                |
| `PORT`                         | Port for backend server                               |
| `NEXT_PUBLIC_API_URL`          | URL where backend API is hosted, for frontend to call |
| `VERCEL_URL` (if using Vercel) | Deployment URL                                        |


## Deployment
The project includes a vercel.json, which helps with deploying via Vercel.

Steps:
1. Push your code to a Git provider (GitHub).
2. Connect the project with Vercel.
3. Set up environment variables in Vercel’s dashboard.
4. Deploy — Vercel will build frontend & backend (if configured) automatically.
