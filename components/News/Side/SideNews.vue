<template>
  <div>
    <NewsAlert />
    <SideNewsItem :text="$t('anti_corruption')" />
    <SideNewsItem text="Мамлекеттик тил" />
    <SideNewsItem :text="$t('vacancies')" />
    <SideNewsItem text="НПА" />
    <SideNewsItem :text="$t('deposit_auctions')" />
    <SideNewsItem text="Видео-галерея" />
  </div>
</template>
