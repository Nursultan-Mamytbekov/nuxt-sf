<script setup lang="ts">
const { t } = useI18n();
const size = useFontSize();
const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === "dark");

const items = computed(() => [
  { title: t("increase_font"), icon: "mdi-format-font-size-increase", handler: () => size.value++ },
  { title: t("decrease_font"), icon: "mdi-format-font-size-decrease", handler: () => size.value-- },
  {
    title: isDarkMode.value ? t("light_mode") : t("dark_mode"),
    icon: isDarkMode.value ? "mdi-white-balance-sunny" : "mdi-moon-waning-crescent",
    handler: () => (colorMode.preference = isDarkMode.value ? "light" : "dark"),
  },
]);
</script>

<template>
  <VMenu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn icon="mdi-eye" flat variant="text" size="small" v-bind="props" />
    </template>
    <VList>
      <VListItem
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        :prepend-icon="item.icon"
        @click="item.handler">
        <VListItemTitle>{{ item.title }}</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>

<style scoped lang="scss">
:deep(.v-list-item__prepend) {
  display: block;
}
</style>
