<script setup lang="ts">
import type { Post, StrapiResponse } from "~/types";

const localePath = useLocalePath();
defineProps<{ post: StrapiResponse<Post> }>();
</script>

<template>
  <NuxtLink v-if="post" :to="localePath(`/post/${post.id}`)" class="flex flex-col mb-4">
    <span class="text-gray-400 text">{{ post.attributes?.createdAt }}</span>
    <span class="hover:underline">
      {{ post.attributes.content?.title }}
    </span>
  </NuxtLink>
</template>
