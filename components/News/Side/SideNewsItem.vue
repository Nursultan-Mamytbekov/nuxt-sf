<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="side-news-item mb-4">
    <img src="~/assets/images/side-news.jpeg" alt="" />
    <span>{{ text }}</span>
  </div>
</template>

<style scoped lang="scss">
.side-news-item {
  position: relative;
  color: #fff;

  span {
    font-size: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    font-weight: 300;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px 15px;
  }
}
</style>
