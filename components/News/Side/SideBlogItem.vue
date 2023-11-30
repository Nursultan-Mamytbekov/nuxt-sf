<script setup lang="ts">
import type { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types/v4";
import type { SideBlog } from "~/types";

const config = useRuntimeConfig();

const props = defineProps<{ sideBlog: Strapi4ResponseData<SideBlog> }>();

const imageUrl = computed(() => config.public.strapi.url + props.sideBlog.attributes.background.data?.attributes?.url);
</script>

<template>
  <NuxtLink to="/" class="side-news-item mb-4">
    <img :src="imageUrl" alt="" />
    <span>{{ sideBlog.attributes.content?.title }}</span>
  </NuxtLink>
</template>

<style scoped lang="scss">
.side-news-item {
  display: block;
  position: relative;
  color: #fff;

  span {
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
