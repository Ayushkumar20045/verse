# Verse Development Log

## Day 0

- Created GitHub repository.
- Initialized the project.
- Fixed dependency installation.
- Verified development server.

## Day 1

- Removed default Next.js template.
- Added Verse landing page.
- Created project folder structure.
- Wrote initial README.

## Day 2 - Application Layout

- Learned the basics of CSS Grid.
- Built the three-column application layout.
- Created reusable layout components.
- Improved application metadata and branding.
- Added a centralized branding configuration.

## Day 3 - Sidebar Foundation

- Learned JavaScript `.map()` and React list rendering.
- Created a centralized navigation configuration.
- Built a dynamic sidebar using reusable data.
- Added Next.js routing with `Link`.
- Created the first reusable Button component with variants.
- Added the primary "Create Post" action.

## Day 4 - Feed Foundation

- Created a dedicated `feed` feature folder for better project organization.
- Built the `PostComposer` component for creating new posts.
- Built a reusable `PostCard` component using React props.
- Introduced a centralized `posts.ts` file for dynamic post rendering.
- Rendered posts using JavaScript `.map()` and reusable components.
- Improved the reusable Button component by adding `clsx` support for flexible styling.

## Day 5 - UI Components & Navigation

- Installed and configured Lucide React for scalable SVG icons.
- Learned how to pass React components as data through configuration objects.
- Updated the sidebar to render icons dynamically from `navigation.ts`.
- Created the first reusable Avatar component for future user profiles and posts.
- Improved the project architecture by keeping navigation labels, routes, and icons in a centralized configuration.
- Prepared the foundation for richer UI components in upcoming development sessions.

## Day 6 - UI Refinement & Layout Improvements

- Refined the overall desktop layout for a cleaner and more balanced appearance.
- Improved the feed structure by adjusting spacing and alignment between posts.
- Enhanced the Post Composer with better positioning and consistent styling.
- Polished the reusable Post Card component with improved typography and spacing.
- Introduced Verse-specific sections: **Ripples** for trending topics and **Constellations** for user suggestions.
- Fine-tuned the three-column layout to achieve a more centered and visually appealing desktop experience.
- Improved sidebar spacing while preserving the active navigation indicator and minimal design.
- Maintained a reusable and scalable component structure for future feature development.

## Day 7 - Interactive Feed & React State Management

- Implemented functional post creation using React state.
- Added a controlled textarea for real-time input handling.
- Lifted post state to the Feed component for centralized state management.
- Implemented dynamic feed updates where newly created posts appear instantly at the top.
- Added automatic textarea reset after successful post submission.
- Implemented live character counter for the post composer.
- Added a 280-character limit with real-time validation.
- Disabled post submission for empty or over-limit posts.
- Applied defensive validation inside the post creation logic.
- Introduced reusable Post data model with TypeScript.
- Implemented interactive Like functionality using immutable state updates.
- Added dynamic like counts with toggle behavior.
- Updated post UI to reflect liked and unliked states.
- Learned and applied React concepts including controlled components, lifting state up, derived state, immutable updates, conditional rendering, and state management using `map()`.

## Day 8 - CRUD Operations & Reusable UI Components

- Refactored PostCard to accept a single Post object for cleaner component APIs.
- Implemented keyboard shortcut support (Ctrl + Enter / ⌘ + Enter) for creating posts.
- Added a reusable action menu for post-specific actions.
- Implemented post deletion using immutable state updates with `filter()`.
- Built a reusable ConfirmModal component for confirmation dialogs.
- Replaced the browser confirmation dialog with a custom confirmation modal.
- Implemented inline post editing using controlled form inputs.
- Added post update functionality using immutable state updates with `map()`.
- Completed full CRUD functionality for the feed (Create, Read, Update, Delete).
- Applied React concepts including component communication, conditional rendering, controlled components, callback functions, and reusable UI architecture.

## Day 9 - Comment System & Nested State Management

- Created a dedicated Comment model to support nested comment data.
- Refactored the Post model to store comments as an array instead of a count.
- Built a reusable CommentComposer component for creating comments.
- Built a reusable CommentCard component with inline editing and deletion.
- Built a reusable CommentList component for rendering comments dynamically.
- Added expandable and collapsible comment sections for each post.
- Implemented complete CRUD functionality for comments using immutable React state updates.
- Reused the ConfirmModal component for secure comment deletion.
- Applied nested state management, callback functions, conditional rendering, and reusable component architecture throughout the comment system.

## Day 10 - Bookmark System & Context API Foundation

- Added bookmark functionality with toggle support for every post.
- Extended the Post model to include bookmark state for individual posts.
- Integrated bookmark actions into the PostCard component with dynamic UI updates.
- Created a dedicated PostsContext to centralize post-related state management.
- Implemented a reusable PostsProvider and custom usePosts hook using React Context API.
- Wrapped the application with PostsProvider to prepare for shared state across multiple pages.
- Began refactoring the Feed component to consume global state instead of local component state.
- Restored and stabilized the PostCard component after a major refactor, preserving all existing functionality.
- Resolved a TypeScript type conflict by correctly importing the custom Comment model instead of using the browser's built-in Comment interface.
- Successfully validated the application with passing lint and production build, establishing a solid foundation for upcoming features like the Bookmarks page and Firebase integration.

## Day 11 - Component Refactoring & Bookmarks Page

- Refactored the PostCard component into smaller reusable components for improved readability and maintainability.
- Created dedicated PostHeader, PostBody, PostActions, and CommentSection components.
- Built a reusable FeedList component to eliminate duplicated post rendering across multiple pages.
- Implemented a dedicated Bookmarks page to display all bookmarked posts using shared global state.
- Added conditional empty-state UI for users with no bookmarked posts.
- Connected the Bookmarks page with the PostsContext to synchronize bookmark changes across the application.
- Updated the Feed component to consume the reusable FeedList component and Context API.
- Added active navigation highlighting in the sidebar using Next.js App Router.
- Improved the overall project architecture by increasing component reusability and reducing code duplication.
- Successfully validated the application with passing lint and production build after the complete refactor.

## Day 12 - Shared Layout Architecture & Context Synchronization

- Refactored the application structure using Next.js Route Groups for a cleaner and more scalable architecture.
- Created a shared `(main)` layout to eliminate duplicated layout code across application pages.
- Moved the Home page into the shared layout while preserving the existing three-column interface.
- Migrated the Bookmarks page into the shared layout, enabling consistent navigation and UI across pages.
- Added active sidebar navigation highlighting using the current route.
- Improved application scalability by preparing a shared layout for future Profile, Explore, and Notifications pages.
- Refactored PostCard to remove duplicate local comment state and established PostsContext as the single source of truth for post interactions.
- Connected comment creation, editing, and deletion directly to PostsContext to ensure synchronized state across all pages.
- Fixed synchronization issues where comments were not updating correctly between the Home and Bookmarks pages.
- Verified cross-page synchronization by testing likes, bookmarks, and comments from multiple application routes.
- Successfully validated the application with passing ESLint checks and a successful production build after the architecture refactor.