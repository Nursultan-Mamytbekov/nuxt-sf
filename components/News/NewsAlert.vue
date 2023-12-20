<script setup lang="ts">
import type { Report } from "~/types";
const { find } = useStrapi();
const { locale } = useI18n();
const localePath = useLocalePath();

const params = {
  populate: ["content.title", "background.data.attributes.url"],
  locale: locale.value as any,
};

const { data, pending } = await useAsyncData(`report:${locale.value}`, () => find<Report>("report", params), {
  server: false,
});

const report = computed<Report>(() => data.value?.data.attributes);
</script>

<template>
  <VSkeletonLoader v-if="pending" class="mb-4" height="350px" />
  <div v-else class="news-alert mb-4">
    <span>{{ report.content?.title }}</span>
    <img v-if="report.background" :src="useStrapiImage(report.background.data?.attributes?.url)" alt="" />
    <NuxtLink :to="localePath('/report')">{{ $t("informs.more") }}</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
.news-alert {
  position: relative;
  color: #fff;
  background: #0083bb;
  height: 350px;

  img {
    width: inherit;
    height: inherit;
  }

  span {
    font-size: 24px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    font-weight: 300;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px 15px;
  }
}
</style>
