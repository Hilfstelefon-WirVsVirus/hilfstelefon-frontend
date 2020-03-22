<template>
  <div class="issue-card">
    <div
      class="issue-card__status-bar"
    >
    </div>
    <div class="issue-card__local-info location">
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
    <h3 class="issue-card__headline">Deine Antwort</h3>
    <textarea class="issue-card__answer"></textarea>
    <button
      class="issue-card__btn"
    >
      <span class="issue-card__btn__label">Senden</span>
    </button>
  </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js';
import { mapActions } from 'vuex';

export default {
  name: 'IssueCard',
  props: {
    taskId: Number,
    headline: String,
    text: String,
    city: String,
    zip: String,
    audiofile: String,
    state: String,
  },
  data() {
    return {
      $wavesurfer: null,
    };
  },
  methods: {
    ...mapActions([
      'selectTask',
    ]),
    handleAssignClick() {
      this.selectTask(this.taskId);
    },
    handleEditClick() {
      this.$router.push({ path: `edit/${this.taskId}` });
    },
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
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    overflow: hidden;

    &--open {
      background-color: #EDF2F7;
      padding-left: 50px;
    }

    &--progress {
      background-color: #FFF9EE;
      padding-left: 50px;
    }

    &--closed {
      background-color: #FFF0F7;
      padding-left: 50px;
    }

    &__status-bar {
      position: absolute;
      height: 100%;
      width: 20px;
      left: 0;
      top:0;

      &--open {
        background-color: #5B9989;
      }

      &--progress {
        background-color: #DEB300;
      }

      &--closed {
        background-color: #AA5B7B;
      }
    }

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

    &__btn {
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

    &__answer {
        border-radius: 15px;
        width: 100%;
        height: 150px;
        outline: none;
        padding: 10px;
        border-color: #999;
        color: #999;
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
