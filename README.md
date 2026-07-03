<div align="center">

# Verse

### Share your story. Shape the conversation.

A modern social platform built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

Currently under active development.

</div>

---

# Overview

Verse is a modern social platform designed with simplicity, scalability, and clean user experience in mind.

Rather than cloning an existing platform, Verse is being developed as an independent product while following modern frontend engineering practices. The project emphasizes reusable components, maintainable architecture, and incremental feature development.

Every feature is planned, implemented, tested, and documented before moving to the next milestone.

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React Framework |
| React | User Interface |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| clsx | Utility for conditional class names |
| Firebase | Backend *(Planned)* |
| Vercel | Deployment *(Planned)* |

---

# Features Completed

### Project Foundation

- Next.js project setup
- TypeScript configuration
- Tailwind CSS integration
- ESLint configuration
- Professional folder structure

### Layout

- Three-column responsive layout
- Sidebar
- Feed
- Right Sidebar

### Sidebar

- Dynamic navigation
- Reusable Button component
- Create Post button

### Feed

- Post Composer
- Data-driven post rendering
- Reusable Post Card component
- Shared data source using `lib/posts.ts`

### Code Quality

- Feature-based architecture
- Shared UI components
- Reusable data configuration
- clsx integration
- Clean component composition

---

# Folder Structure

```text
verse
│
├── app
├── components
│   ├── feed
│   ├── layout
│   └── ui
│
├── hooks
├── lib
├── public
├── types
├── utils
│
├── README.md
├── dev-log.md
└── package.json
```

---

# Current Progress

| Module | Status |
|---------|--------|
| Project Setup | Complete |
| Sidebar | Complete |
| Feed Layout | Complete |
| Post Composer | Complete |
| Post Card | Complete |
| Right Sidebar | In Progress |
| Authentication | Planned |
| Firebase | Planned |
| Deployment | Planned |

---

# Engineering Principles

Verse is being built around a few simple principles.

- Component Reusability
- Clean Architecture
- Feature-based Folder Structure
- Type Safety
- Semantic HTML
- Incremental Development
- Maintainable Code
- Consistent Code Style

---

# Development Workflow

Every feature follows the same workflow.

```text
Planning
    ↓
Architecture
    ↓
Implementation
    ↓
Testing
    ↓
Refinement
    ↓
Git Commit
```

---

# Roadmap

## Completed

- Project initialization
- Responsive layout
- Dynamic sidebar
- Reusable Button component
- Feed architecture
- Post Composer
- Post Card
- Shared data layer

## Upcoming

- User avatars
- Right sidebar widgets
- Icons
- Theme improvements
- Authentication
- User profiles
- Post interactions
- Firebase integration
- Deployment

---

# Running Locally

Clone the repository

```bash
git clone https://github.com/Ayushkumar20045/verse.git
```

Navigate into the project

```bash
cd verse
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```text
http://localhost:3000
```

---

# Why Verse?

Verse is more than a frontend project.

It is an opportunity to practice software engineering by building a scalable application with production-inspired architecture, reusable components, and clean development practices.

The focus is not only on building features but also on building them correctly.

---

<div align="center">

### Building Verse one commit at a time.

</div>