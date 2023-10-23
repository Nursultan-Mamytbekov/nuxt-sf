<template>
  <div class="news-alert mb-4">
    <span>{{ $t("informs.title") }}</span>
    <a href="#">{{ $t("informs.more") }}</a>
  </div>
</template>

<style scoped lang="scss">
.news-alert {
  position: relative;
  color: #fff;
  background: #0083bb;
  height: 350px;

  img {
    width: 100%;
    height: 345px;
  }

  span {
    font-size: 24px;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }

  a {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-block;
    font-weight: 300;
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px 15px;
  }
}
</style>
