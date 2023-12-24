<script setup lang="ts">
import type { Post, StrapiResponse } from "~/types";

const localePath = useLocalePath();
defineProps<{ post: StrapiResponse<Post> }>();
</script>

<template>
  <NuxtLink v-if="post" :to="localePath(`/post/${post.id}`)" class="tw-flex tw-flex-col tw-mb-4">
    <span class="tw-text-gray-400 tw-text">{{ post.attributes?.createdAt }}</span>
    <span class="hover:tw-underline">
      {{ post.attributes.content?.title }}
    </span>
  </NuxtLink>
</template>
