<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const navs = [
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
  {
    label:
      "Сведения о количестве пенсионеров и размерах пенсии на 01.01.2017 года по данным Статистического отчета 94-СОЦ ",
    link: "",
  },
];
</script>

<template>
  <HoverMenuItem>
    <template #name>{{ $t("nav.payment") }}</template>
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
