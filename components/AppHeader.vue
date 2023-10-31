<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <header class="header">
    <section class="header-top py-5">
      <div class="container flex justify-between">
        <div class="flex justify-between">
          <VIcon icon="mdi-eye" class="mr-3" />
          <LanguageSwitcher />
        </div>
        <div class="flex gap-10">
          <input
            type="text"
            class="rounded-sm placeholder:pl-2"
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
          <span>{{ $t("appeal") }}</span>
        </div>
      </div>
    </section>

    <section class="header-main container flex justify-between items-center py-5">
      <div class="flex items-center gap-5">
        <NuxtLink :to="localePath('/')" class="logo">
          <img src="~/assets/logo.png" alt="logo" width="70" height="70" />
        </NuxtLink>
        <h1 class="title">{{ $t("logo") }}</h1>
      </div>

      <div>
        <span class="block text-right"> {{ $t("helplines") }} </span>
        <span class="phones"> 1202; 0(312)54-33-16; 0(312)57-66-61; 0(555)64-04-16 </span>
      </div>
    </section>

    <section class="header-down container mb-5">
      <ul class="flex justify-between items-center actions">
        <li>
          <MenuAbout />
        </li>
        <li>
          <MenuCitizens />
        </li>
        <li>
          <MenuPensioners />
        </li>
        <li>
          <MenuPayers />
        </li>
        <li>
          <MenuPayment />
        </li>
        <li>
          <MenuBudget />
        </li>
        <li>
          <a href="#">{{ $t("nav.contacts") }}</a>
        </li>
      </ul>
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
  font-size: 16px;
  font-weight: 500;
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
