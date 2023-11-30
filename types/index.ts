export type BaseStrapiEntity = {
  createdAt: string;
  updatedAt: string;
  locale: string;
};

export type Content = {
  content: { title: string; body: string } | null;
};

export type Article = BaseStrapiEntity & Content;

export type SideBlog = BaseStrapiEntity &
  Content & {
    background: any;
  };
