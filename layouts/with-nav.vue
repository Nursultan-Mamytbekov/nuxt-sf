<template>
  <NuxtLayout name="container">
    <div class="flex gap-3">
      <div class="basis-1/4">
        <slot name="navbar" />
      </div>
      <div class="basis-3/4">
        <slot name="default" />
      </div>
    </div>
  </NuxtLayout>
</template>
