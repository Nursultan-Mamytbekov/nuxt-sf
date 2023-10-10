<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const { locales } = useI18n();
const router = useRouter();
const switchLocalePath = useSwitchLocalePath();

const setLocale = (_locale: string | LocaleObject) => {
  router.push({ path: switchLocalePath(_locale as string) });
};
</script>

<template>
  <div class="flex gap-2">
    <span v-for="(locale, index) in locales" :key="index" class="locale" @click="setLocale(locale)">{{
      $t(locale as string)
    }}</span>
  </div>
</template>

<style scoped lang="scss">
.locale {
  cursor: pointer;
}
</style>
