<script setup lang="ts">
import type { Slider } from "~/types";

const { locale } = useI18n();
const { find } = useStrapi();
const localePath = useLocalePath();

const params = { populate: ["content", "background"], locale: locale.value as any };

const { data: sliders, pending } = await useAsyncData("sliders", () => find<Slider>("sliders", params), {
  server: false,
});
</script>

<template>
  <VSkeletonLoader v-if="pending" height="500px" />

  <template v-else>
    <VCarousel v-if="sliders?.data" hide-delimiters show-arrows="hover">
      <VCarouselItem
        v-for="slider in sliders.data"
        :key="slider.id"
        :src="useStrapiImage(slider.attributes.background.data?.attributes?.url)"
        cover
        @click="$router.push(localePath(`/slider/${slider.id}`))">
        <div class="h-full d-flex justify-center items-end">
          <div class="text-2xl text-white mb-10">{{ slider.attributes.content?.title }}</div>
        </div>
      </VCarouselItem>
    </VCarousel>
  </template>
</template>
