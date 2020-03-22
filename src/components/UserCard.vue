<template>
    <div class="user-card">
        <div class="img-wrapper">
            <img class="user-card__image" :src="user.image" />
        </div>
        <h2 class="user-card__name">{{ user.name }}</h2>
        <ul class="user-card__social-list social-list">
            <li class="social-list__item" v-for="link in user.links" :key="link.url">
                <a class="social-link" :href="link.url">{{link.pretty}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'UserCard',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>

    .user-card {
        display: inline-block;
        border-radius: 13px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
        background-color: #f1f1f1;
        padding: 20px;
        margin: 10px;

        &:hover {
          .user-card__image {
            filter: grayscale(0);
          }
        }

        &__image {
            filter: grayscale(1);
            margin: 0 auto;
            height: 100px;
            width: 100px;
            position: relative;
            display: inline-block;
            object-fit: cover;
            border-radius: 100%;
            border: 3px solid #90CCC0;
            position: relative;

        }

        &__name {
            margin: 0;
            padding: 0;
            font-size: 20px;
        }

        &__social-list {
        }
    }

    .social-list {
        padding: 0 0 0 5px;
        list-style: none;
        display: block;

        &__item {
            padding: 5px 0;
            margin: 0;
            text-align: left;
            display: block;
        }
    }

    .social-link {
        text-decoration: none;
        color: #8FCDC1;

        &:hover {
            color: darken(#8FCDC1, 20);
        }
    }
</style>
