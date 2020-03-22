<template>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item">
          <router-link to="/impress">{{ $t('navigation.imprint') }}</router-link>
        </li>
        <li class="navigation__list-item">
          <a href="//wirvsvirushackathon.org/" class="navigation__link">
            {{ $t('navigation.wirvsvirus') }}
          </a>
        </li>
        <li class="navigation__list-item">
          <a
            class="navigation__link"
            href="//github.com/Hilfstelefon-WirVsVirus">
            {{ $t('navigation.contribute') }}
          </a>
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
    display: flex;
    justify-content: center;
    margin-top: 50px;

    @media #{$mobile} {
      font-size: 24px;
    }

    &__list {
      list-style: none;
      margin: 0;
      padding: 0;

      @media #{$desktop}, #{$tablet} {
        display: flex;
      }
    }

    &__list-item {
      margin-bottom: 20px;
      text-align: center;

      @media #{$desktop}, #{$tablet} {
        margin-bottom: 0;
        padding: 0 15px;
        border-right: 1px solid;

        &:last-child {
          border-right: none;
        }
      }

      &:last-child {
        margin: 0;
      }
    }

    a {
      text-decoration: none;
    }
  }
</style>
