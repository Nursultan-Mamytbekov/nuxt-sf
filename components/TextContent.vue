<script setup lang="ts">
defineProps({
  content: {
    type: String,
    default: "",
  },
});

const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === "dark");
const colorStyle = computed(() => (isDarkMode.value ? { color: "#fff !important" } : ""));
</script>

<template>
  <div class="tw-prose tw-prose-slate tw-max-w-full content" id="content" :style="colorStyle" v-html="content"></div>
</template>
