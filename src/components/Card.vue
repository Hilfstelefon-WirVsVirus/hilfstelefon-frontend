<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style lang="scss" scoped>
  .card {
    background: #EDF2F7;
    border-radius: 20px 20px 0 0;
    padding: 30px 20px;
    margin: 0 5px;
    text-align: center;
    min-height: 400px;
    @include shadow(30);
    position: relative;
  }
</style>
