<template>
  <NuxtLayout name="container">
    <div class="flex gap-5 mb-5">
      <div class="basis-3/4">
        <Slider class="mb-5" />
        <News />
      </div>
      <div class="basis-1/4">
        <SideNews />
      </div>
    </div>
  </NuxtLayout>
  <Partners />
</template>
