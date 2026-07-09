<div align="center">

# Verse

### Share your story. Shape the conversation.

A modern social platform built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

Currently under active development.

</div>

---

# Overview

Verse is a modern social platform focused on building a clean, scalable, and maintainable user experience.

The project follows modern React development practices with reusable components, type safety, and scalable architecture. Every feature is implemented incrementally, tested thoroughly, and documented before moving to the next milestone.

The frontend is currently the primary focus. Backend services using Firebase will be integrated after the frontend architecture is complete.

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js | React Framework |
| React | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS | Styling |
| Lucide React | Icons |
| Context API | Global State Management |
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
- Expand / Collapse comment section
- Live comment counter

---

## User Experience

- Three-dot action menu
- Custom confirmation modal
- Responsive desktop feed
- Instant UI updates using React state

---

## Architecture

- Context API foundation
- Reusable components
- Feature-based folder structure
- Type-safe models
- Immutable state updates
- Component-driven architecture

---

# UI Components

## Feed

- PostComposer
- PostCard
- CommentComposer
- CommentCard
- CommentList

## UI

- Avatar
- Button
- ConfirmModal

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
| Bookmark Toggle | ✅ Complete |
| Context API Foundation | ✅ Complete |
| Bookmarks Page | 🚧 In Progress |
| Profile | ⏳ Planned |
| Search | ⏳ Planned |
| Notifications | ⏳ Planned |
| Firebase Integration | ⏳ Planned |

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
├── context
│   └── PostsContext.tsx
│
├── hooks
├── lib
├── public
├── types
├── utils
└── README.md
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
Git Commit
    ↓
Git Push
```

---

# Roadmap

## Completed

- Project setup
- Three-column layout
- Sidebar
- Feed
- Dynamic post creation
- Post CRUD
- Comment CRUD
- Like system
- Bookmark toggle
- Character counter
- Keyboard shortcuts
- Confirmation modal
- Context API foundation

---

## Upcoming

- Bookmarks page
- User profile
- Search
- Notifications
- Image posts
- Responsive mobile layout
- Firebase Authentication
- Firestore
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

Verse is being built as a portfolio-quality software engineering project.

The focus is not only on delivering features but also on writing clean, reusable, and maintainable code that can scale as the application grows.

Each development session ends with:

- Passing lint checks
- Successful production build
- Updated documentation
- Meaningful Git commit

---

<div align="center">

### Verse v0.5

**Posts CRUD • Comments CRUD • Bookmark System • Context API Foundation**

Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS.

</div>