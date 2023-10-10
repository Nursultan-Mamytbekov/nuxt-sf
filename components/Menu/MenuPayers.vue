<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const navs = [
  { label: "Расчетные счета СФ", link: "" },
  {
    label: "ДАННЫЕ о среднемесячной заработной плате по Кыргызской Республике на 2020 год",
    link: "",
  },
  { label: "ДАННЫЕ о среднемесячной заработной плате по Кыргызской Республике на 2019 год", link: "" },
  {
    label: "Коды платежей бюджетной классификации по страховым взносам",
    link: "",
  },
  { label: "ДАННЫЕ о среднемесячной заработной плате по Кыргызской Республике на 2021 год", link: "" },
  { label: "РАЗЪЯСНЕНИЕ о сроках применения ставок тарифов страховых взносов для (за) иностранных граждан", link: "" },
  { label: "ДАННЫЕ о среднемесячной заработной плате по Кыргызской Республике на 2022 год", link: "" },
  {
    label: "ЗАКОН КЫРГЫЗСКОЙ РЕСПУБЛИКИ О тарифах страховых взносов по государственному социальному страхованию",
    link: "",
  },
  { label: "ДАННЫЕ о среднемесячной заработной плате по Кыргызской Республике на 2023 год", link: "" },
];
</script>

<template>
  <HoverMenuItem>
    <template #name>{{ $t("nav.payers") }}</template>
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
