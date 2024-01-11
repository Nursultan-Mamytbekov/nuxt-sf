<script setup lang="ts">
const route = useRoute();
const { data, pending } = await useStrapiApi().getPostById(route.params.id as string);
</script>

<template>
  <NuxtLayout name="container">
    <VSkeletonLoader v-if="pending" />
    <template v-else>
      <h3 class="tw-text-center tw-text-xl tw-mb-8">{{ data?.data.attributes.content?.title }}</h3>

      <div class="tw-prose tw-prose-slate tw-max-w-full content" v-html="data?.data.attributes.content?.body"></div>
    </template>
  </NuxtLayout>
</template>
