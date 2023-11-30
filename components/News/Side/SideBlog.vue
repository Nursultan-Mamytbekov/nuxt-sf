<script setup lang="ts">
const { data, pending } = await useStrapiApi().getSideBlogs();
</script>

<template>
  <NewsAlert />
  <VSkeletonLoader v-if="pending" />
  <div v-else>
    <SideBlogItem v-for="sideBlog in data?.data" :key="sideBlog.id" :side-blog="sideBlog" />
  </div>
</template>
