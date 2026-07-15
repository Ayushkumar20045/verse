<div align="center">

# Verse

### Every feature is built incrementally, documented daily, and validated with ESLint and production builds before moving forward.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8)
![Firebase](https://img.shields.io/badge/Firebase-Backend-FFCA28)

**Development Day:** 16  
**Status:** Firestore Integration in Progress

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

Backend Foundation           ████████████████████ 100%

Firestore Migration          ███████████░░░░░░░░  55%

Deployment                   █░░░░░░░░░░░░░░░░░   5%
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

# Backend Evolution

Verse intentionally evolved through multiple stages instead of introducing a backend from day one.

```text
Stage 1
Mock Data
        │
        ▼
React Context

↓

Stage 2
Firebase Setup
        │
        ▼
Service Layer

↓

Stage 3 (Current)
Firestore
        │
        ▼
Custom Hooks
        │
        ▼
React

↓

Stage 4
Realtime Synchronization
```

This incremental migration keeps the application functional throughout development while making each backend change easy to validate and maintain.

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
- Cloud Firestore
- Firebase Storage
- AuthContext
- Backend Service Layer
- Firestore Models
- Custom Firestore Hooks
- First Firestore CRUD (Create & Read)

Currently Working On

- Realtime Firestore Listeners
- PostsContext Migration
- Removing Mock Data
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

## Upcoming

- Realtime Firestore Sync
- PostsContext Migration
- Remove Mock Data
- Google Authentication Flow
- Image Uploads
- Responsive Design
- Deployment

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