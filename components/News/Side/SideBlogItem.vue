<script setup lang="ts">
import type { StrapiResponse, SideBlog } from "~/types";

const localePath = useLocalePath();
const config = useRuntimeConfig();

const props = defineProps<{ sideBlog: StrapiResponse<SideBlog> }>();

const imageUrl = computed(() => config.public.strapi.url + props.sideBlog.attributes.background.data?.attributes?.url);
</script>

<template>
  <NuxtLink :to="localePath(`/sideblog/${sideBlog.id}`)" class="side-news-item mb-4">
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
