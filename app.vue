<script setup lang="ts">
useHead({
  title: "Социальный фонд КР",
  meta: [
    {
      name: "description",
      content: "СОЦИАЛЬНЫЙ ФОНД КЫРГЫЗСКОЙ РЕСПУБЛИКИ при КАБИНЕТЕ МИНИСТРОВ КЫРГЫЗСКОЙ РЕСПУБЛИКИ",
    },
    {
      name: "description",
      content: "КЫРГЫЗ РЕСПУБЛИКАСЫНЫН МИНИСТРЛЕР КАБИНЕТИНЕ караштуу КЫРГЫЗ РЕСПУБЛИКАСЫНЫН СОЦИАЛДЫК ФОНДУ",
    },
  ],
});

const fontSize = useFontSize();
const style = computed(() => ({ fontSize: `${fontSize.value}px` }));
</script>

<template>
  <div class="app" :style="style">
    <NuxtLayout>
      <VApp>
        <div>
          <AppHeader />
          <NuxtPage />
          <AppFooter />
        </div>
      </VApp>
    </NuxtLayout>
  </div>
</template>

<style>
.app {
  background: #091a28;
}
</style>
