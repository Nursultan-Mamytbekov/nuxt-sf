<template>
  <NuxtLayout name="container">
    <div class="flex gap-5 mb-5">
      <div class="basis-3/4">
        <div class="mb-5">
          <Slider />
        </div>
        <News />
      </div>
      <div class="basis-1/4">
        <SideBlog />
      </div>
    </div>
  </NuxtLayout>
  <Partners />
</template>
