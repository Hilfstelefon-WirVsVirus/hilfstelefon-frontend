<template>
  <div class="page-container dashboard">
    <h1>{{ $t('dashboard.title') }}</h1>
    <div class="dashboard-content">
      <div class="filter-bar">
        <h2>{{ $t('dashboard.filter')}}</h2>
      </div>
      <div class="listings">
        <header class="listings__title">
          {{ $t('dashboard.open_requests')}}
        </header>
        <div class="listings__content listings-content">
          <h2 class="listings-content__title">
            {{ $t('dashboard.open_requests')}}
          </h2>
          <card>
            <span class="card__location">
              <img class="icon" src="/img/icons/location-arrow.svg"/>
              Aus Hamburg / 34561
            </span>
            <h3 class="card__title">
              Einkaufshilfe
            </h3>
            <p class="card__content">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo d
            </p>
            <div class="card__media" id="wavecontainer">

            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wavesurfer from 'wavesurfer.js';
import Card from '../components/Card.vue';

export default {
  name: 'Dashboard',
  components: { Card },
  mounted() {
    const wave = Wavesurfer.create({
      container: '#wavecontainer',
      waveColor: '#516281',
      progressColor: 'purple',
    });
    wave.load('https://api.twilio.com/2010-04-01/Accounts/ACb1d198ab96bb32bc506f9ee5878839b4/Recordings/RE83d339e74e377ff8239b1eb4d2a2ec37.mp3?Download=true&_ga=2.5597747.1880444191.1584738286-826576866.1584738286');
  },
};
</script>

<style lang="scss" scoped>
  .dashboard-content {
    width: 100%;
    display: flex;
    margin: 0;
  }

  .filter-bar {
    display: inline-block;
    width: 30%;
  }

  .listings {
    display: inline-block;
    width: 70%;
    max-width: 800px;
    border-radius: 21px;
    // REFACTOR
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.10);

    &__title {
      border-radius: 21px 21px 0 0;
      background-color: #90CCC0;
      color: #FFFFFF;
      font-size: 24px;
      height: 40px;
      display: block;
      width: 100%;
      text-align: left;
      padding-left: 50px;
      line-height: 40px;
    }

    &__content {
      padding: 20px 50px;
    }
  }

  .listings-content {
    &__title {
      margin: 0;
      padding: 0;
      font-size: 36px;
    }
  }

  .card {
    &__location {
      font-size: 24px;
      color: #516281;
      line-height: 1;
      vertical-align: middle;

      img {
        margin: auto 5px;
        display: inline-block;
        width: 15px;
        height: 15px;
      }
    }

    &__title {
      font-size: 36px;
      margin: 15px 0 0 0;
      padding: 0;
      color: #516281;
      line-height: 1;
    }

    &__content {
      margin: 15px 0 0 0;
      font-size: 24px;
      color: #516281;
    }

    &__media {
      margin: 15px 0 0 0;
    }
  }
</style>
