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
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
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
</style>
