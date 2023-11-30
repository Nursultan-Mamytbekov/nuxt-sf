<script setup lang="ts">
const { data, pending } = await useStrapiApi().getArticles();
</script>

<template>
  <h1 class="text-xl mb-4">{{ $t("news") }}</h1>

  <template v-if="pending">
    <VSkeletonLoader />
  </template>
  <template v-else>
    <NewsItem v-for="article in data?.data" :key="article.id" :article="article" />
  </template>
</template>
