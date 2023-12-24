<script setup lang="ts">
const { data, pending } = await useStrapiApi().getSideBlogs();
</script>

<template>
  <NewsAlert />
  <div v-if="pending">
    <VSkeletonLoader v-for="n in 3" :key="n" class="tw-mb-4" width="250px" height="130px" />
  </div>
  <div v-else>
    <SideBlogItem v-for="sideBlog in data?.data" :key="sideBlog.id" :side-blog="sideBlog" />
  </div>
</template>
