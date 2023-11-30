<script setup lang="ts">
const route = useRoute();
const { data, pending } = await useStrapiApi().getArticleById(route.params.id as string);
</script>

<template>
  <NuxtLayout name="container">
    <VSkeletonLoader v-if="pending" />
    <template v-else>
      <h3 class="text-center text-xl mb-8">{{ data?.data.attributes.content?.title }}</h3>

      <div class="prose prose-slate max-w-full content" v-html="data?.data.attributes.content?.body"></div>
    </template>
  </NuxtLayout>
</template>

<style lang="scss">
.content {
  font-size: 16px !important;
  word-wrap: break-word;
}
</style>
