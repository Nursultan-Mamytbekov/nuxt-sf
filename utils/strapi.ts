import type { Article, SideBlog, Post } from "~/types";

export function useStrapiApi() {
  const { find, findOne } = useStrapi();
  const { locale } = useI18n();

  const withLocale = (params: Object) => computed(() => ({ locale: locale.value as any, ...params }));

  const getPosts = () => {
    const params = withLocale({ populate: "content.title" });
    return useAsyncData("posts", () => find<Post>("posts", params.value), { server: false, watch: [locale] });
  };

  const getPostById = (id: number | string) => {
    const params = { populate: ["content", "createdAt"] };
    return useAsyncData(`post:${id}`, () => findOne<Post>("posts", id, params));
  };

  const getArticleById = (id: number | string) => {
    const params = { populate: ["content", "createdAt"] };
    return useAsyncData(`article:${id}`, () => findOne<Article>("articles", id, params));
  };

  const getSideBlogs = () => {
    const params = withLocale({ populate: ["content.title", "background.data.attributes.url"] });
    return useAsyncData("sideblogs", () => find<SideBlog>("sideblogs", params.value), {
      server: false,
      watch: [locale],
    });
  };

  const getSideBlogById = (id: number | string) => {
    const params = { populate: "content" };
    return useAsyncData(`sideblogs:${id}`, () => findOne<SideBlog>("sideblogs", id, params));
  };

  return {
    getPosts,
    getPostById,
    getArticleById,
    getSideBlogs,
    getSideBlogById,
  };
}

export function useStrapiImage(imageUrl: string) {
  const config = useRuntimeConfig();

  return config.public.strapi.url + imageUrl;
}
