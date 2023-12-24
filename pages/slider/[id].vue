<script setup lang="ts">
import type { Slider } from "~/types";

const route = useRoute();
const { findOne } = useStrapi();

const sliderId = route.params.id as string;
const params = { populate: ["content"] };
const { data, pending } = await useAsyncData(`slider:${sliderId}`, () => findOne<Slider>("sliders", sliderId, params));
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

<style lang="scss">
.content {
  font-size: 16px !important;
  word-wrap: break-word;
}
</style>
