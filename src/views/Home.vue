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
    <IssueCard
      headline="Futter holen"
      text="test"
      city="Bremen"
      zip="28203"/>
  </div>
</template>

<script>
import IssueCard from '@/components/IssueCard.vue';
import RegistrationForm from '../components/RegistrationForm.vue';
import Navigation from '../components/Navigation.vue';
import Card from '../components/Card.vue';
import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    Card, Header, IssueCard, RegistrationForm, Navigation,
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
      max-width: 400px;
    }

    &__logo {
      flex: 1 1 100%;
      display: flex;
      justify-content: center;
    }

    &__text {
      flex: 1 1 100%;
      text-align: center;
    }
  }

  .logo {
    margin-bottom: 10px;

    &__image {
      max-width: 50%;

      @media #{$desktop} {
        max-width: 100%;
      }
    }
  }
</style>
