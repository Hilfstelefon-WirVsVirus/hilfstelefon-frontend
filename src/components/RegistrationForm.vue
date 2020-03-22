<template>
  <div class="registation-form">
    <div class="registation-form__info info">
      <h2 class="info__heading">{{ $t('home.overlay.hello') }}</h2>
      <div class="info__text">{{ $t('home.overlay.main') }}</div>
    </div>
    <form @submit.prevent="handleSubmit">
      <label for="email">
        <h2 class="registation-form__heading">{{ $t('home.overlay.help_us') }}</h2>
      </label>
      <input
        class="registation-form__input"
        v-model="email"
        type="email"
        id="email"
        :placeholder="$t('home.overlay.email_placeholder')"
      />
      <button class="registation-form__button">
        <img class="plus-icon" src="/img/icons/plus.svg" alt="" />
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegistationForm',
  data() {
    return {
      email: '',
    };
  },
  methods: {
    ...mapActions([
      'setEmail',
    ]),
    handleSubmit() {
      if (this.email) {
        this.setEmail(this.email);
        this.$router.push({ path: 'dashboard' });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .registation-form {
    &__heading {
      margin: 0 0 15px;
    }

    &__input {
      border: none;
      padding: 5px 28px 5px 5px;
      border-radius: 20px;
      font-style: italic;
      text-align: center;
      box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
    }

    &__button {
      border: none;
      border-radius: 100%;
      background: #8FCDC1;
      color: #fff;
      width: 28px;
      height: 28px;
      margin-left: -28px;
    }

    &__info {
      max-width: 300px;

      @media #{$desktop} {
        max-width: 400px;
      }
    }

    .plus-icon {
      vertical-align: middle;
      margin-top: -3px;
      filter: invert(100%)
        sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
    }
  }

  .info {
    margin: 0 auto;

    &__heading {
      margin: 0 0 15px;
    }

    &__text {
      margin-bottom: 20px;
    }
  }
</style>
