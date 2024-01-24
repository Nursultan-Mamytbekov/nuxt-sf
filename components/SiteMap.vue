<script setup lang="ts">
import type { Navigation } from "~/types";

const { find } = useStrapi();
const { locale } = useI18n();
const localePath = useLocalePath();

const params = {
  populate: {
    body: {
      populate: {
        items: {
          populate: {
            article: {
              fields: ["id"],
            },
          },
        },
      },
    },
  },
  locale: locale.value as any,
};

const { data: navigations, pending } = await useAsyncData(
  "navigations",
  () => find<Navigation>("navigations", params),
  {
    server: false,
  }
);
</script>

<template>
  <VSkeletonLoader v-if="pending" class="skeleton" height="40px" />
  <template v-else>
    <div v-if="navigations?.data">
      <div v-for="navigation in navigations.data" :key="navigation.id" class="tw-mb-6">
        <h3 class="tw-text-lg tw-font-bold tw-mb-1">{{ navigation.attributes.name }}</h3>

        <div class="hover-menu-content tw-ml-6">
          <div v-for="section in navigation.attributes.body" :key="section.id">
            <h4 class="menu-title tw-w-full">{{ section.title }}</h4>
            <div class="menu-navs tw-ml-4">
              <NuxtLink
                v-for="nav in section.items"
                :key="nav.id"
                :to="{ path: localePath(`/article/${nav.article.data.id}`) }"
                class="menu-nav">
                {{ nav.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped lang="scss"></style>
