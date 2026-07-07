<div align="center">

# Verse

### Share your story. Shape the conversation.

A modern social platform built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

Currently under active development.

</div>

---

# Overview

Verse is a modern social platform focused on building a clean, scalable, and maintainable user experience.

The project is being developed incrementally by following modern React engineering practices. Every feature is carefully planned, implemented, tested, and documented before moving to the next milestone.

The current focus is completing a production-quality frontend before integrating Firebase for authentication and real-time data.

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React Framework |
| React | User Interface |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| clsx | Conditional Styling |
| Firebase | Backend *(Planned)* |

---

# Features Completed

## Project Foundation

- Next.js project setup
- TypeScript configuration
- Tailwind CSS integration
- ESLint configuration
- Professional folder structure

## Layout

- Responsive three-column desktop layout
- Sidebar
- Feed
- Right Sidebar

## Sidebar

- Dynamic navigation rendering
- Active navigation indicator
- Lucide React icons
- Centralized navigation configuration
- Reusable Button component
- Create Post action

## Feed

- Functional Post Composer
- Dynamic post creation
- Inline post editing
- Post deletion
- Instant feed updates
- New posts appear at the top
- Character counter
- 280-character validation
- Keyboard shortcut (Ctrl + Enter / ⌘ + Enter)
- Reusable Post Card component
- Shared post data

## Post Interactions

- Like / Unlike functionality
- Dynamic like counter
- Three-dot action menu
- Custom confirmation modal
- Full CRUD operations
- Immutable React state updates

## Right Sidebar

- Ripples (Trending Topics)
- Constellations (Suggested Users)

## UI Components

- Reusable Button
- Reusable Avatar
- Reusable ConfirmModal

## Code Quality

- Feature-based architecture
- Component reusability
- Centralized configuration
- Type-safe data models
- Scalable project organization

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
| Layout | Complete |
| Sidebar | Complete |
| Feed | Complete |
| Right Sidebar | Complete |
| UI Components | Complete |
| CRUD Operations | Complete |
| Authentication | Planned |
| Firebase Integration | Planned |

---

# Engineering Principles

Verse follows a consistent engineering approach throughout development.

- Reusable Components
- Clean Architecture
- Feature-Based Folder Structure
- Type Safety
- Semantic HTML
- Scalable Code Organization
- Incremental Development
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
Linting
    ↓
Build Verification
    ↓
Git Commit
    ↓
Git Push
```

---

# Roadmap

## Completed

- Project initialization
- Responsive desktop layout
- Dynamic sidebar
- Navigation icons
- Reusable Button
- Reusable Avatar
- Reusable ConfirmModal
- Feed architecture
- Functional Post Composer
- Dynamic feed updates
- Character counter
- Character limit validation
- Keyboard shortcut (Ctrl + Enter / ⌘ + Enter)
- Reusable Post Card
- Like / Unlike functionality
- Three-dot action menu
- Inline post editing
- Post deletion
- Full CRUD implementation
- Interactive feed using React state
- Ripples section
- Constellations section
- UI refinement

## Upcoming

- Bookmark posts
- Comment system
- Share functionality
- User profile page
- Search
- Notifications
- Explore page
- Settings page
- Responsive mobile layout
- Authentication
- Firebase integration
- Real-time database
- Image uploads

---

# Running Locally

Clone the repository

```bash
git clone https://github.com/Ayushkumar20045/verse.git
```

Navigate to the project

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

Open your browser and visit

```text
http://localhost:3000
```

---

# Why Verse?

Verse is more than just a frontend project.

It is a practical journey of learning software engineering by building a modern social platform using React, TypeScript, and Next.js.

The project emphasizes writing clean, reusable, and scalable code while implementing real-world frontend patterns before introducing backend services.

---

# Development Philosophy

Rather than rushing to build features, Verse focuses on building them correctly.

Every new feature is designed to be:

- Reusable
- Maintainable
- Scalable
- Easy to understand
- Ready for future expansion

The goal is to develop a codebase that reflects how modern frontend applications are structured in professional environments.

---

<div align="center">

### Building Verse one commit at a time.

**Current Progress: Frontend CRUD Complete • Ready for Social Features**

</div>