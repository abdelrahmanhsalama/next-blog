export type Article = {
  title: string;
  body: string;
  id: number;
};

export type ArticlesComponent = {
  articles: Article[];
  className?: string;
};
