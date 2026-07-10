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

# Architecture

## Reusable Components

### Feed

- Feed
- FeedList
- PostComposer
- PostCard
- PostHeader
- PostBody
- PostActions
- CommentSection
- CommentComposer
- CommentCard
- CommentList

### Layout

- Sidebar
- RightSidebar

### UI

- Avatar
- Button
- ConfirmModal

---

# Global State

Verse uses **React Context API** to provide a single source of truth for post-related data.

Current Context Features:

- Create Posts
- Edit Posts
- Delete Posts
- Like Posts
- Bookmark Posts
- Add Comments
- Edit Comments
- Delete Comments

---

# Current Progress

| Module | Status |
|---------|--------|
| Project Setup | ✅ Complete |
| Layout | ✅ Complete |
| Sidebar | ✅ Complete |
| Feed | ✅ Complete |
| Posts CRUD | ✅ Complete |
| Comments CRUD | ✅ Complete |
| Bookmark System | ✅ Complete |
| Bookmarks Page | ✅ Complete |
| Context API | ✅ Complete |
| Component Refactoring | ✅ Complete |
| Profile | 🚧 Planned |
| Explore | 🚧 Planned |
| Notifications | 🚧 Planned |
| Responsive Design | 🚧 Planned |
| Firebase Integration | 🚧 Planned |

---

# Folder Structure

```text
verse
│
├── app
│
├── components
│   ├── feed
│   │   ├── Feed.tsx
│   │   ├── FeedList.tsx
│   │   ├── PostComposer.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostHeader.tsx
│   │   ├── PostBody.tsx
│   │   ├── PostActions.tsx
│   │   ├── CommentSection.tsx
│   │   ├── CommentComposer.tsx
│   │   ├── CommentCard.tsx
│   │   └── CommentList.tsx
│   │
│   ├── layout
│   └── ui
│
├── context
├── hooks
├── lib
├── public
├── types
└── utils
```

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

- Project setup
- Three-column layout
- Sidebar
- Feed
- Dynamic post creation
- Posts CRUD
- Comments CRUD
- Like system
- Bookmark system
- Bookmarks page
- Character counter
- Keyboard shortcuts
- Confirmation modal
- Context API
- Component refactoring

---

## Upcoming

- Shared application layout
- Profile page
- Explore page
- Notifications page
- Responsive design
- Firebase Authentication
- Firestore Database
- Image uploads
- Real-time updates
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

# Development Philosophy

Verse is being developed as a portfolio-quality software engineering project.

The focus is not only on implementing features but also on writing clean, reusable, scalable, and maintainable code following modern React and Next.js development practices.

Every development session concludes with:

- Passing lint checks
- Successful production build
- Updated documentation
- Meaningful Git commits

---

<div align="center">

## Verse v0.6

**Posts CRUD • Comments CRUD • Bookmark System • Bookmarks Page • Context API • Reusable Component Architecture**

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS and lots of patience

</div>