<template>
  <div class="issue-card">
    <div
      class="issue-card__local-info  location">
      <img class="location__icon" alt="local-icon" src="/img/icons/location-arrow.svg">
      <span class="location__city">{{ city }} / </span>
      <span class="location__plz">{{ zip }}</span>
    </div>
    <h3 class="issue-card__headline">{{ headline }}</h3>
    <p class="issue-card__text">{{ text }}</p>
    <div class="issue-card__record record">
      <div class="record__waveform" ref="waveformcontainer"></div>
      <button @click="$wavesurfer.playPause()" class="record__playbutton">
        <img alt="play-icon" src="/img/icons/play.svg">
      </button>
    </div>
    <button class="issue-card__assign">
      <span class="issue-card__assign__label">Übernehmen</span>
      <img alt="add-icon" src="/img/icons/plus.svg">
    </button>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js';

export default {
  name: 'IssueCard',
  props: {
    headline: String,
    text: String,
    city: String,
    zip: String,
    audiofile: String,
  },
  data() {
    return {
      $wavesurfer: null,
    };
  },
  mounted() {
    const wavesurfer = WaveSurfer.create({
      container: this.$refs.waveformcontainer,
      waveColor: '#516281',
      progressColor: '#8FCDC1',
    });
    this.$wavesurfer = wavesurfer;
    wavesurfer.load('https://api.twilio.com/2010-04-01/Accounts/ACb1d198ab96bb32bc506f9ee5878839b4/Recordings/RE83d339e74e377ff8239b1eb4d2a2ec37.mp3?Download=true&_ga=2.5597747.1880444191.1584738286-826576866.1584738286');
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .issue-card {
    width: 100%;
    max-width: 800px;
    margin: 50px auto;
    padding: 30px;
    background-color: #EDF2F7;
    border-radius: 21px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @include shadow(10);

    &__headline {
      font-size: 30px;
      margin: 10px 0;
      padding: 0;
    }

    &__text {
      text-align: left;
      max-width: 500px;
      margin: 0 0 20px;
    }

    &__record {
      width: 100%;
    }

    &__assign {
      @extend .button;
      padding: 10px 10px 10px 20px;
      margin-top: 20px;
      border-radius: 30px;
      align-self: flex-end;
      display: flex;
      align-items: center;

      &__label {
        padding-right: 10px;
      }
    }
  }

  .location {
    &__icon {
      margin-right: 10px;
    }
  }

  .record {
    display: flex;
    align-items: center;

    &__waveform {
      flex-grow: 1;
      margin-right: 20px;
    }

    &__playbutton {
      @extend .button;
      padding: 10px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
</style>