<script setup lang="ts">
const route = useRoute();
const sideBlogId = route.params.id as string;
const { data: sideblog, pending } = await useStrapiApi().getSideBlogById(sideBlogId);
</script>

<template>
  <NuxtLayout name="container">
    <VSkeletonLoader v-if="pending" />
    <template v-else>
      <h3 class="tw-text-center tw-text-xl tw-mb-8">{{ sideblog?.data.attributes.content?.title }}</h3>

      <div
        class="tw-prose tw-prose-slate tw-max-w-full tw-content"
        v-html="sideblog?.data.attributes.content?.body"></div>
    </template>
  </NuxtLayout>
</template>

<style lang="scss">
.content {
  font-size: 16px !important;
  word-wrap: break-word;
}
</style>
