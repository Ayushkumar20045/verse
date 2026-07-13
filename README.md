<div align="center">

# Verse

### Share your story. Shape the conversation.

A modern social platform built with **Next.js**, **React**, **TypeScript**, **Tailwind CSS**, and **React Context API**.

Currently under active development.

</div>

---

# Current Status

> **Version:** v0.8  
> **Development Day:** 14  
> **Build Status:** Passing  
> **Lint Status:** Passing  
> **Architecture:** Stable  
> **Current Focus:** Firebase Authentication

---

# Overview

Verse is a modern social platform inspired by applications like X (Twitter), built from scratch with a strong focus on scalable architecture, reusable components, and production-ready frontend engineering.

Instead of rushing features, every module is designed, implemented, tested, documented, and validated before moving to the next milestone.

The current version focuses on building a solid frontend foundation before integrating Firebase for authentication, database, and storage.

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

## Profile

- Dedicated Profile page
- Personal post feed
- User statistics
- Global profile synchronization

---

## Explore

- Dedicated Explore page
- Search interface
- Trending topics
- Discover feed

---

## Notifications

- Dedicated Notifications page
- Activity timeline
- Notification cards
- Reusable notification components

---

## Settings

- Editable account information
- Appearance preferences
- Notification preferences
- Privacy settings
- Save Changes workflow
- Dirty state detection
- Global user synchronization

---

## Navigation

- Shared application layout
- Next.js Route Groups
- Active sidebar navigation
- Multi-page architecture

---

## State Management

### PostsContext

- Posts CRUD
- Comments CRUD
- Likes
- Bookmarks
- Cross-page synchronization

### UserContext

- Display name
- Username
- User preferences
- Appearance settings
- Privacy settings
- Notification settings
- Global profile synchronization

---

# Architecture

Verse follows a scalable component-driven architecture using the Next.js App Router and React Context API.

## Global State

```text
App
│
├── UserContext
│   ├── Profile
│   ├── Settings
│   └── User Preferences
│
└── PostsContext
    ├── Posts
    ├── Likes
    ├── Bookmarks
    └── Comments
```

The separation between **PostsContext** and **UserContext** keeps the codebase modular, reusable, and ready for Firebase integration.

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
| Settings | ✅ Complete |
| Context API | ✅ Complete |
| PostsContext | ✅ Complete |
| UserContext | ✅ Complete |
| State Synchronization | ✅ Complete |
| Firebase Authentication | 🚧 Planned |
| Firestore Database | 🚧 Planned |
| Image Uploads | 🚧 Planned |
| Responsive Design | 🚧 Planned |
| Deployment | 🚧 Planned |

---

# Development Workflow

Every feature follows the same engineering workflow.

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

- Project Setup
- Shared Layout Architecture
- Sidebar
- Home Feed
- Posts CRUD
- Comments CRUD
- Like System
- Bookmark System
- Bookmarks
- Profile
- Explore
- Notifications
- Settings
- React Context API
- PostsContext
- UserContext
- Cross-page State Synchronization
- Save Changes Workflow

---

## Upcoming

- Firebase Authentication
- Firestore Database
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

Run ESLint

```bash
npm run lint
```

Create a production build

```bash
npm run build
```

---

# Project Philosophy

Verse is being developed as an engineering project rather than just another UI clone.

Every feature is built with an emphasis on:

- Reusable components
- Clean architecture
- Type safety
- Global state management
- Scalability
- Maintainability
- Incremental development

The goal is not simply to build a social platform, but to document the complete journey of transforming an idea into a production-ready full-stack application.

---

<div align="center">

### Engineering over shortcuts.

Every feature is planned.  
Every component has a purpose.  
Every commit moves Verse one step closer to a production-ready platform.

**Welcome to the Verse Development Journal.**

</div>