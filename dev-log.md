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

## Day 13 - Expanding Verse Beyond the Feed

- Designed and implemented a dedicated Profile page using the existing PostsContext architecture.
- Displayed only the authenticated user's posts by filtering global state instead of duplicating data.
- Added a profile cover banner, user information section, profile statistics, and reusable post feed.
- Built a dedicated Explore page with its own layout while reusing the existing FeedList component.
- Created reusable Explore components including ExploreHeader, SearchBar, and TrendingTopics.
- Added a clean discovery interface with a search input and trending technology topics.
- Implemented a dedicated Notifications page with reusable NotificationCard, NotificationHeader, and NotificationList components.
- Designed notification cards with contextual icons, timestamps, and consistent styling.
- Continued the component-first architecture by separating page layouts from reusable UI components.
- Reused existing global state and feed components across Home, Bookmarks, Profile, and Explore without duplicating logic.
- Successfully validated all new pages with ESLint and production build checks.

## Day 14 - Settings Module & Global User State Management

- Built a dedicated Settings page using reusable and modular components.
- Created reusable SettingsSection, SettingsInput, SettingsToggle, and DangerZone components.
- Added account, appearance, notification, and privacy settings with a clean section-based layout.
- Implemented a reusable confirmation workflow for account deletion using the existing ConfirmModal component.
- Added a professional "Save Changes" workflow with dirty-state detection to prevent unnecessary saves.
- Implemented loading and success states for saving settings, preparing the UI for future backend integration.
- Introduced a dedicated UserContext to centralize user-related data across the application.
- Wrapped the application with UserProvider to make global user state available throughout the app.
- Migrated the Settings page from local component state to UserContext for centralized state management.
- Connected the Profile page to UserContext, enabling real-time synchronization of profile information.
- Refactored the application architecture by separating post-related state (PostsContext) from user-related state (UserContext).
- Prepared the application for Firebase integration by establishing a scalable user management architecture.
- Successfully validated the entire application with passing ESLint and production build checks after the architectural refactor.

## Day 15 - Firebase Foundation & Backend Architecture

- Created and configured a dedicated Firebase project for Verse.
- Installed the Firebase SDK and integrated it into the Next.js application.
- Configured environment variables using `.env.local` to securely manage Firebase credentials.
- Initialized Firebase with support for Authentication, Cloud Firestore, and Cloud Storage.
- Verified the Firebase configuration by successfully passing ESLint and production build checks.
- Enabled Google Authentication in the Firebase Console as the primary authentication provider.
- Built a reusable AuthContext to manage authentication state across the application.
- Integrated AuthProvider into the root application layout, preparing the app for protected routes and authenticated user sessions.
- Designed a scalable backend architecture by separating authentication, user management, and post management into independent contexts.
- Created a dedicated service layer under `lib/services` to isolate Firestore operations from React components.
- Implemented reusable service modules for users, posts, and comments to centralize future database CRUD operations.
- Established a clean architecture where Context Providers communicate with service modules instead of directly interacting with Firebase APIs.
- Planned the migration strategy from mock data to Firestore without disrupting the existing frontend functionality.
- Preserved the existing mock data layer temporarily to support an incremental migration approach, ensuring application stability throughout the backend transition.
- Successfully completed backend foundation setup while keeping the frontend fully functional and production-build ready.

## Day 16 - Firestore Integration Begins

- Created and configured a Cloud Firestore database for Verse.
- Designed typed Firestore models for users, posts, and comments.
- Refactored backend service modules to use strongly typed Firestore interfaces.
- Built a reusable `useFirestorePosts` hook for fetching posts with loading and error handling.
- Created a dedicated Firebase testing page to validate backend integration independently.
- Successfully performed the first Firestore Create and Read operations using real database documents.
- Verified the complete React → Service Layer → Firestore data flow through live testing.
- Prepared the application for migrating from mock data to Firestore without affecting the existing frontend architecture.
- Successfully validated all changes with ESLint and production build checks.

## Day 17 - Realtime Firestore Integration

- Improved Firestore queries by ordering posts based on their creation time for a consistent feed experience.
- Extended the posts service with a reusable realtime subscription using Firestore's `onSnapshot()`.
- Refactored the `useFirestorePosts` custom hook to subscribe to live Firestore updates instead of performing one-time data fetches.
- Updated the hook to automatically manage realtime synchronization and unsubscribe on component unmount.
- Resolved React 19 effect handling by adopting a subscription-based pattern compatible with the latest ESLint rules.
- Successfully verified realtime synchronization by creating posts in one browser tab and instantly receiving updates in another without refreshing the application.
- Finalized the realtime backend foundation, preparing the application for migrating `PostsContext` from mock data to Firestore.
- Successfully validated all changes with ESLint and production build checks.

## Day 18 - Firestore Data Mapping & Service Layer Refinement

- Introduced a dedicated mapping layer by creating `postMapper.ts` to convert Firestore documents into the UI-friendly `Post` model.
- Refactored the `useFirestorePosts` hook to return mapped `Post[]` instead of raw `FirestorePost[]`, keeping Firestore implementation details isolated from the UI.
- Improved the posts service by simplifying the `createPost` API, allowing callers to provide only the required fields while the service automatically initializes timestamps and default values.
- Updated the Firebase test page to use the new service API and removed the unnecessary manual page refresh, relying entirely on Firestore's realtime listeners.
- Preserved a clean separation between Firestore models and UI models, establishing a scalable architecture for future user profile and authentication integration.
- Successfully validated the refactored architecture with ESLint and production build checks, ensuring no regressions before beginning the PostsContext migration.

## Day 19 – Firestore Context Migration

- Migrated `PostsContext` completely to Firestore.
- Removed all local `setPosts()` state management.
- Converted `Post.id` and `Comment.id` from `number` to `string`.
- Connected all post CRUD operations to Firestore services.
- Connected all comment CRUD operations to Firestore services.
- Updated Firestore mappers and context logic.
- Fixed all ESLint warnings and errors.
- Verified post creation, deletion, and persistence after refresh.
- Identified remaining work for comments, likes, and bookmarks integration.

## Day 20 – Firebase Authentication & Firestore Integration

- Integrated Google Authentication using Firebase Auth.
- Connected the application with the existing `AuthContext`.
- Enabled authenticated user sessions across the application.
- Completed Firestore integration for posts and comments using real-time listeners.
- Refactored `useFirestorePosts` to synchronize posts and comments from Firestore.
- Migrated all remaining IDs from `number` to Firestore document `string` IDs.
- Updated context methods to work directly with Firestore documents.
- Fixed Like functionality using authenticated Firebase user IDs.
- Fixed Bookmark functionality with Firestore array synchronization.
- Replaced all remaining hardcoded `"user-1"` ownership checks with authenticated Firebase UIDs.
- Restored Post Edit/Delete functionality for authenticated users.
- Restored Comment Edit/Delete functionality for authenticated users.
- Updated permission checks across post and comment components.
- Verified complete CRUD operations for posts and comments.
- Fixed TypeScript issues and verified the application with successful ESLint validation.