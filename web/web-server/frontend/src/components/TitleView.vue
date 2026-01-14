<template>
  <div id="icon-content"></div>
</template>

<script setup>

</script>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleView',
  components: {
  },
  setup() {
  }
})
</script>

<style scoped>
  #icon-content {
    height: 50px;
    background-image: url('@/assets/headerlogo.svg');
    background-repeat: no-repeat; 
    background-position: center;
    background-size: 120px auto; 
  }

  .tab-panel {
      min-height: 550px;
  }

  .title-view img {
    width: 100%;
    height: auto;
  }
</style>