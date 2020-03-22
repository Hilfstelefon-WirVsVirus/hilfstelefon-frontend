<template>
  <div class="page-container home">
    <Header />
    <main>
      <div class="content">
        <div class="content__logo logo">
          <img class="logo__image" src="/img/icons/landing_graphic.svg" :alt="$t('meta.title')" />
        </div>
        <div class="content__text">{{ $t('home.main') }}</div>
      </div>
      <Card>
        <RegistrationForm />
        <Navigation />
      </Card>
    </main>
  </div>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm.vue';
import Navigation from '../components/Navigation.vue';
import Card from '../components/Card.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    Card, Header, RegistrationForm, Navigation,
  },
};
</script>

<style lang="scss">
  .content {
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    padding: 0;
    max-width: 300px;
    @media #{$desktop} {
      max-width: 600px;
    }
    &__logo {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
    }
    &__text {
      flex: 1 1 100%;
      text-align: center;
      font-size: 20px;
      line-height: 1.5;
      margin-top: 40px;
    }
  }
  .logo {
    margin-bottom: 10px;
    &__image {
      max-width: 50%;
      @media #{$desktop} {
        width: 100%;
        max-width: 400px;
      }
    }
  }
</style>
