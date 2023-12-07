<script setup lang="ts">
const { data, pending } = await useStrapiApi().getPosts();
</script>

<template>
  <h1 class="text-xl mb-4">{{ $t("news") }}</h1>

  <template v-if="pending">
    <VSkeletonLoader v-for="n in 3" :key="3" class="skeleton mb-4" height="40px" />
  </template>
  <template v-else>
    <NewsItem v-for="post in data?.data" :key="post.id" :post="post" />
  </template>
</template>
