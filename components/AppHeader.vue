<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <header class="header">
    <section class="tw-hidden md:tw-block header-top tw-py-5">
      <div class="tw-container tw-flex tw-justify-between tw-items-center">
        <div class="tw-flex tw-justify-between tw-items-center tw-gap-2">
          <VisualHelper />
          <LanguageSwitcher />
        </div>
        <div class="tw-flex tw-gap-10">
          <input
            type="text"
            class="tw-rounded-sm tw-placeholder:pl-2"
            value=""
            name="search"
            :placeholder="$t('shared.search')" />
          <NuxtLink to="https://lk.sf.kg" target="_blank">{{ $t("personal_account") }}</NuxtLink>
          <div>
            <NuxtLink to="https://twitter.com/SocFondKG" target="_blank" class="mr-5">
              <VIcon icon="mdi-twitter" />
            </NuxtLink>
            <NuxtLink to="https://www.facebook.com/socfondKG" target="_blank"><VIcon icon="mdi-facebook" /></NuxtLink>
          </div>
          <NuxtLink to="https://digital.gov.kg/" target="_blank">{{ $t("appeal") }}</NuxtLink>
        </div>
      </div>
    </section>

    <section class="header-main tw-container tw-flex tw-justify-between tw-items-center tw-py-5 tw-px-4">
      <div class="tw-flex tw-items-center tw-gap-5">
        <NuxtLink :to="localePath('/')" class="logo">
          <img src="~/assets/logo.png" alt="logo" width="70" height="70" />
        </NuxtLink>
        <h1 class="tw-text-sm md:tw-text-base title">{{ $t("logo") }}</h1>
      </div>

      <div class="tw-hidden md:tw-block">
        <span class="tw-block tw-text-right"> {{ $t("helplines") }} </span>
        <span class="phones"> 1202; 0(312)54-33-16; 0(312)57-66-61; 0(555)64-04-16 </span>
      </div>

      <div class="md:tw-hidden">
        <VDialog fullscreen transition="dialog-top-transition">
          <template #activator="{ props }">
            <VBtn color="primary" v-bind="props" icon="mdi-menu" variant="plain" />
          </template>
          <template #default="{ isActive }">
            <VCard>
              <VToolbar class="tw-px-4 tw-flex">
                <div class="tw-flex tw-justify-between tw-items-center">
                  <VisualHelper />
                  <LanguageSwitcher />
                </div>
                <VSpacer />
                <VBtn variant="plain" icon="mdi-close" @click="isActive.value = false" />
              </VToolbar>
              <div class="tw-px-4">
                <div class="tw-flex tw-justify-between tw-py-4">
                  <NuxtLink to="https://lk.sf.kg" target="_blank">{{ $t("personal_account") }}</NuxtLink>
                  <span>{{ $t("appeal") }}</span>
                </div>

                <div class="tw-flex tw-justify-center tw-gap-10 tw-mb-5">
                  <div>
                    <NuxtLink to="https://twitter.com/SocFondKG" target="_blank" class="mr-5">
                      <VIcon icon="mdi-twitter" />
                    </NuxtLink>
                    <NuxtLink to="https://www.facebook.com/socfondKG" target="_blank">
                      <VIcon icon="mdi-facebook" />
                    </NuxtLink>
                  </div>
                </div>

                <HoverMenu @menu-selected="isActive.value = false" />
              </div>
            </VCard>
          </template>
        </VDialog>
      </div>
    </section>

    <section class="header-down tw-hidden md:tw-block tw-container tw-mb-5">
      <HoverMenu />
    </section>
  </header>
</template>

<style scoped lang="scss">
.header {
  &-top {
    background-color: #00699e;
    color: #fff;
  }

  &-title {
    margin-bottom: 16px;
  }
}

.title {
  max-width: 500px;
}

.phones {
  color: $primary;
}

.actions a {
  display: inline-block;
  text-decoration: none;
  color: $primary;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
}
</style>
