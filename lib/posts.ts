import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: "1",
    userId: "user-1",
    author: "Ayush Kumar",
    username: "@ayushkumar",
    time: "2m",
    content: "Welcome to Verse. This is the first post of the project.",

    likes: 0,
    comments: [],
    shares: 0,

    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "2",
    userId: "user-2",
    author: "Arjun Mehta",
    username: "@arjunm",
    time: "12m",
    content:
      "Spent the weekend learning React component composition. It finally makes sense why reusable components are so powerful.",

    likes: 12,
    comments: [],
    shares: 1,

    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "3",
    userId: "user-3",
    author: "Sophia Lee",
    username: "@sophial",
    time: "28m",
    content:
      "Good UI isn't about adding more. It's about removing everything that doesn't need to be there.",

    likes: 18,
    comments: [],
    shares: 2,

    isLiked: false,
    isBookmarked: false,
  },
  {
    id: "4",
    userId: "user-4",
    author: "Noah Carter",
    username: "@noahc",
    time: "1h",
    content:
      "Just deployed my portfolio after weeks of polishing. Small improvements every day really do add up.",

    likes: 7,
    comments: [],
    shares: 0,

    isLiked: false,
    isBookmarked: false,
  },
];