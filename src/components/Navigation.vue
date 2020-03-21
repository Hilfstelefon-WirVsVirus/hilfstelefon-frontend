<template>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item">
          <router-link to="/impressum">{{ $t('navigation.imprint') }}</router-link>
        </li>
        <li class="navigation__list-item">
          <router-link to="/wirvsvirus">{{ $t('navigation.wirvsvirus') }}</router-link>
        </li>
        <li class="navigation__list-item">
          <router-link
            :class="navigation__link"
            to="/contribute"
          >
            {{ $t('navigation.contribute') }}
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style lang="scss" scoped>
  .navigation {
    font-size: 24px;
    margin-top: 50px;

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    &__list-item {
      margin-bottom: 20px;
      text-align: center;

      &:last-child {
        margin: 0;
      }
    }

    a {
      text-decoration: none;
    }
  }
</style>
