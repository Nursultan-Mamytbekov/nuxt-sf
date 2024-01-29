<script setup lang="ts">
import type { Partner } from "~/types";
const { find } = useStrapi();
const { locale } = useI18n();

const params = computed(() => ({ populate: ["logo"], locale: locale.value as any }));
const { data: partners } = await useAsyncData("partners", () => find<Partner>("partners", params.value), {
  server: false,
  watch: [locale],
});
</script>

<template>
  <div class="partners">
    <div class="tw-container tw-px-4">
      <h4 class="tw-text-center tw-text-xl tw-mb-10">{{ $t("cooperation") }}</h4>

      <div class="md:tw-grid md:tw-grid-cols-4 md:tw-justify-items-center md:tw-gap-4 tw-mb-10">
        <div v-for="partner in partners?.data" :key="partner.id" class="partner">
          <NuxtLink :to="partner.attributes.url" target="_blank">
            <VTooltip :text="partner.attributes.title" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  class="tw-h-full"
                  :src="useStrapiImage(partner.attributes.logo.data?.attributes?.url)"
                  v-bind="props" />
              </template>
            </VTooltip>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dark-mode .partners {
  background: #091a28;
  color: #fff;
}
.partners {
  background: #f8f8f8;
  padding: 40px 0;

  &-down {
    a {
      font-weight: 300;
      display: block;
      margin-bottom: 15px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.partner {
  margin-bottom: 15px;
}
</style>
