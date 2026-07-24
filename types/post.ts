import { Comment } from "@/types/comment";

export type Post = {
  id: string;

  userId: string;

  author: string;

  username: string;

  createdAt: Date;

  content: string;

  likes: string[];

  bookmarks: string[];

  comments: Comment[];

  shares: number;

  isLiked: boolean;

  isBookmarked: boolean;
};