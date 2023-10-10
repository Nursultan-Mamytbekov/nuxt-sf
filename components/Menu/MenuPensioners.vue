<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const navs = [
  { label: "Обучение пенсионеров", link: "" },
  {
    label: "Сроки назначения пенсий",
    link: "",
  },
  { label: "Памятка о порядке обращения за назначением пенсии", link: "" },
  {
    label: "Порядок перехода с одного вида пенсии на другой",
    link: "",
  },
  { label: "Перечень необходимых документов для перерасчета пенсии", link: "" },
  { label: "Порядок обращения за перерасчетом пенсии", link: "" },
  { label: "Перечень необходимых документов для назначения пенсии по случаю потери кормильца", link: "" },
  { label: "Перечень необходимых документов для назначения пенсии по инвалидности", link: "" },
  { label: "Перечень необходимых документов для назначения пенсии по возрасту", link: "" },
  { label: "Выплата пенсии по месту фактического проживания или по месту прописки", link: "" },
  { label: "Порядок перехода на выплату пенсии через коммерческие банки", link: "" },
  {
    label:
      "Причины запроса заявлений от пенсионеров, обслуживаемых в банках о продлении выплаты пенсии каждые 6 месяцев",
    link: "",
  },
  { label: "Общий порядок выплаты пенсии", link: "" },
];
</script>

<template>
  <HoverMenuItem>
    <template #name>{{ $t("nav.pensioners") }}</template>
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
