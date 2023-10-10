<template>
  <h1 class="text-xl mb-4">{{ $t("news") }}</h1>

  <NewsItem v-for="num in 10" :key="num" />
</template>
