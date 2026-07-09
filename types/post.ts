import { Comment } from "@/types/comment";

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

  isBookmarked: boolean;
};