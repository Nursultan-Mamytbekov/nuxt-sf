<script setup lang="ts">
import type { Report } from "~/types";
const { find } = useStrapi();
const { locale } = useI18n();

const params = {
  populate: ["content"],
  locale: locale.value as any,
};

const { data: report, pending } = await useAsyncData("report", () => find<Report>("report", params));
</script>

<template>
  <NuxtLayout name="container">
    <VSkeletonLoader v-if="pending" />
    <template v-else>
      <h3 class="text-center text-xl mb-8">{{ report?.data.content?.title }}</h3>

      <div class="prose prose-slate max-w-full content" v-html="report?.data.attributes.content?.body"></div>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.content {
  font-size: 16px !important;
  word-wrap: break-word;
}
</style>
