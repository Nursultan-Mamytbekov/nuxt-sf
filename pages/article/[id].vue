<script setup lang="ts">
const route = useRoute();
const { data, pending } = await useStrapiApi().getArticleById(route.params.id as string);
</script>

<template>
  <NuxtLayout name="container">
    <VSkeletonLoader v-if="pending" />
    <template v-else>
      <h3 class="tw-text-center tw-text-xl tw-mb-8">{{ data?.data.attributes.title }}</h3>

      <TextContent :content="data?.data.attributes.content" />
    </template>
  </NuxtLayout>
</template>
