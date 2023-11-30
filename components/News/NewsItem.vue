<script setup lang="ts">
import type { Strapi4ResponseData } from "@nuxtjs/strapi/dist/runtime/types/v4";
import type { Article } from "~/types";

const localePath = useLocalePath();
defineProps<{ article: Strapi4ResponseData<Article> }>();
</script>

<template>
  <NuxtLink v-if="article" :to="localePath(`/article/${article.id}`)" class="flex flex-col mb-4">
    <span class="text-gray-400 text">{{ article.attributes?.createdAt }}</span>
    <span class="hover:underline">
      {{ article.attributes.content?.title }}
    </span>
  </NuxtLink>
</template>
