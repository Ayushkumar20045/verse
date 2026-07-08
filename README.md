<div align="center">

# Verse

### Share your story. Shape the conversation.

A modern social platform built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

Currently under active development.

</div>

---

# Overview

Verse is a modern social platform focused on delivering a clean, scalable, and maintainable user experience.

The project is being built incrementally using modern React engineering practices. Every feature is carefully planned, implemented, tested, and documented before moving to the next milestone.

The current focus is building a production-quality frontend before integrating Firebase for authentication, cloud storage, and real-time data.

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

---

## Layout

- Responsive three-column desktop layout
- Sidebar
- Feed
- Right Sidebar

---

## Sidebar

- Dynamic navigation rendering
- Active navigation indicator
- Lucide React icons
- Centralized navigation configuration
- Reusable Button component
- Create Post action

---

## Feed

### Posts

- Functional Post Composer
- Dynamic post creation
- Inline post editing
- Post deletion
- Instant feed updates
- New posts appear at the top
- Character counter
- 280-character validation
- Keyboard shortcut (Ctrl + Enter / ⌘ + Enter)

### Comments

- Expandable / Collapsible comments
- Dynamic comment creation
- Inline comment editing
- Comment deletion
- Live comment counter
- Nested comment rendering

### Post Interactions

- Like / Unlike functionality
- Dynamic like counter
- Three-dot action menu
- Custom confirmation modal
- Complete CRUD operations for Posts
- Complete CRUD operations for Comments
- Immutable React state updates

---

## Right Sidebar

- Ripples (Trending Topics)
- Constellations (Suggested Users)

---

## UI Components

- Reusable Button
- Reusable Avatar
- Reusable ConfirmModal
- Reusable PostComposer
- Reusable PostCard
- Reusable CommentComposer
- Reusable CommentCard
- Reusable CommentList

---

## Code Quality

- Feature-based architecture
- Component reusability
- Centralized configuration
- Type-safe data models
- Clean folder organization
- Scalable React architecture

---

# Folder Structure

```text
verse
│
├── app
├── components
│   ├── feed
│   │   ├── PostComposer.tsx
│   │   ├── PostCard.tsx
│   │   ├── CommentComposer.tsx
│   │   ├── CommentCard.tsx
│   │   └── CommentList.tsx
│   │
│   ├── layout
│   └── ui
│       ├── Avatar.tsx
│       ├── Button.tsx
│       └── ConfirmModal.tsx
│
├── hooks
├── lib
├── public
├── types
│   ├── post.ts
│   └── comment.ts
│
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
| Comments | Complete |
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
- Incremental Development
- Scalable Code Organization
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
- Complete Post CRUD
- Expandable comment system
- Reusable CommentComposer
- Reusable CommentCard
- Reusable CommentList
- Inline comment editing
- Comment deletion
- Complete Comment CRUD
- Interactive feed using React state

---

## Upcoming

- Bookmark posts
- User profile page
- Search
- Notifications
- Share functionality
- Image uploads
- Responsive mobile layout
- Authentication
- Firebase integration
- Firestore database
- Real-time updates
- Infinite scrolling
- Dark / Light theme

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

Run linting

```bash
npm run lint
```

Verify production build

```bash
npm run build
```

Open your browser and visit

```text
http://localhost:3000
```

---

# Why Verse?

Verse is more than a frontend project.

It is a hands-on software engineering project focused on building a modern social platform using React, Next.js, and TypeScript while following professional frontend development practices.

The project emphasizes reusable components, scalable architecture, immutable state management, and clean code before integrating backend services.

---

# Development Philosophy

Rather than rushing to build features, Verse focuses on building them correctly.

Every feature is designed to be:

- Reusable
- Maintainable
- Scalable
- Easy to understand
- Ready for future backend integration

The objective is to develop a codebase that resembles how modern frontend applications are built in professional software teams.

---

<div align="center">

### Building Verse one commit at a time.

**Current Progress: Complete Frontend CRUD • Ready for Advanced Social Features & Firebase**

</div>