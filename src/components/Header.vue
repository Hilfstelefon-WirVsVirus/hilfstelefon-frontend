<template>
  <header class="header">
    <div class="header__logo logo">
      <img
        class="logo__image"
        src="/img/icons/logo.svg"
        :alt="$t('meta.title')"
      />
      <h1 class="logo__text">{{ $t('meta.title') }}</h1>
    </div>
    <h2 class="header__phone phone">
      <a class="phone__link" :href="phone">{{ $t('meta.phone') }}</a>
      <div class="phone__image-wrapper">
        <img
          class="phone__image"
          src="/img/icons/phone.svg"
          alt=""
        />
      </div>
    </h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    phone() {
      return `tel:${this.$t('meta.phone')}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 20px 0;

    @media #{$tablet}, #{$desktop} {
      flex-wrap: nowrap;
    }

    &__logo {
      flex: 1 1 100%
    }

    &__phone {
      flex: 1 1 100%;
      margin: 0;
      text-align: center;

      @media #{$tablet}, #{$desktop} {
        font-size: 2em;
      }
    }
  }

  .logo {
    display: flex;
    justify-content: center;

    @media #{$tablet}, #{$desktop} {
      justify-content: flex-start;
    }

    &__image {
      width: 30px;
      margin-right: 10px;
    }

    &__text {
      margin: 0;
    }
  }

  .phone {
    display: flex;
    align-items: center;
    justify-content: center;

    @media #{$tablet}, #{$desktop} {
      justify-content: flex-end;
    }

    &__image-wrapper {
      display: none;
      border-radius: 100%;
      height: 35px;
      width: 35px;
      background: #90CCC0;
      margin-left: 10px;

      @media #{$tablet}, #{$desktop} {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__image {
      width: 20px;
      filter: invert(100%)
        sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }
</style>
