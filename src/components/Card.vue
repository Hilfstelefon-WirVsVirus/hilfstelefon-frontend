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
    box-shadow: 0px 0px 50px 0px rgba(0,0,0,0.25);
    padding: 30px 20px;
    margin: 0 5px;
    text-align: center;
  }
</style>
