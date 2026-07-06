import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: 1,
    author: "Ayush Kumar",
    username: "@ayushkumar",
    time: "2m",
    content: "Welcome to Verse. This is the first post of the project.",

    likes: 12,
    comments: 4,
    shares: 2,

    isLiked: false,
  },
  {
    id: 2,
    author: "Arjun Mehta",
    username: "@arjunm",
    time: "12m",
    content:
      "Spent the weekend learning React component composition. It finally makes sense why reusable components are so powerful.",

    likes: 28,
    comments: 7,
    shares: 3,

    isLiked: false,
  },
  {
    id: 3,
    author: "Sophia Lee",
    username: "@sophial",
    time: "28m",
    content:
      "Good UI isn't about adding more. It's about removing everything that doesn't need to be there.",

    likes: 41,
    comments: 12,
    shares: 5,

    isLiked: false,
  },
  {
    id: 4,
    author: "Noah Carter",
    username: "@noahc",
    time: "1h",
    content:
      "Just deployed my portfolio after weeks of polishing it. Small improvements every day really do add up.",

    likes: 19,
    comments: 6,
    shares: 2,

    isLiked: false,
  },
  {
    id: 5,
    author: "Emma Wilson",
    username: "@emmaw",
    time: "2h",
    content:
      "TypeScript felt difficult at first, but now I can't imagine building a React app without it.",

    likes: 34,
    comments: 9,
    shares: 4,

    isLiked: false,
  },
];