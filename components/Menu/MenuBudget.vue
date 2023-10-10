<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const navs = [
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
  { label: " Бюджет Социального фонда Кыргызской Республики на 2023 год и прогноз на 2024-2025 годы", link: "" },
];
</script>

<template>
  <HoverMenuItem>
    <template #name>{{ $t("nav.budget") }}</template>
    <template #content="{ hide }">
      <div class="container flex items-start gap-x-20 gap-y-10">
        <div class="column">
          <div class="menu-section">
            <!-- <h4 class="menu-title">{{ $t("about.title") }}</h4> -->
            <div class="menu-navs">
              <NuxtLink
                v-for="(nav, index) in navs"
                :key="index"
                :to="{ path: localePath(nav.link) }"
                class="menu-nav"
                @click="hide">
                {{ nav.label }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </template>
  </HoverMenuItem>
</template>

<style scoped lang="scss"></style>
