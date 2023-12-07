export interface StrapiResponse<T> {
  id: number;
  attributes: T;
  meta: Record<string, unknown>;
}

export type BaseStrapiEntity = {
  createdAt: string;
  updatedAt: string;
  locale: string;
};

export type Content = {
  content: { title: string; body: string } | null;
};

export type Report = BaseStrapiEntity &
  Content & {
    background: any;
  };

export type Chapter = BaseStrapiEntity & {
  name: string;
  navigation: Navigation;
  articles: Article[];
};

export type Post = BaseStrapiEntity & Content;

export type SideBlog = BaseStrapiEntity &
  Content & {
    background: any;
  };

export type Article = BaseStrapiEntity & {
  title: string;
  content: string;
  chapter: Chapter;
};

export type SectionItem = {
  id: number;
  title: string;
  article: {
    data: StrapiResponse<Article>;
  };
};

export type Section = {
  id: number;
  title: string;
  items: SectionItem[];
};

export type Navigation = BaseStrapiEntity & {
  name: string;
  body: Section[];
};
