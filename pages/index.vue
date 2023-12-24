<template>
  <NuxtLayout name="container">
    <div class="md:tw-flex md:tw-gap-5 tw-mb-5">
      <div class="md:tw-basis-3/4">
        <div class="tw-mb-5">
          <Slider />
        </div>
        <News />
      </div>
      <div class="md:tw-basis-1/4">
        <SideBlog />
      </div>
    </div>
  </NuxtLayout>
  <Partners />
</template>
