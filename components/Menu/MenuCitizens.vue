<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const navs = [
  { label: "Пенсионные накопления - для ипотечного кредитования жилья.", link: "" },
  {
    label:
      "ПРАВИЛА выплаты Социальным фондом Кыргызской Республики средств пенсионных накоплений Государственного накопительного пенсионного фонда",
    link: "",
  },
  { label: "Возраст выхода на пенсию и требуемый стаж", link: "" },
  {
    label:
      "КОНКУРСНАЯ ДОКУМЕНТАЦИЯ по отбору управляющих компаний для заключения договора доверительного управления средствами пенсионных накоплений",
    link: "",
  },
  { label: "КОНКУРСНАЯ ДОКУМЕНТАЦИЯ по выбору управляющих компаний средствами ГНПФ", link: "" },
  { label: "Что нужно знать о состоянии личных страховых счетов", link: "" },
];
</script>

<template>
  <HoverMenuItem>
    <template #name>{{ $t("nav.citizens") }}</template>
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
