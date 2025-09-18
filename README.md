# Multi-Tenant SaaS Notes App

[![Vercel Deployment](https://img.shields.io/badge/deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Tech Stack: Next.js](https://img.shields.io/badge/Frontend-Next.js-lightgrey?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Tech Stack: Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Database: PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue?style=for-the-badge&logo=postgresql)](https://www.postgresql.org/)

A robust, multi-tenant SaaS Notes application built with Next.js and Node.js. This project serves as a powerful boilerplate for building applications that require data isolation between different users or organizations, providing each tenant with a completely separate and secure experience.



---

## ✨ Features

-   **Multi-Tenancy:** Secure data isolation ensures that each tenant (user or organization) can only access their own notes.
-   **Modern Frontend:** A responsive and interactive user interface built with **Next.js**.
-   **Robust Backend API:** A scalable REST API built with **Node.js** and **Express.js** to handle all business logic.
-   **Database Integration:** Uses **Prisma ORM** for elegant and type-safe database interactions with PostgreSQL.
-   **JWT Authentication:** Secure user authentication and session management using JSON Web Tokens.
-   **CRUD Functionality:** Full create, read, update, and delete operations for notes.
-   **Deployment-Ready:** Pre-configured for seamless deployment to **Vercel**.

---

## 🛠️ Tech Stack

| Component      | Technology / Library                                       |
| -------------- | ---------------------------------------------------------- |
| **Frontend** | Next.js, React, Tailwind CSS                               |
| **Backend** | Node.js, Express.js                                        |
| **Database** | PostgreSQL, Prisma (ORM)                                   |
| **Deployment** | Vercel                                                     |
| **Auth** | JSON Web Tokens (JWT), bcrypt                              |
| **Tooling** | ESLint, Prettier, `concurrently` (for local development)   |

---

## 🏛️ Architecture

This project is a **monorepo** containing two primary packages:

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or higher)
-   [npm](https://www.npmjs.com/) (v9 or higher) or yarn
-   A running PostgreSQL database instance.

### 2. Setup

```bash
# Clone the repository
git clone [https://github.com/Rashi-Dwivedi1812/MultiTenant_Saas_Notes.git](https://github.com/Rashi-Dwivedi1812/MultiTenant_Saas_Notes.git)
cd MultiTenant_Saas_Notes

# Install all dependencies for both 'api' and 'web' workspaces from the root
npm install

1.  **`api/`** (Backend): An Express.js server responsible for handling business logic, database operations, and authentication.
2.  **`web/`** (Frontend): A Next.js application that provides the user interface and communicates with the backend via REST API calls.

# .env.example

# Database Configuration
# Get this from your PostgreSQL provider (e.g., Neon, Supabase, or local instance)
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=require"

# JWT Authentication
JWT_SECRET="YOUR_SUPER_SECRET_KEY_FOR_JWT"

# Server Configuration
PORT=3001

# From the root directory of the project
npx prisma migrate dev --schema=./api/prisma/schema.prisma

# From the root directory
npm run dev
```
