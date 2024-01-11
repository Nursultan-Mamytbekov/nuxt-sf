<script setup lang="ts">
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
