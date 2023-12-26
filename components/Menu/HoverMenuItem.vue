<script setup lang="ts">
import type { StrapiResponse, Navigation } from "~/types";

const { width } = useWindowSize();

defineProps<{ navigation: StrapiResponse<Navigation> }>();

defineEmits(["selected"]);

const localePath = useLocalePath();
const disabled = ref(false);
const showDialog = ref(false);
const hide = () => (disabled.value = true);
const showMobileMenu = () => {
  if (width.value < 600) showDialog.value = true;
};
</script>

<template>
  <div class="hover-menu" @mouseover="disabled = false" @click="showMobileMenu">
    <span class="hover-menu-item">
      {{ navigation.attributes.name }}
    </span>

    <div class="hover-menu-content" :class="{ disabled }">
      <div class="tw-container tw-grid tw-grid-cols-2 tw-grid-flow-row-dense tw-gap-x-20 tw-gap-y-2">
        <div v-for="section in navigation.attributes.body" :key="section.id" class="menu-section">
          <h4 class="menu-title tw-w-full">{{ section.title }}</h4>
          <div class="menu-navs">
            <NuxtLink
              v-for="nav in section.items"
              :key="nav.id"
              :to="{ path: localePath(`/article/${nav.article.data.id}`) }"
              class="menu-nav"
              @click="hide">
              {{ nav.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="md:tw-hidden">
      <VDialog v-model="showDialog" fullscreen transition="slide-x-reverse-transition">
        <VCard>
          <VToolbar class="tw-px-4 tw-mb-5">
            <VSpacer />
            <VBtn variant="plain" icon="mdi-close" @click="showDialog = false" />
          </VToolbar>

          <div class="tw-px-4">
            <div v-for="section in navigation.attributes.body" :key="section.id" class="menu-section">
              <h4 class="menu-title tw-text-xl md:tw-text-base tw-w-full">{{ section.title }}</h4>
              <div class="menu-navs tw-text-lg md:tw-text-base">
                <NuxtLink
                  v-for="nav in section.items"
                  :key="nav.id"
                  :to="{ path: localePath(`/article/${nav.article.data.id}`) }"
                  class="menu-nav"
                  @click="$emit('selected')">
                  {{ nav.title }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </VCard>
      </VDialog>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hover-menu {
  display: inline-block;

  @media screen and (max-width: 600px) {
    display: block;
    text-align: center;
    font-size: 18px;
  }

  &:hover &-content {
    display: block;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  &:hover &-item {
    color: #000;
    border-radius: 8px 8px 0 0;
    background: #f7f6f9;
  }

  &-item {
    display: inline-block;
    text-decoration: none;
    color: $primary;
    padding: 10px 20px;
  }

  &-content {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    padding: 20px;
    background: #f7f6f9;
    border-radius: 4px;
    z-index: 1;

    &.disabled {
      display: none !important;
    }
  }
}
</style>
