<template>
  <div class="dashboard-navigation">
    <div class="dashboard-navigation__logo logo">
      <img
        class="logo__image"
        src="/img/icons/logo.svg"
        :alt="$t('meta.title')"
      />
      <h1 class="logo__text">{{ $t('meta.title') }}</h1>
    </div>
    <ul class="dashboard-navigation__list">
      <li class="dashboard-navigation__list-item">
        <router-link to="/dashboard">Offene Tasks</router-link>
      </li>
      <li class="dashboard-navigation__list-item">
        <router-link to="/dashboard/mytasks">Meine Tasks</router-link>
      </li>
      <li class="dashboard-navigation__list-item">{{ email }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DashboardNavigation',
  computed: {
    ...mapGetters([
      'email',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .dashboard-navigation {
    display: flex;
    margin-top: 20px;

    &__logo {
      flex: 1 1 60%;
    }

    &__list {
      flex: 1 1 40%;
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    &__list-item {
      flex: 1 1 100%;
      text-align: right;
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
</style>
