import { Comment } from "./comment";

export type Post = {
  id: number;

  userId: string;

  author: string;
  username: string;

  time: string;

  content: string;

  likes: number;
  comments: Comment[];
  shares: number;

  isLiked: boolean;
};