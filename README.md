# Multi-Tenant Blog Platform

A modern multi-tenant blog platform built with Next.js, featuring organization-based content isolation, PostgreSQL database, and Clerk authentication.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Deployment](#deployment)

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install with: `npm install -g pnpm`
- **Docker** (for PostgreSQL) - [Download here](https://www.docker.com/)
- **Git** - [Download here](https://git-scm.com/)

---

## 🚀 Project Setup

Follow these steps to set up the project on your local machine:

### Step 1: Clone the Repository

```bash
git clone <your-repository-url>
cd multi-tenant-blog
```

### Step 2: Install Dependencies

```bash
pnpm install
```

This will install all the required dependencies including:
- Next.js 16.1.4
- Drizzle ORM
- Clerk Authentication
- PostgreSQL client
- Tailwind CSS
- And other dependencies

---

## 🔐 Environment Configuration

### Step 3: Create Environment File

Create a `.env` file in the root directory:

```bash
touch .env
```

### Step 4: Add Environment Variables

Add the following environment variables to your `.env` file:

```env
# Database Configuration
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs (Optional - for custom domains)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

> **Note:** Replace `your_clerk_publishable_key` and `your_clerk_secret_key` with your actual Clerk credentials.

---

## 🗄️ Database Setup

### Step 5: Start PostgreSQL with Docker

The project includes a `docker-compose.yml` file for easy PostgreSQL setup.

```bash
docker compose up -d
```

This will start a PostgreSQL container with the following configuration:
- **Host:** localhost
- **Port:** 5433
- **Database:** postgres
- **Username:** postgres
- **Password:** postgres

### Step 6: Verify Database Connection

Check if the database is running:

```bash
docker ps
```

You should see a container running the `postgres` image.

---

## 🔨 Drizzle ORM Setup

### Step 7: Push Database Schema

Push your database schema to PostgreSQL using Drizzle Kit:

```bash
pnpm db:push
```

This command will:
- Read the schema from `db/schema.ts`
- Create the `blogs` table with the following columns:
  - `id` (UUID, Primary Key)
  - `title` (VARCHAR)
  - `body` (TEXT)
  - `org_id` (TEXT)
  - `created_at` (TIMESTAMP)

### Step 8: (Optional) Open Drizzle Studio

To visually inspect and manage your database:

```bash
pnpm db:studio
```

This will open Drizzle Studio in your browser at `https://local.drizzle.studio`

---

## 🔑 Clerk Authentication Setup

### Step 9: Create a Clerk Account

1. Go to [Clerk.com](https://clerk.com/)
2. Sign up for a free account
3. Create a new application

### Step 10: Get Your Clerk Keys

1. In your Clerk dashboard, navigate to **API Keys**
2. Copy your **Publishable Key** and **Secret Key**
3. Add them to your `.env` file (as shown in Step 4)

### Step 11: Configure Clerk Settings

In your Clerk dashboard:
1. Go to **Settings** → **Organizations**
2. Enable **Organizations** feature
3. Configure organization settings as needed

---

## ▶️ Running the Application

### Step 12: Start the Development Server

```bash
pnpm dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

### Step 13: Verify Everything Works

1. Open your browser and navigate to `http://localhost:3000`
2. You should see the application running
3. Try signing in/up using Clerk authentication
4. Test creating a blog post

---

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | `pnpm dev` | Start the Next.js development server |
| **Build** | `pnpm build` | Build the application for production |
| **Start** | `pnpm start` | Start the production server |
| **Lint** | `pnpm lint` | Run ESLint to check code quality |
| **DB Push** | `pnpm db:push` | Push database schema changes |
| **DB Studio** | `pnpm db:studio` | Open Drizzle Studio for database management |
| **DB Migrate** | `pnpm db:migrate` | Run database migrations |

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 16.1.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.3](https://react.dev/)** - UI library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Icon library

### Backend & Database
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[pg](https://node-postgres.com/)** - PostgreSQL client for Node.js

### Authentication
- **[Clerk](https://clerk.com/)** - Complete user management and authentication

### Development Tools
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[ESLint](https://eslint.org/)** - Code linting
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** - Database migration tool
- **[Docker](https://www.docker.com/)** - Containerization for PostgreSQL

---

## 📁 Project Structure

```
multi-tenant-blog/
├── app/                      # Next.js App Router
│   ├── (root)/              # Root layout and pages
│   └── (subdomain)/         # Subdomain-based routing
│       └── s/[subdomain]/   # Dynamic subdomain pages
├── components/              # Reusable React components
│   └── ui/                  # UI components (buttons, etc.)
├── db/                      # Database configuration
│   ├── schema.ts           # Drizzle schema definitions
│   └── index.ts            # Database connection
├── lib/                     # Utility functions
├── public/                  # Static assets
├── .env                     # Environment variables (not in git)
├── docker-compose.yml       # PostgreSQL Docker setup
├── drizzle.config.ts       # Drizzle ORM configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Database for Production

For production, consider using:
- **[Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)**
- **[Neon](https://neon.tech/)**
- **[Supabase](https://supabase.com/)**
- **[Railway](https://railway.app/)**

Update your `DATABASE_URL` environment variable accordingly.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Clerk Documentation](https://clerk.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🆘 Troubleshooting

### Database Connection Issues
- Ensure Docker is running: `docker ps`
- Check if PostgreSQL container is running on port 5433
- Verify `DATABASE_URL` in `.env` file

### Clerk Authentication Issues
- Verify your Clerk API keys are correct
- Check if organizations are enabled in Clerk dashboard
- Ensure environment variables are properly set

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
- Check Node.js version: `node --version` (should be v18+)

---

**Happy Coding! 🎉**
