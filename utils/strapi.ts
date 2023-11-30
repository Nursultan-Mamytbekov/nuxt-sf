import type { Article, SideBlog } from "~/types";

export function useStrapiApi() {
  const { find, findOne } = useStrapi();
  const { locale } = useI18n();

  const withLocale = (params: Object) => ({ locale: locale.value as any, ...params });

  const getArticles = () => {
    const params = withLocale({ populate: "content.title" });
    return useAsyncData("articles", () => find<Article>("articles", params));
  };

  const getArticleById = (id: number | string) => {
    const params = { populate: ["content", "createdAt"] };
    return useAsyncData("article", () => findOne<Article>("articles", id, params));
  };

  const getSideBlogs = () => {
    const params = withLocale({ populate: ["content.title", "background.data.attributes.url"] });
    return useAsyncData("sideblogs", () => find<SideBlog>("sideblogs", params));
  };

  return {
    getArticles,
    getArticleById,
    getSideBlogs,
  };
}
