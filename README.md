<div align="center">

# Verse

### Share your story. Shape the conversation.

A modern social platform built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **React Context API**.

Currently under active development.

</div>

---

# Overview

Verse is a modern social platform inspired by applications like X (Twitter), focused on clean design, reusable architecture, and scalable frontend development.

The project is being built from scratch with production-ready development practices, emphasizing reusable components, type safety, and maintainable code. Every feature is implemented incrementally, tested thoroughly, and documented before moving to the next milestone.

Firebase integration will be introduced after the frontend architecture is fully completed.

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React Framework |
| React | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| React Context API | Global State Management |
| Firebase | Planned Backend |

---

# Features

## Posts

- Create posts
- Edit posts
- Delete posts
- Like / Unlike posts
- Bookmark posts
- Character counter
- Character limit validation
- Keyboard shortcut (Ctrl + Enter / ⌘ + Enter)

---

## Comments

- Create comments
- Edit comments
- Delete comments
- Expand / Collapse comments
- Live comment counter

---

## Bookmarks

- Dedicated Bookmarks page
- Real-time bookmark synchronization
- Empty state for bookmarked posts
- Shared post rendering through reusable components

---

## User Experience

- Three-dot action menu
- Confirmation modal
- Responsive desktop layout
- Active sidebar navigation
- Instant UI updates

---
## Navigation

- Shared application layout using Next.js Route Groups
- Active sidebar navigation highlighting
- Multi-page application architecture

---

## State Management

- React Context API
- Single source of truth for posts
- Synchronized likes across pages
- Synchronized bookmarks across pages
- Synchronized comments across pages

## Profile

- Dedicated user profile page
- User statistics
- Personal post feed
- Shared global state

---

## Explore

- Dedicated Explore page
- Search interface
- Trending topics
- Discover feed

---

## Notifications

- Dedicated Notifications page
- Notification cards
- Activity timeline
- Reusable notification components

# Architecture

Verse follows a reusable, component-driven architecture designed for scalability.

## Application Structure

```text
app
│
├── layout.tsx
│
└── (main)
    ├── layout.tsx
    ├── page.tsx
    ├── bookmarks
    ├── profile
    ├── explore
    └── notifications
```

The shared `(main)` layout ensures every application page automatically receives the Sidebar, main content area, and Right Sidebar without duplicating layout code.

---

## Global State

The application uses **React Context API** as the single source of truth.

Currently managed globally:

- Posts
- Likes
- Bookmarks
- Comments
- CRUD Operations

Every page consumes the same state, ensuring changes made anywhere in the application are reflected everywhere immediately.
---

# Current Progress

| Module | Status |
|---------|--------|
| Project Setup | ✅ Complete |
| Shared Layout Architecture | ✅ Complete |
| Sidebar | ✅ Complete |
| Feed | ✅ Complete |
| Posts CRUD | ✅ Complete |
| Comments CRUD | ✅ Complete |
| Likes | ✅ Complete |
| Bookmark System | ✅ Complete |
| Bookmarks Page | ✅ Complete |
| Profile Page | ✅ Complete |
| Explore Page | ✅ Complete |
| Notifications Page | ✅ Complete |
| Context API | ✅ Complete |
| State Synchronization | ✅ Complete |
| Settings | 🚧 Planned |
| Firebase Authentication | 🚧 Planned |
| Firestore Database | 🚧 Planned |
| Image Uploads | 🚧 Planned |
| Responsive Design | 🚧 Planned |
| Deployment | 🚧 Planned |

---

# Folder Structure

```text
verse
│
# Current Application Structure

```text
app
│
├── layout.tsx
│
└── (main)
    ├── layout.tsx
    ├── page.tsx
    ├── bookmarks
    ├── profile
    ├── explore
    └── notifications

components
│
├── feed
├── explore
├── notifications
├── layout
└── ui

context
│
└── PostsContext.tsx
```

Verse follows a reusable component-based architecture where every page consumes the same global application state through React Context, ensuring synchronization across the entire application.

---

# Development Workflow

Every feature follows the same workflow:

```text
Planning
    ↓
Architecture
    ↓
Implementation
    ↓
Testing
    ↓
npm run lint
    ↓
npm run build
    ↓
Documentation
    ↓
Git Commit
```

---

# Roadmap

## Completed

- Shared Layout Architecture
- Home Feed
- Profile
- Explore
- Notifications
- Bookmarks
- Posts CRUD
- Comments CRUD
- Like System
- Bookmark System
- React Context API
- Cross-Page State Synchronization

---

## Upcoming

- Settings
- Firebase Authentication
- Firestore Integration
- Image Uploads
- Responsive Design
- Deployment

---

# Running Locally

Clone the repository

```bash
git clone https://github.com/Ayushkumar20045/verse.git
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Run lint

```bash
npm run lint
```

Build for production

```bash
npm run build
```

---

---

## Building in Public

---

## Engineering Notes

Verse was never intended to be just another frontend clone.

This repository is not just a record of completed features—it is a record of engineering decisions, refactoring, debugging, and continuous improvement.

---

<div align="center">

### Every commit tells a story.

Not of writing more code,

but of writing **better** code.

**Welcome to the Verse Development Journal.**

</div>