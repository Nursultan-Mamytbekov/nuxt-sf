<script setup lang="ts">
import type { Navigation } from "~/types";

const { find } = useStrapi();
const { locale } = useI18n();

defineEmits(["menuSelected"]);

const params = computed(() => ({
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
}));

const { data: navigations, pending } = await useAsyncData(
  `navigations:${locale.value}`,
  () => find<Navigation>("navigations", params.value),
  {
    watch: [locale],
  }
);
</script>

<template>
  <VSkeletonLoader v-if="pending" class="skeleton" height="40px" />
  <template v-else>
    <ul v-if="navigations?.data" class="md:tw-flex md:tw-justify-between md:tw-items-center actions">
      <li v-for="navigation in navigations.data" :key="navigation.id">
        <HoverMenuItem :navigation="navigation" @selected="$emit('menuSelected')" />
      </li>
    </ul>
  </template>
</template>
