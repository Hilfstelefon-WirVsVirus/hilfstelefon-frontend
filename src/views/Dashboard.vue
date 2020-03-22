<template>
  <div class="page-container dashboard">
    <DashboardNavigation />
    <div class="dashboard-content">
      <div class="filter-bar">
        <h2>{{ $t('dashboard.filter')}}</h2>
        <form class="filter-list">
          <div class="filter-input">
            <label class="filter-input__label" for="zip" >{{ $t('filter.zip') }}
              <input type="text" name="zip" id="zip" v-model="zip"
                     class="filter-input__field--text filter-input__field"/>
            </label>
          </div>
          <div class="filter-input">
            <label class="filter-input__label" for="city" >{{ $t('filter.city') }}
              <input type="text" name="city" id="city" v-model="city"
                     class="filter-input__field--text filter-input__field"/>
            </label>
          </div>
          <div class="filter-input">
            <label class="filter-input__label" for="questions">{{ $t('filter.questions') }}
              <input type="checkbox" id="questions" v-model="questions" name="questions"
                     class="filter-input__field--checkbox filter-input__field"/>
              <span class="styled-checkbox"></span>
            </label>
          </div>
          <div class="filter-input">
            <label class="filter-input__label" for="support">{{ $t('filter.support') }}
              <input type="checkbox" id="support" v-model="support" name="support"
                     class="filter-input__field--checkbox filter-input__field"/>
              <span class="styled-checkbox"></span>
            </label>
          </div>
        </form>
      </div>
      <div class="listings">
        <header class="listings__title">
          {{ heading }}
        </header>
        <div class="listings__content listings-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import DashboardNavigation from '../components/DashboardNavigation.vue';

export default {
  name: 'Dashboard',
  components: { DashboardNavigation },
  methods: {
    ...mapActions([
      'setTasks',
    ]),
  },
  computed: {
    heading() {
      let text = '';
      if (this.$route.path.includes('mytasks')) {
        text = this.$t('dashboard.my_requests');
      } else if (this.$route.path.includes('edit')) {
        text = this.$t('dashboard.edit_request');
      } else {
        text = this.$t('dashboard.open_requests');
      }
      return text;
    },
  },
  data() {
    return {
      city: '',
      zip: '',
      questions: false,
      support: false,
    };
  },
  watch: {
    city(val) {
      this.$store.commit('SET_FILTER', { filterName: 'city', filterValue: val });
      this.$store.dispatch('updateTasks');
    },
    zip(val) {
      this.$store.commit('SET_FILTER', { filterName: 'zip', filterValue: val });
      this.$store.dispatch('updateTasks');
    },
    questions(val) {
      if (val) {
        if (this.$store.state.filters.category === 'SUPPORT') {
          this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: null });
        } else {
          this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: 'QUESTION' });
        }
      } else if (this.support) {
        this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: 'SUPPORT' });
      } else {
        this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: null });
      }
      this.$store.dispatch('updateTasks');
    },
    support(val) {
      if (val) {
        if (this.$store.state.filters.category === 'QUESTION') {
          this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: '' });
        } else {
          this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: 'SUPPORT' });
        }
      } else if (this.questions) {
        this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: 'QUESTION' });
      } else {
        this.$store.commit('SET_FILTER', { filterName: 'category', filterValue: '' });
      }
      this.$store.dispatch('updateTasks');
    },
  },
  mounted() {
    this.setTasks();
  },
};
</script>

<style lang="scss">
  .dashboard-content {
    width: 100%;
    display: flex;
    margin: 0;
  }

  .filter-bar {
    display: inline-block;
    width: 30%;
    padding-right: 30px;
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

    &__loading {
      font-size: 20px;
      margin-top: 50px;
    }
  }
  .filter {
    display: inline-block;
    max-width: 340px;
    min-width: 300px;
  }

  .filter-input {
    margin: 25px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 10px 10px 20px;
    box-shadow: 0 0 60px -20px rgba(0,0,0,0.75);
    border-radius: 13px;
    box-sizing: border-box;
    height: 60px;
    vertical-align: middle;

    &__label {
      width: 100%;
      text-transform: capitalize;
      justify-content: space-between;
      display: inline-flex;
      font-size: 30px;
      height: 40px;
      color: #516281;
      border-radius: 13px;
      text-align: left;
    }

    &__field {
      display: inline-block;
      color: #8D8D8D;
      box-sizing: border-box;
      border: 1px solid #8D8D8D;
      border-radius: 13px;

      &--text {
        padding: 15px 10px;
        outline: none;
        text-align: left;
        width: 60%;
        font-size: 24px;
        color: #8D8D8D;
        &:focus {
          border: 1px solid #2c3e50;
        }
      }

      &--checkbox {
        height: 0;
        width: 0;
        opacity: 0;

        + .styled-checkbox {
          &:after {
            border: 1px solid #B7B7B7;
            border-radius: 13px;
            opacity: 1;
            display: inline-block;
            width: 40px;
            height: 40px;
            content: '';
          }
        }

        &:checked {
          + .styled-checkbox {
            position: relative;
            &:after {
              border: 1px solid #2c3e50;
              background-image: url("/img/icons/check.svg");
              background-size: 30px;
              background-repeat: no-repeat;
              background-position: center;
            }
          }
        }
      }
    }
  }

</style>
