<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const aboutNavs = [
  { label: t("about.history"), link: "/about/history" },
  { label: t("about.requisite"), link: "/about/requisites" },
];
const structureNavs = [
  { label: t("about.board_gss"), link: "/about/board-gss" },
  { label: "Правление Социального фонда КР (Руководство)", link: "/about/board-gss" },
  { label: "Структура Центрального аппарата Социального фонда КР", link: "/about/main-structure" },
  { label: "Структура региональных органов Социального фонда КР", link: "/about/region-structure" },
  { label: "Ветераны Социального фонда", link: "/about/board-gss" },
  { label: "Вакансии", link: "/about/board-gss" },
  { label: "Приемные дни", link: "/about/visiting-days" },
];
const activityNavs = [
  { label: "Депозитные аукционы", link: "/about/board-gss" },
  { label: "Антикоррупционная деятельность", link: "/about/board-gss" },
];
const educationNavs = [
  { label: "Об учебном центре", link: "/about/board-gss" },
  { label: `Журнал "Пенсия"`, link: "/about/board-gss" },
];
const reportNavs = [
  {
    label: "Отчеты об исполнении бюджета Социального фонда Кыргызской Республики за 2015 год",
    link: "/about/board-gss",
  },
  {
    label: "Отчеты об исполнении бюджета Социального фонда Кыргызской Республики за 2015 год",
    link: "/about/board-gss",
  },
  {
    label: "Отчеты об исполнении бюджета Социального фонда Кыргызской Республики за 2015 год",
    link: "/about/board-gss",
  },
  {
    label: "Отчеты об исполнении бюджета Социального фонда Кыргызской Республики за 2015 год",
    link: "/about/board-gss",
  },
  {
    label: "Отчеты об исполнении бюджета Социального фонда Кыргызской Республики за 2015 год",
    link: "/about/board-gss",
  },
];
</script>

<template>
  <HoverMenuItem>
    <template #name>{{ $t("nav.about") }}</template>
    <template #content="{ hide }">
      <div class="container flex items-start gap-x-20 gap-y-10">
        <div class="column">
          <div class="menu-section">
            <h4 class="menu-title">{{ $t("about.title") }}</h4>
            <div class="menu-navs">
              <NuxtLink
                v-for="(nav, index) in aboutNavs"
                :key="index"
                :to="{ path: localePath(nav.link) }"
                class="menu-nav"
                @click="hide">
                {{ nav.label }}
              </NuxtLink>
            </div>
          </div>
          <div class="menu-section">
            <h4 class="menu-title">{{ $t("about.structure") }}</h4>
            <div class="menu-navs">
              <NuxtLink
                v-for="(nav, index) in structureNavs"
                :key="index"
                :to="{ path: localePath(nav.link) }"
                class="menu-nav"
                @click="hide">
                {{ nav.label }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="menu-section">
            <h4 class="menu-title">Учебный центр</h4>
            <div class="menu-navs">
              <NuxtLink
                v-for="(nav, index) in educationNavs"
                :key="index"
                :to="{ path: localePath(nav.link) }"
                class="menu-nav"
                @click="hide">
                {{ nav.label }}
              </NuxtLink>
            </div>
          </div>
          <div class="menu-section">
            <h4 class="menu-title">Деятельность</h4>
            <div class="menu-navs">
              <NuxtLink
                v-for="(nav, index) in activityNavs"
                :key="index"
                :to="{ path: localePath(nav.link) }"
                class="menu-nav"
                @click="hide">
                {{ nav.label }}
              </NuxtLink>
            </div>
          </div>
          <div class="menu-section">
            <h4 class="menu-title">Отчеты</h4>
            <div class="menu-navs">
              <NuxtLink
                v-for="(nav, index) in activityNavs"
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
