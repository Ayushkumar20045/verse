export type Post = {
  id: number;

  userId: string;

  author: string;
  username: string;
  time: string;
  content: string;

  likes: number;
  comments: number;
  shares: number;

  isLiked: boolean;
};