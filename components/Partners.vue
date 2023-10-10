<template>
  <div class="partners">
    <div class="container">
      <h4 class="text-center text-xl mb-10">{{ $t("cooperation") }}</h4>

      <div class="flex flex-wrap justify-between items-center gap-4 mb-10">
        <div class="partner">
          <img src="~/assets/images/partner-img.jpeg" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img-1.jpeg" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img-2.png" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img-3.jpeg" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img.jpeg" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img-1.jpeg" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img-2.png" alt="" />
        </div>
        <div class="partner">
          <img src="~/assets/images/partner-img-3.jpeg" alt="" />
        </div>
      </div>
      <div class="partners-down">
        <a href="#">
          Единый портал общественного обсуждения проектов нормативных правовых актов Кыргызской Республик
        </a>
        <a href="#"> Государственный портал электронных услуг Кыргызской Республики </a>
        <a href="#"> Жогорку Кенеш Кыргызской Республики </a>
        <a href="#"> Правительство Кыргызской Республики </a>
        <a href="#"> Президент Кыргызской Республики </a>
        <a href="#"> Официальный Портал Государственных Закупок Кыргызской Республики </a>
        <a href="#"> Антикоррупционная политика Правительства Кыргызской Республики </a>
        <a href="#"> ЦЕНТРАЛИЗОВАННЫЙ БАНК ДАННЫХ ПРАВОВОЙ ИНФОРМАЦИИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ </a>
        <a href="#"> Кыргыз Республикасынын Президентине караштуу Мамлекеттик тил боюнча улуттук комиссия </a>
        <a href="#"> Кыргызстан страна небесных гор </a>
        <a href="#"> Единая национальная отчетност </a>
        <a href="#"> ЦЕНТРАЛИЗОВАННЫЙ БАНК ДАННЫХ ПРАВОВОЙ ИНФОРМАЦИИ КЫРГЫЗСКОЙ РЕСПУБЛИКИ </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partners {
  background: #f8f8f8;
  padding: 40px 0;

  &-down {
    a {
      font-weight: 300;
      display: block;
      margin-bottom: 15px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.partner {
  flex-basis: 23%;
  margin-bottom: 15px;
}
</style>
