<script setup lang="ts">
import type { Slider } from "~/types";

const { locale } = useI18n();
const { find } = useStrapi();
const { width } = useWindowSize();
const localePath = useLocalePath();

const params = computed(() => ({ populate: ["content", "background"], locale: locale.value as any }));

const { data: sliders, pending } = await useAsyncData("sliders", () => find<Slider>("sliders", params.value), {
  server: false,
  watch: [locale],
});
</script>

<template>
  <VSkeletonLoader v-if="pending" height="500px" />

  <template v-else>
    <div>
      <VCarousel v-if="sliders?.data" hide-delimiters show-arrows :height="width < 600 ? '25vh' : undefined">
        <VCarouselItem
          v-for="slider in sliders.data"
          :key="slider.id"
          :src="useStrapiImage(slider.attributes.background.data?.attributes?.url)"
          cover
          @click="$router.push(localePath(`/slider/${slider.id}`))">
          <div class="tw-h-full tw-flex tw-justify-center tw-items-end">
            <div class="tw-text-base md:tw-text-2xl tw-text-white tw-mb-4 md:tw-mb-10">
              {{ slider.attributes.content?.title }}
            </div>
          </div>
        </VCarouselItem>
      </VCarousel>
    </div>
  </template>
</template>
