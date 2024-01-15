export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type InitialState = {
  postsList: Post[];
  users: number[];
  post: Post | null;
  loading: boolean;
  error: null | string | undefined;
};
