# Verse

Verse is a modern social platform that I'm building to learn how production-grade web applications are structured and developed.

Instead of treating this as another tutorial project, the goal is to understand how a real application grows over time—from designing reusable components to integrating backend services, managing application state, and maintaining clean architecture.

Every feature in this repository is built incrementally, documented, tested, and committed before moving to the next milestone.

---

## Why Verse?

Most portfolio projects focus only on the final result.

Verse is different.

This repository documents the complete development journey, including architectural decisions, refactoring, feature implementation, and lessons learned along the way.

The objective isn't simply to build a social media application—it's to learn how to build software that remains maintainable as it scales.

---

## Project Goals

- Build a modern full-stack web application from scratch.
- Follow clean and maintainable architecture.
- Learn Firebase services in depth.
- Improve React and Next.js development practices.
- Write reusable, scalable components.
- Maintain consistent Git history throughout development.

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Firebase
- Cloud Firestore
- Firebase Authentication

### Development Tools

- ESLint
- Git
- GitHub
- npm

---

## Project Structure

```
app/
├── (main)
├── bookmarks
├── explore
├── notifications
├── profile
├── settings

components/
├── common
├── feed
├── layout
├── settings

contexts/

hooks/

lib/

services/

types/

public/
```

---

## Development Workflow

Every feature follows the same workflow before being committed.

```
Plan
    ↓
Implement
    ↓
Lint
    ↓
Production Build
    ↓
Manual Testing
    ↓
Commit
```

This keeps the repository stable and prevents unfinished code from entering the main branch.


# Current Progress

Completed

- Responsive application layout
- Navigation system
- Feed UI
- Profile page
- Explore page
- Notifications
- Settings
- Bookmark foundation
- Comments
- Firebase integration
- Firestore services
- Type-safe architecture

Currently Working On

- PostsContext migration
- Complete Firestore integration

Upcoming

- Authentication
- Likes
- Bookmarks
- User Profiles
- Search
- Deployment

---

# What I've Learned

Building Verse has helped me understand much more than just React components.

Some of the major concepts explored so far include:

- Component composition
- State management
- Context API
- Custom hooks
- TypeScript architecture
- Firebase integration
- Firestore data modeling
- Folder organization
- Clean code practices
- Incremental software development

---

# Running the Project

Clone the repository

```bash
git clone https://github.com/Ayushkumar20045/verse.git
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Create a production build

```bash
npm run build
```

Run ESLint

```bash
npm run lint
```

---

# Project Status

Verse is currently under active development.

The project is being built feature-by-feature while keeping the codebase clean, modular, and production-ready.

Future updates will focus on completing the backend integration and polishing the overall user experience.

---

## Author

**Ayush Kumar**
Building Verse as a long-term learning project to strengthen full-stack development skills using React, Next.js, TypeScript, and Firebase.

---

Thank you for visiting the repository.

More updates coming soon.