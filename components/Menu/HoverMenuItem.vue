<script setup lang="ts">
const disabled = ref(false);
const hide = () => (disabled.value = true);
</script>

<template>
  <div class="hover-menu" @mouseover="disabled = false">
    <span class="hover-menu-item">
      <slot name="name" />
    </span>

    <div class="hover-menu-content" :class="{ disabled }">
      <slot name="content" :hide="hide" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.hover-menu {
  display: inline-block;

  &:hover &-content {
    display: block;
  }
  &:hover &-item {
    color: #000;
    border-radius: 8px 8px 0 0;
    background: #f7f6f9;
  }

  &-item {
    display: inline-block;
    text-decoration: none;
    color: $primary;
    padding: 10px 20px;
  }

  &-content {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    padding: 20px;
    background: #f7f6f9;
    border-radius: 4px;
    z-index: 1;

    &.disabled {
      display: none !important;
    }
  }
}
</style>
