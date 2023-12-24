<template>
  <NuxtLayout name="container">
    <div class="tw-flex tw-gap-3">
      <div class="tw-basis-1/4">
        <slot name="navbar" />
      </div>
      <div class="tw-basis-3/4">
        <slot name="default" />
      </div>
    </div>
  </NuxtLayout>
</template>
