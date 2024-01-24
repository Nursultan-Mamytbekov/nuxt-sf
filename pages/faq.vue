<script setup lang="ts">
import type { FAQ } from "~/types";
const { find } = useStrapi();
const { locale } = useI18n();

const params = {
  populate: ["content"],
  locale: locale.value as any,
};

const { data: faqs, pending } = await useAsyncData("faqs", () => find<FAQ>("faqs", params));
</script>

<template>
  <NuxtLayout name="container">
    <VSkeletonLoader v-if="pending" />
    <template v-else>
      <div class="faq">
        <h3 class="tw-text-xl tw-text-center">{{ $t("faq") }}</h3>
        <VExpansionPanels v-if="faqs?.data.length">
          <VExpansionPanel v-for="faq in faqs?.data" :key="faq.id" :ripple="false" rounded hide-actions>
            <template #title>
              <span class="faq__title">{{ faq?.attributes.content?.title }}</span>
            </template>
            <template #text>
              <div class="tw-prose tw-prose-slate tw-max-w-full content" v-html="faq?.attributes.content?.body"></div>
            </template>
          </VExpansionPanel>
        </VExpansionPanels>
      </div>
    </template>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.faq {
  &__title {
    color: $primary;
    font-weight: 600;
  }

  :deep(.v-expansion-panels) {
    z-index: 0;
  }
  :deep(.v-expansion-panel-text__wrapper) {
    border: 1px solid rgb(224, 224, 224);
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  :deep(.v-expansion-panel__shadow) {
    box-shadow: none;
  }
}
</style>
