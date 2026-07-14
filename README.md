<div align="center">

# Verse

### Building a modern social platform — one engineering decision at a time.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28)

**Development Day:** 15  
**Status:** Backend Migration in Progress

</div>

---

# Why Verse?

Most portfolio projects focus on features.

Verse focuses on **engineering**.

The project is intentionally being built the same way a real product evolves:

- Start with a solid frontend architecture.
- Separate UI from business logic.
- Introduce global state.
- Build reusable components.
- Integrate a backend only after the frontend is stable.
- Replace mock data incrementally instead of rewriting everything.

Every development day is documented, committed, and tested before moving forward.

---

# Current Progress

```
Frontend Architecture        ████████████████████ 100%

Reusable Components          ████████████████████ 100%

Global State                 ████████████████████ 100%

Backend Foundation           ███████████████████░  80%

Firestore Migration          ███████░░░░░░░░░░░░  35%

Deployment                   ░░░░░░░░░░░░░░░░░░   0%
```

---

# Tech Stack

## Frontend

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React

## State Management

- React Context API
- PostsContext
- UserContext
- AuthContext

## Backend

- Firebase Authentication
- Cloud Firestore
- Firebase Storage

---

# Architecture

The application is intentionally separated into independent layers.

```
UI Components
        │
        ▼
Context Providers
        │
        ▼
Service Layer
        │
        ▼
Firebase
```

Instead of allowing React components to communicate directly with Firebase, every database operation passes through a dedicated service layer.

```
components
        │
        ▼
PostsContext
        │
        ▼
lib/services/posts.ts
        │
        ▼
Firestore
```

The result is a codebase that is easier to maintain, test, and extend.

---

# Context Architecture

```
App
│
├── AuthProvider
│
├── UserProvider
│
└── PostsProvider
```

### AuthProvider

Responsible for

- Authentication
- Session Management
- Current User

---

### UserProvider

Responsible for

- Profile
- Settings
- User Preferences

---

### PostsProvider

Responsible for

- Posts
- Likes
- Bookmarks
- Comments

Each provider owns exactly one responsibility.

---

# Features Completed

## Feed

- Create Posts
- Edit Posts
- Delete Posts
- Character Counter
- Keyboard Shortcuts

---

## Social Features

- Likes
- Bookmarks
- Comments CRUD
- Live Synchronization

---

## Pages

- Home
- Profile
- Explore
- Notifications
- Bookmarks
- Settings

---

## User Experience

- Active Navigation
- Confirmation Dialogs
- Global Synchronization
- Reusable Components
- Shared Layout
- Route Groups

---

# Backend Progress

Completed

- Firebase Project
- Firebase SDK
- Authentication Setup
- Google Provider
- Firestore Setup
- Storage Setup
- AuthContext
- Service Layer

Currently Working On

- Firestore CRUD
- Replacing Mock Data
- Real User Documents

---

# Folder Philosophy

```
components/
```

Reusable UI.

```
context/
```

Application state.

```
lib/services/
```

Backend communication.

```
types/
```

Shared TypeScript models.

Every folder has one responsibility.

---

# Development Workflow

Every feature follows the same workflow.

```
Idea

↓

Architecture

↓

Implementation

↓

Testing

↓

ESLint

↓

Production Build

↓

Documentation

↓

Git Commit
```

No feature is considered complete until it passes both lint and production build.

---

# Upcoming

- Firestore Migration
- Real Authentication
- Image Uploads
- Responsive Design
- Deployment
- Production Release

---

# Lessons Learned

This project has already covered topics including:

- React Component Architecture
- Context API
- State Synchronization
- CRUD Operations
- TypeScript Patterns
- Reusable Components
- Firebase Integration
- Backend Service Layer
- Incremental Migration Strategy

---

# Running Locally

```bash
git clone https://github.com/Ayushkumar20045/verse.git

cd verse

npm install

npm run dev
```

Run ESLint

```bash
npm run lint
```

Create Production Build

```bash
npm run build
```

---

# Development Journal

Verse isn't being developed behind closed doors.

Every development day is documented through:

- Dev Logs
- Git Commits
- Architecture Decisions
- Incremental Refactoring

The repository represents the complete evolution of the application—from the very first component to a production-ready full-stack platform.

---

<div align="center">

## "Good software isn't built in one commit.

It's built through hundreds of small engineering decisions."

**— Verse Development Journal**

</div>